import { useBlog } from "../hooks/getBlogs";
import { useParams } from "react-router-dom";
import { Blog as BlogType } from "../types";
import Navbar from "../components/Navbar";

export default function Blog() {
  const params = useParams<{ id: string }>();
  const blog: BlogType = useBlog(String(params.id));
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 h-screen">
        <div className="col-span-2 m-8">
          <div className="text-5xl font-bold my-2">{blog.title}</div>
          {/* <div className="text-gray-500">Posted on Aug 5, 2024</div> */}
          <div className="text-md my-8 text-justify mr-4">{blog.content}</div>
        </div>
        <div className="col-span-1 m-8">
          <div className="border rounded p-5">
            <div className="text-lg font-bold pb-2">
              <div className="flex justify-center">About the Author</div>
            </div>
            <div className="flex">
              {/* <div className="bg-gray-500 w-[50px] h-[50px] rounded-full"></div> */}
              {/* <div className="pl-4"> */}
              <div className="font-semibold">{blog.author}</div>
              {/* <div>
                  Master of Computer Technology, University of Pitsburg
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
