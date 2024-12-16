import { useNavigate } from "react-router-dom";

export default function BlogBox() {
  const id = 2;
  const navigate = useNavigate();
  return (
    <div className="my-3 mx-8 p-5 border bg-white shadow-sm rounded-sm">
      {/* Top */}
      <div className="flex space-x-2 align-middle">
        <div className="mx-1 flex items-center">
          <img
            src="https://via.placeholder.com/150" // Replace with user's avatar URL
            alt="Profile"
            className="object-cover w-full h-full rounded-full w-[20px] h-[20px]"
          />
        </div>
        <div className="m-2 text-sm">Perter Raina</div>
        <div className="m-2 text-sm text-gray-500">Date</div>
      </div>
      {/* Middle */}
      <button
        className="focus:underline text-2xl my-3"
        onClick={() => {
          navigate(`/blog/${id}`);
        }}
      >
        Title
      </button>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente
        assumenda architecto facilis quam cupiditate porro repellat officia
        distinctio, vel ipsum. Rerum reprehenderit molestiae et debitis ipsum,
        dolores iusto quas!
      </div>
      <div className="mt-8 flex">
        <div className="bg-gray-200 rounded-3xl px-2 py-2 text-sm flex items-center">Docker</div>
        <div className="m-2 text-sm text-gray-500">4 min Read</div>
      </div>
      <div className="divide-y"></div>
      {/* <hr className="h-px my-4 p-[1px] border rounded-full bg-gray-300 "></hr> */}
    </div>
  );
}
