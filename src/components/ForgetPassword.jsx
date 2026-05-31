import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/api/auth/forgot-password", { email })
      .then((response) => {
        console.log(response.data);
        alert("Reset link sent to your email!");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error sending reset link:", error);
        alert("Failed to send reset link. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 w-full max-w-md">
        {/* Icon */}
        <div className="w-13 h-13 bg-green-50 rounded-xl flex items-center justify-center mb-6 w-14 h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V7a4.5 4.5 0 10-9 0v3.5M5 10.5h14a1 1 0 011 1V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-8.5a1 1 0 011-1z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Forgot your password?
        </h2>
        <p className="text-sm text-gray-500 mb-7 leading-relaxed">
          No worries — enter your email and we'll send you a reset link right
          away.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-green-700 hover:bg-green-800 active:scale-[0.98] text-green-50 text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-60"
          >
            {loading ? (
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-6 pt-5 flex items-center justify-center gap-1.5 text-sm text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-green-700 font-medium hover:underline"
          >
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
