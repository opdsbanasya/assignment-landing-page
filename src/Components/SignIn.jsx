import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/account")
  };

  return (
    <div className="w-full h-full px-6 py-8 space-y-3 relative">
      <span className="space-y-3 mb-4">
        <h1 className="text-3xl w-5/7 md:w-4/7 font-bold">
          Sign in your PopX account
        </h1>
        <p className="w-2/3 md:text-lg text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </span>

      <form action="" className="w-full flex flex-col" onSubmit={(e)=> handleLogin(e)}>
        <label
          htmlFor="email"
          className="text-purple-500 text-sm font-semibold relative top-2 left-2 px-1 bg-white w-fit"
        >
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <label
          htmlFor="password"
          className="text-purple-500 text-sm font-semibold relative top-2 left-2 px-1 bg-white w-fit"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <input
          type="submit"
          className="w-full bg-zinc-400 hover:bg-zinc-500 transition-all py-2 font-semibold text-white rounded-md mt-5"
          value="Create Account"
        />
      </form>
    </div>
  );
};

export default SignIn;
