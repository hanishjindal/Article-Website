import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth() {
  const [authType, setAuthType] = useState("Login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [authInProcess, setAuthInProcess] = useState(false);
  const route = useRouter();
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
      handleSignupAuth();
    } else {
      handleLoginAuth();
    }

    // Authentication logic goes hereS
  };

  const handleSignupAuth = async () => {
    setAuthInProcess(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.error === "User with this email already exists") {
          setError(data.error);
        } else {
          setError("Signup failed");
        }
        setAuthInProcess(false);
        return;
      }

      if (data.message === "User Created") {
        setError("");
        toast.success("Account created succesfully, Redirecting...", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          setAuthType("Login");
          setEmail("");
          setFullName("");
          setPassword("");
          setConfirmPassword("");
        }, 1500);
      }
    } catch (err) {
      setError("Server error");
    }
    setTimeout(() => {
      setAuthInProcess(false);
    }, 1500);
  };

  const handleLoginAuth = async () => {
    setAuthInProcess(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setAuthInProcess(false);
        return;
      }

      if (data.message === "Logged in") {
        localStorage.setItem("token", data.token);
        setError("");
        toast.success("Logged in, Redirecting...", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          setEmail("");
          setFullName("");
          setPassword("");
          setConfirmPassword("");
          route.push("/");
        }, 1500);
      }
    } catch (err) {
      setError("Server error");
    }
    setTimeout(() => {
      setAuthInProcess(false);
    }, 1500);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <span className="italic">
              {authType === "Login"
                ? "New User? "
                : "Already have an account? "}
            </span>
            <span
              className="text-blue-800 font-semibold cursor-pointer"
              onClick={handleAuthClick}
            >
              {authType === "Login" ? "Sign Up" : "Login"}
            </span>
          </div>
          <div>
            <button
              className={`w-24 ${
                authInProcess ? "bg-blue-200" : "bg-blue-800"
              } opacity-90 hover:opacity-100 duration-300 font-semibold hover:tracking-wide text-white p-2 rounded-sm mt-4 cursor-pointer`}
              onClick={handleAuth}
              disabled={authInProcess}
            >
              {authType}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
