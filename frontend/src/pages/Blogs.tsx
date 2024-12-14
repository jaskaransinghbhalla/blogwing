import BlogBox from "../components/BlogBox";
export default function Blogs() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-4 p-8 ">
        <div className="col-span-3">
          <div className="px-16">
            <div className="text-lg font-semibold flex border rounded-xl px-2 py-4 bg-white w-full">
              {/* <button className="px-4 py-1 focus:bg-black focus:text-white border rounded-full shadow-lg mx-2">+</button> */}
              <button className="px-4 py-1 focus:bg-black focus:text-white border rounded-full shadow-lg mx-2">Following</button>
              <button className="px-4 py-1 focus:bg-black focus:text-white border rounded-full shadow-lg mx-2">For You</button>
            </div>
          </div>
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
        <div></div>
      </div>
    </div>
  );
}
