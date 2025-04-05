import React from "react";
import { USER } from "../constants";

const Account = () => {
  return (
    <div className="w-full h-full space-y-3 relative">
      <h3 className="py-4 px-8 text-lg mt-5">Account Settings</h3>
      <div className="grid grid-cols-12 gap-4 py-5 px-8 bg-zinc-100">
        <div className="col-span-3">
          <img
            src={USER?.profile}
            alt="User"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="col-span-9">
          <p className="font-bold text-lg">{USER?.name}</p>
          <p className="text-gray-600">{USER?.email}</p>
        </div>
        <div className="col-span-12 mt-4">
          <p className="">{USER?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
