import { useNavigate } from "react-router-dom";

export default function BlogBox({ data }: any) {
  const id = 2;
  const navigate = useNavigate();
  return (
    <div className="my-4 mx-8 p-5 border bg-white shadow-sm rounded-sm">
      {/* Top */}
      <div className="flex space-x-2 align-middle">
        <div className="mx-1 flex items-center w-8 h-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="object-cover w-full h-full rounded-full w-8 h-8"
          />
        </div>
        <div className="m-2 text-sm">{data.name}</div>
        {/* <div className="m-2 text-sm text-gray-500">{data.date}</div> */}
      </div>
      {/* Middle */}
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(`/blog/${id}`);
        }}
      >
        <button
          className="focus:underline text-2xl my-3 font-extrabold"
          onClick={() => {
            navigate(`/blog/${id}`);
          }}
        >
          Title
        </button>
        <div className="text-gray-600">{data.content}</div>
      </div>
      <div className="mt-8 flex">
        <div className="bg-gray-200 rounded-3xl px-2 py-2 text-sm flex items-center">
          Docker
        </div>
        <div className="m-2 text-sm text-gray-500">4 min Read</div>
      </div>
      <div className="divide-y"></div>
    </div>
  );
}
