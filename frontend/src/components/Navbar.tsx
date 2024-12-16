import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-2 shadow-sm border-b sticky">
      <button
        className="text-2xl font-bold bg-black text-white p-2 rounded-xl shadow-md"
        onClick={() => {
          navigate("/");
        }}
      >
        Blogwing
      </button>

      {/* Center Section: Search Bar */}
      {/* <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-md border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div> */}

      {/* Right Section: Buttons and Avatar */}
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-700 hover:text-gray-900 flex"
          onClick={() => {
            navigate("/publish");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Write
        </button>
        {/* <button className="relative">
          <span className="material-icons text-gray-700 hover:text-gray-900">
            notifications
          </span>
        </button> */}
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="https://via.placeholder.com/150" // Replace with user's avatar URL
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
}
