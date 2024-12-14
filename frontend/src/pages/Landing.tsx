import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col w-full justify-center items-center h-screen">
      <div className="text-center text-4xl font-bold">Medium</div>
      <div>
        <Button
          text="Signup"
          onClick={() => {
            navigate("/signup");
          }}
        />
        <Button
          text="Login"
          onClick={() => {
            navigate("/signin");
          }}
        />
      </div>
    </div>
  );
}
