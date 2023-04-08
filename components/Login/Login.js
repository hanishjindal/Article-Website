import React from "react";

function Login() {
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
      <div className="w-full flex items-center mb-2">
        <label htmlFor="checkbox" className="text-xs mr-2  italic">
          Show Password
        </label>
        <input type="checkbox" name="checkbox" id="checkbox" />
      </div>
    </>
  );
}

export default Login;
