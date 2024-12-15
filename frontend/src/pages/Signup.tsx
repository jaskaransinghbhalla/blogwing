import { SignupFormType } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import InputForm from "../components/Input";
// @ts-ignore
import { Navigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("token");
  if (jwtToken) {
    return <Navigate to="/blogs" replace />;
  }

  const BACKEND_HOST = "http://localhost:8787";
  const [formInput, setFormInput] = useState<SignupFormType>({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    axios
      .post(`${BACKEND_HOST}/api/v1/user/signup`, formInput)
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        console.log("Signup successful", response.data);
        navigate("/blogs");
      })
      .catch((error) => {
        console.error("There was an error signing up!", error);
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormInput((prevInput) => ({
      ...prevInput,
      [name.toLowerCase()]: value,
    }));
  };
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
                  navigate("/signin");
                }}
                className="underline"
              >
                Login?
              </span>
            </div>
            <div className="flex flex-col mx-2">
              <InputForm
                onChange={handleChange}
                placeholder="Name"
                name="Name"
                type=""
                value={formInput.name}
              />
              <InputForm
                onChange={handleChange}
                placeholder="Email"
                name="Email"
                type="email"
                value={formInput.email}
              />
              <InputForm
                onChange={handleChange}
                placeholder="Password"
                name="Password"
                type="password"
                value={formInput.password}
              />
              <Button text="Signup" onClick={handleSignUp}></Button>
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
