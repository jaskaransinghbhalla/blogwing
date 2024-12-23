import { config } from "../App";
import { SignupFormType } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import Cookies from "js-cookie";
import InputForm from "../components/Input";

export default function Signup() {
  const navigate = useNavigate();
  const jwtToken = config.jwt;
  if (jwtToken) {
    setInterval(() => navigate("/blogs"), 2000);
    return (
      <div className="text-3xl flex flex-col justify-center items-center h-screen">
        <div>You have logged in already. </div>
        <div>Redirecting you to the Blogs Page </div>
      </div>
    );
  }

  const [formInput, setFormInput] = useState<SignupFormType>({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    axios
      .post(`${config.BACKEND_HOST}/api/v1/user/signup`, formInput)
      .then((response) => {
        Cookies.set("token", response.data.jwt, { secure: true });
        navigate("/signin");
      })
      .catch((error) => {
        if (error.status == 409) {
          alert("Email is already registered!");
        }
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
              <div className="mt-4">
                <Button text="Signup" onClick={handleSignUp}></Button>
              </div>
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
