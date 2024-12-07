import { Hono } from "hono";
import { userRouter } from "./user";
import { blogRouter } from "./blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
app.get("/", async (c) => {
  return c.text("Blogging Backend");
});
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
