import React from "react";

function Signup({
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  confirmPassword,
  handleConfirmPasswordChange,
}) {
  return (
    <>
      <div className="flex flex-col my-2">
        <label htmlFor="fullname" className="text-sm italic">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={fullName}
          onChange={handleFullNameChange}
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
      <div className="flex flex-col">
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
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
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
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="px-2 py-1 min-w-[300px] border-2 border-gray-400"
        />
      </div>
    </>
  );
}

export default Signup;
