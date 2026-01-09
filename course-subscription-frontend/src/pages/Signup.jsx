import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/signup", { name, email, password });
      toast.success("Signup successful! Please login.");
      navigate("/");
    } catch {
      toast.error("Signup failed. Try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200 px-4"
    >
      {/* Bigger card */}
      <div
        className="w-full max-w-2xl bg-white rounded-3xl
                   shadow-2xl p-12"
      >
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Create Account ✨
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Join us and start learning today
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="mt-10 space-y-6">
          <input
            className="w-full rounded-xl border border-gray-300
                       px-5 py-4 text-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="w-full rounded-xl border border-gray-300
                       px-5 py-4 text-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full rounded-xl border border-gray-300
                       px-5 py-4 text-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Gradient button */}
          <button
            className="w-full py-4 rounded-xl text-lg font-semibold text-white
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                       hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                       transition-all duration-300"
          >
            Signup
          </button>
        </form>

        {/* Footer */}
        <p className="text-base text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
