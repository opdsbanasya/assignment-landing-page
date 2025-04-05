import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate("/account")
  }

  return (
    <div className="w-full h-full px-6 py-8 space-y-3 relative">
      <h1 className="text-3xl w-5/7 md:w-4/7 font-bold">
        Create your PopX account
      </h1>
      <form className="w-full flex flex-col gap-2" onSubmit={(e)=>handleCreateAccount(e)}>
        <label
          htmlFor="fullname"
          className="text-purple-500 text-sm font-semibold relative top-4 left-2 px-1 bg-white w-fit"
        >
          Full Name
          <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          required
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <label
          htmlFor="phone"
          className="text-purple-500 text-sm font-semibold relative top-4 left-2 px-1 bg-white w-fit"
        >
          Phone number
          <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <label
          htmlFor="email"
          className="text-purple-500 text-sm font-semibold relative top-4 left-2 px-1 bg-white w-fit"
        >
          Email address
          <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <label
          htmlFor="password"
          className="text-purple-500 text-sm font-semibold relative top-4 left-2 px-1 bg-white w-fit"
        >
          Password
          <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <label
          htmlFor="company"
          className="text-purple-500 text-sm font-semibold relative top-4 left-2 px-1 bg-white w-fit"
        >
          Company name
        </label>
        <input
          type="text"
          name="company"
          id="company"
          required
          className="text-sm outline-none border border-zinc-400 px-3 py-2 rounded-md"
        />

        <label htmlFor="agency">
          Are you an Agency?
          <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            name="agency"
            id="agency-yes"
            value="yes"
            required
            className=" text-blue-600 border-gray-300 checked:bg-[#2196F3]"
          />
          <label htmlFor="agency-yes">Yes</label>
          <input 
            type="radio" 
            name="agency" 
            id="agency-no" 
            value="no" 
            required
            />
          <label htmlFor="agency-no">No</label>
        </div>
        <input
          type="submit"
          className="w-full mt-28 md:mt-40 bg-blue-500 py-2 font-semibold text-white rounded-md"
          value="Create Account"
        />
      </form>
    </div>
  );
};

export default SignUp;
