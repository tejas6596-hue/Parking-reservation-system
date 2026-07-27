import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please accept Terms & Conditions");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Registration Successful!");

        navigate("/login");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white p-5 bg-[linear-gradient(135deg,#020617,#0f172a,#1e293b)]">

    <div className="grid md:grid-cols-2 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl">

      {/* Left Section */}

      <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-cyan-600 to-blue-900">

        <h1 className="text-5xl font-bold mb-6">
          Join ParkEasy
        </h1>

        <p className="text-lg">
          Create your account and enjoy seamless parking reservations,
          real-time slot availability and smart booking management.
        </p>

        <img
          src="/park2.jpg"
          alt="Parking"
          className="mt-10 rounded-2xl"
        />

      </div>

      {/* Right Section */}

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10">

        <div className="text-center mb-8">

          <h2 className="text-4xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-300 mt-3">
            Register to start using ParkEasy
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:outline-none"
              required
            />

          </div>

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />

            <span>
              I agree to the Terms & Conditions
            </span>

          </label>
          <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
            >
              Create Account
            </button>

          </form>

          <div className="text-center mt-6">

            <p className="text-gray-300">

              Already have an account?

              <Link
                to="/login"
                className="text-cyan-400 ml-2"
              >
                Login
              </Link>

            </p>

          </div>

          <div className="text-center mt-8">

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

export default Register;