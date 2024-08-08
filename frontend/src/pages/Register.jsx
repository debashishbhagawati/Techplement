import React, { useState, useContext } from "react";
import { assets } from "./../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import {AppContext} from "./../context/AppContext.jsx"

const Register = () => {

  const URL = "http://localhost:8000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {setUserName, setUserEmail, setIsLoggedIn} = useContext(AppContext)

  const registerHandler = async (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    try {
      const response = await fetch(`${URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setUserName(name);
      setUserEmail(email);
      setIsLoggedIn(true); 
      navigate("/");

    } catch (error) {
      setError(error.message);
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center">
          <img
            src={assets.logo}
            width={"400px"}
            alt="Inspire Hub Logo"
            className="object-cover mx-3 px-5"
          />
        </div>
        <div className="flex flex-col justify-between p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-bold text-5xl text-gray-900">Inspire Hub</h1>
            <p className="font-semibold text-xl text-gray-600 mt-2">
              To make you inspire
            </p>
          </div>
          <h1 className="font-bold text-2xl text-gray-900 mb-4">Register</h1>
          <form className="flex flex-col text-gray-700 space-y-4" onSubmit={registerHandler}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-3 rounded-md font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
