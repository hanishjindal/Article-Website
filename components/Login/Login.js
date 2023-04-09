import React, { useState } from "react";

function Login({ email, handleEmailChange, password, handlePasswordChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

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
          value={email}
          onChange={handleEmailChange}
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="password" className="text-sm italic">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
      <div className="min-w-[300px] flex items-center mb-2 mt-[1px]">
        <label htmlFor="checkbox" className="text-xs mr-2  italic">
          Show Password
        </label>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={showPassword}
          onChange={handleCheckboxChange}
        />
      </div>
    </>
  );
}

export default Login;
