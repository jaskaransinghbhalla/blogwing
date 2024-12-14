import { useNavigate } from "react-router-dom";
import InputForm from "../components/Input";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left */}
        <div className="bg-white-400 flex justify-center items-center h-screen">
          <div className=" w-full flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">Create an Account</div>
            <div className="text-gray-600 mt-2 mb-4">
              Already have a Account{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
                className="underline"
              >
                Login?
              </span>
            </div>
            <div className="flex flex-col mx-2">
              <InputForm placeholder="Username" name="Username" type="" />
              <InputForm placeholder="Email" name="Email" type="email" />
              <InputForm
                placeholder="Password"
                name="Password"
                type="password"
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="bg-gray-200 flex justify-center items-center invisible lg:visible h-screen">
          <div className="px-8 col-span-2">
            <div className="font-semibold text-3xl">
              "It is good to hear what community feels like through an open
              platform."
            </div>
            <div className="my-4">
              <div className="font-bold">Suman Kumar Sharma</div>
              <div className="text-gray-500">Director, Anemeshia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
