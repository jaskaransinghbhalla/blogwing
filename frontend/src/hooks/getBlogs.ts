import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../App";
import { Blog } from "../types";

export function useBlogs(): Blog[] {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const jwtToken = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${config.BACKEND_HOST}/api/v1/blog/bulk/`, {
        headers: {
          Authorization: `${jwtToken}`,
        },
      })
      .then((res) => {
        setBlogs(res.data);
      });
  }, []);
  return blogs;
}
