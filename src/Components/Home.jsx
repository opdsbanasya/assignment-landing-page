import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
  }
  const handleClickLogin = () => {
    navigate("/login");
  }

  return (
    <div className="w-full md:w-{30%} relative top-[67%] md:top-[70%] lg:top-[55%] xl:top-[65%] px-6 py-8 flex flex-col gap-3 ">
      <span className="space-y-3 mb-4">
        <h1 className="text-2xl font-bold">Welcome To PopX</h1>
        <p className="w-2/3 text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </span>
      <span className="flex flex-col w-full gap-3">
        <button className="w-full bg-blue-500 py-2 font-semibold text-white rounded-md cursor-pointer" onClick={handleClickRegister}>
          Create Account
        </button>
        <button className="w-full bg-purple-300 py-2 font-semibold rounded-md cursor-pointer" onClick={handleClickLogin}>
          Already Registered? Login
        </button>
      </span>
    </div>
  );
};

export default Home;
