import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, provider } from "../firebase/firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ===========================
  // Normal Login
  // ===========================

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      localStorage.setItem("user_id", result.user.user_id);
      localStorage.setItem("username", result.user.full_name);
      localStorage.setItem("email", result.user.email);

      alert("Login Successful!");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server");
    }
  };

  // ===========================
  // Google Login
  // ===========================

  const handleGoogleLogin = async () => {
    try {
      const googleResult = await signInWithPopup(auth, provider);

      const googleUser = googleResult.user;

      const response = await fetch("http://localhost:3000/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: googleUser.displayName,
          email: googleUser.email,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      localStorage.setItem("user_id", result.user.user_id);
      localStorage.setItem("username", result.user.full_name);
      localStorage.setItem("email", result.user.email);

      alert("Google Login Successful!");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Google Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white">

    <div className="grid md:grid-cols-2 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl">

      {/* Left Section */}

      <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-cyan-600 to-blue-900">

        <h1 className="text-5xl font-bold mb-6">
          Welcome Back
        </h1>

        <p className="text-lg text-gray-100">
          Login to your ParkEasy account and manage your parking
          reservations quickly and securely.
        </p>

        <img
          src="/park1.jpg"
          alt="Parking"
          className="mt-10 rounded-2xl"
        />

      </div>

      {/* Right Section */}

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10">

        <div className="text-center mb-8">

          <h2 className="text-4xl font-bold">
            Login
          </h2>

          <p className="text-gray-300 mt-3">
            Sign in to continue
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>

            <label className="block mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
            />

          </div>

          <div>

            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

        <div className="my-6 flex items-center">

          <hr className="flex-1 border-slate-600" />

          <span className="px-4 text-gray-400">
            OR
          </span>

          <hr className="flex-1 border-slate-600" />

        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        <div className="text-center mt-8">

          <p className="text-gray-300">

            Don't have an account?

            <Link
              to="/register"
              className="text-cyan-400 ml-2"
            >
              Register
            </Link>

          </p>

        </div>

        <div className="text-center mt-6">

          <Link
            to="/"
            className="inline-block border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 transition"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>

  </div>
);
}

export default Login;