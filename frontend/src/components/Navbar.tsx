import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <div>
      <button
        className="p-3 bg-stone-500 text-white hover:bg-gray-800"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </div>
  );
}
