import React from "react";

function Signup() {
  return (
    <>
      <div className="flex flex-col my-2">
        <label htmlFor="email" className="text-sm italic">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="password" className="text-sm italic">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
      <div className="flex flex-col mt-2 mb-2">
        <label htmlFor="confirmPassword" className="text-sm italic">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
    </>
  );
}

export default Signup;
