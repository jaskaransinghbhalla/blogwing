import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Publish() {
  const jwtToken = localStorage.getItem("token");
  if (!jwtToken) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <div className="h-screen bg-gray-200">
        <Navbar />
        <div className="grid grid-cols-2 lg:grid-cols-4 py-8 m-8">
          <div className="col-span-3 mx-8">
            <div className="text-2xl my-3">Write a Article</div>
            <input className=""></input>
          </div>
          <div className="invisible"></div>
        </div>
      </div>
    </div>
  );
}
