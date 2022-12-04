import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {

    // State to store the values of the input fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Flag to indicate if the user has successfully registered
    const [registered, setRegistered] = useState(false);

    // Register the user using the provided username, email, and password
    const handleRegister = () => {
        // Validate the provided values
        if (!username || !email || !password) {
            toast.error("Please enter a valid username, email, and password.", {
                position:"top-center"
            });
        return;
        }

        // Create a new user object
        const newUser = {
        username: username,
        email: email,
        password: password,
        };

        // Send the new user object to the backend API for registration
        fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
            alert(data.error);
            return;
            }

            // Set the registered flag to true
            setRegistered(true);
        });
        };

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center h-full">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
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
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs absolute bottom-10">
            &copy;2022 Hack The Code. All rights reserved.
          </p>
        </div>
        <ToastContainer />
      </div>
    );
};

export default RegisterPage;
