import { Navigate } from "react-router-dom";
import BlogBox from "../components/BlogBox";
import Navbar from "../components/Navbar";
export default function Blogs() {
  const jwtToken = localStorage.getItem("token");
  if (!jwtToken) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <div className="grid graid-cols-2 lg:grid-cols-4 py-8">
          <div className="col-span-3">
            <div>
              <div className="px-8">
                <div className="text-lg font-semibold flex border rounded-xl py-4 bg-white w-full shadow-lg">
                  {/* <button className="px-4 py-1 focus:bg-black focus:text-white border rounded-full shadow-lg mx-2">+</button> */}
                  <button className="px-4 py-1 focus:bg-black focus:text-white border rounded-full shadow-lg mx-2">
                    Following
                  </button>
                  <button className="px-4 py-1 focus:bg-black focus:text-white border rounded-full shadow-lg mx-2">
                    For You
                  </button>
                </div>
              </div>
            </div>
            <div>
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
            </div>
          </div>
          <div className="invisible"></div>
        </div>
      </div>
    </div>
  );
}
