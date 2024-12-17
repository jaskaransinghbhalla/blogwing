import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { config } from "../App";
import axios from "axios";

export default function Publish() {
  const jwtToken = config.jwt;
  if (!jwtToken) {
    return <Navigate to="/" replace />;
  }

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);

  const handlePublish = () => {
    axios
      .post(
        `${config.BACKEND_HOST}/api/v1/blog`,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `${jwtToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert("Blog Published Successfully!");
          setTitle("");
          setContent("");
          setPreview(false);
          navigate(`/blog/${res.data.id}`);
        } else {
          alert("Unsuccessfull! Please try again!");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Blog Form */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-xl font-semibold text-gray-700"
            >
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
              placeholder="Enter your blog title"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-xl font-semibold text-gray-700"
            >
              Blog Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
              rows={6}
              placeholder="Write your blog here..."
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setPreview(!preview)}
              className="bg-gray-900 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              {preview ? "Edit" : "Preview"}
            </button>

            <button
              onClick={handlePublish}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
              disabled={!title || !content}
            >
              Publish
            </button>
          </div>
        </div>

        {/* Blog Preview */}
        {preview && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-bold text-gray-800">Preview</h2>
            <h3 className="mt-2 text-lg font-semibold text-gray-600">
              {title}
            </h3>
            <p className="mt-2 text-gray-700">{content}</p>
          </div>
        )}
      </main>
    </div>
  );
}
