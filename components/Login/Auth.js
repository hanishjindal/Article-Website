import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const [authType, setAuthType] = useState("Login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleAuthClick = () => {
    setEmail("");
    setPassword("");
    setError("");
    if (authType === "Login") {
      setAuthType("Sign Up");
    } else {
      setAuthType("Login");
    }
  };
  const handleAuth = () => {
    const nameregex = /^[a-zA-Z]+([a-zA-Z ]*[a-zA-Z])?$/;
    if (
      authType === "Sign Up" &&
      (fullName.length < 3 || !nameregex.test(fullName))
    ) {
      setError("Invalid name");
      return;
    }
    // Email format validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Password format validation using regular expression
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and should be at least 8 characters long"
      );
      return;
    }

    if (authType === "Sign Up") {
      if (password !== confirmPassword) {
        setError("Password do not match");
        return;
      }
      // handleSignupAuth();
    } else {
      // handleLoginAuth();
    }

    // Authentication logic goes here
    setError("");
  };

  // const handleSignupAuth = async () => {
  //   try {
  //     const response = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ fullName, email, password, confirmPassword }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Signup failed");
  //     }

  //     const data = await response.json();
  //     if (data.message === "User created") {
  //       localStorage.setItem("user", data.id);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setError("Server error");
  //   }
  // };
  // const handleLoginAuth = async () => {
  //   const response = await fetch("/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   const data = await response.json();
  //   if (response.ok) {
  //     console.log(data.message, data.id); // Login successful
  //     // Redirect to dashboard or home page
  //   } else {
  //     console.log(data.error); // Invalid email or password
  //     // Display error message to user
  //   }
  // };

  return (
    <div className="w-full flex justify-center items-center p-20">
      <div className="w-[340px] md:w-[400px] flex flex-col items-center shadow-md duration-300 shadow-gray-400 p-10">
        <h2 className="text-3xl m-4 font-bold font-sans">{authType}</h2>
        {authType === "Login" ? (
          <Login
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
          />
        ) : (
          <Signup
            fullName={fullName}
            handleFullNameChange={handleFullNameChange}
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            confirmPassword={confirmPassword}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
          />
        )}
        {error && (
          <div className="bg-red-600 w-[250px] text-white p-1 rounded-sm text-xs leading-3 mb-2 text-justify">
            <p>{error}</p>
          </div>
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
          <button
            className="w-24 bg-blue-800 opacity-90 hover:opacity-100 duration-300 font-semibold hover:tracking-wide text-white p-2 rounded-sm mt-4 cursor-pointer"
            onClick={handleAuth}
          >
            {authType}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
