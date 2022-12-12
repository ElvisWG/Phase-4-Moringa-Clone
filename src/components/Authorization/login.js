import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  
  const handleSubmit = (e) => {
    //Authenticating Login
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    }).then((data) => {
      if (data.ok) {
        data.json().then((user) => {
          setUser(user);
          if (user.mentor === true) {
            window.location.href = "/dashboard";
          } else {
            window.location.href = "/student";
          }
        });
      }else {
        toast.error("Incorrect password or username", {
          position: "top-center",
        });
      }
    });
    console.log(user);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              
            
              Log In
            </button>
          </div>
          <div className="mt-3">
            <button className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-700">
              <Link to="/register">Don't Have an account?. Click Here To SignUp</Link>
            </button>
          </div>
        </form>
             </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
