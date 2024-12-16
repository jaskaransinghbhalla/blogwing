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
        <button className="text-gray-700 hover:text-gray-900">Write</button>
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
