import { useNavigate } from "react-router-dom";

export default function BlogBox() {
  const id = 2;
  const navigate = useNavigate();
  return (
    <div className="my-3 mx-8 p-5 border bg-white shadow-sm rounded-sm">
      <div>Top</div>
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
      <div className="mt-8">Bottom</div>
      <div className="divide-y"></div>
      {/* <hr className="h-px my-4 p-[1px] border rounded-full bg-gray-300 "></hr> */}
    </div>
  );
}
