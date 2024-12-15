import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl">
        {/* Left Section: Image */}
        <div className="w-72">
          <img
            src="./blogwing.png"
            alt="Welcome"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Welcome to{" "}
            <span className="bg-gray-800 text-white p-2 rounded-lg text-5xl ml-2">
              Blogwing!
            </span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            A platform to share your thoughts, stories, and ideas with the
            world. Join us today and start your journey.
          </p>
          <div className="space-y-4 space-x-8">
            <button
              className="px-3 py-3 w-40 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition transform hover:scale-105"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sing In
            </button>
            <button
              className="px-3 py-3 w-40 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition transform hover:scale-105"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
