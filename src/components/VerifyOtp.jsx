import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // userId and authToken passed from login page via navigate state
  const {
    userId,
    authToken: authTokenFromState,
    token,
    user,
  } = location.state || {};
  const authToken = authTokenFromState || token;

  useEffect(() => {
    if (!userId) {
      alert("Missing user ID. Please restart the signup process.");
      navigate("/register");
    }
  }, [userId, navigate]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // digits only
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // On backspace, clear current and move to previous
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pasted)) return;
    const newOtp = pasted.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
    document.getElementById(`otp-${Math.min(pasted.length, 5)}`).focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (!userId)
      return alert(
        "Cannot verify OTP without a user ID. Please restart the signup flow.",
      );

    if (otpValue.length < 6)
      return alert("Please enter the complete 6-digit OTP.");

    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/auth/verify-otp", {
        userId,
        otp: otpValue,
      });

      // Store token (use localStorage or context based on your app)
      localStorage.setItem("authToken", authToken);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 w-full max-w-md">
        {/* Icon */}
        <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
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
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Verify your identity
        </h2>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          We sent a 6-digit OTP to your email. Enter it below to complete login.
        </p>

        <form onSubmit={handleSubmit}>
          {/* OTP Inputs */}
          <div
            className="flex gap-3 justify-between mb-8"
            onPaste={handlePaste}
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 text-center text-xl font-semibold border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || otp.join("").length < 6}
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-6 pt-5 flex items-center justify-center gap-1.5 text-sm text-gray-400">
          Didn't receive the OTP?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-green-700 font-medium hover:underline bg-transparent border-none cursor-pointer"
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
