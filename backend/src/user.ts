// Users
import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { sign } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { hashPassword } from "./utils";
import { signinInput, signupInput } from "@jsbhalla1510/blog-types";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Sign Up
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const obj = signupInput.safeParse(body);
  if (!obj.success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  const hashedPassword = await hashPassword(body.password);
  let name = "";
  if (body.name) {
    name = body.name;
  }

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!userExists) {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: hashedPassword,
          name: name,
        },
      });

      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    } else {
      return c.text("User already exists.");
    }
  } catch (e) {
    return c.status(403);
  }
});

// Sign In
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  const hashedPassword = await hashPassword(body.password);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (user) {
      if (user.password == hashedPassword) {
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
      } else {
        c.status(401)
        return c.text("Incorrect Password");
      }
    } else {
      c.status(403);
      return c.text("User not found");
    }
  } catch (e) {
    console.log(e);
    return c.status(403);
  }
});
