import React from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/reset-password", { password })
      .then((response) => {
        console.log(response.data);
        alert("Password reset successful!");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
        alert("Failed to reset password. Please try again.");
      });
  };
  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="false"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div>
          <label>Confirm Password:</label>
          <input type="password" required />
        </div> */}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
