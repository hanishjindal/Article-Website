import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const [authType, setAuthType] = useState("Login");
  const handleAuthClick = () => {
    if (authType === "Login") {
      setAuthType("Sign Up");
    } else {
      setAuthType("Login");
    }
  };
  return (
    <div className="w-full flex justify-center items-center p-20">
      <div className="flex flex-col items-center shadow-md duration-300 shadow-gray-400 p-10">
        <h2 className="text-3xl m-4 font-bold font-sans">{authType}</h2>
        {authType === "Login" ? (
          <Login authType={authType} setAuthType={setAuthType} />
        ) : (
          <Signup authType={authType} setAuthType={setAuthType} />
        )}
        <div>
          <spam className="italic">
            {authType === "Login" ? "New User? " : "Already have an account? "}
          </spam>
          <span
            className="text-blue-800 font-semibold cursor-pointer"
            onClick={handleAuthClick}
          >
            {authType === "Login" ? "Sign Up" : "Login"}
          </span>
        </div>
        <div>
          <button className="w-24 bg-blue-800 opacity-90 hover:opacity-100 duration-300 font-semibold hover:tracking-wide text-white p-2 rounded-sm mt-4 cursor-pointer">
            {authType}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
