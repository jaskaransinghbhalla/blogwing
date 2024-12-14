import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogBox() {
  const id = 2;
  const navigate = useNavigate();
  return (
    <div className="my-3 mx-8">
      <div>Top</div>
      <button
        className="focus:underline"
        onClick={() => {
          navigate(`/blog/${id}`);
        }}
      >
        Title
      </button>
      <div>Description</div>
      <div className="mt-8">Bottom</div>
      <div className="divide-y"></div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
