import React from "react";
import LoginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    if (credentials.email === "" || credentials.password === "") {
      alert("Please fill in all fields");
    } else {
      // Perform login logic here
      const response = await fetch(`${api}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log(data);
      {
      }
    }
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full flex flex-row hover:origin-top  gap-4 justify-center px-10 py-20">
      <div>
        <div className="w-full rounded-full bg-gray-200 flex items-center justify-center">
          <img src={LoginImage} alt="login" className="aspect-square" />
        </div>
      </div>

      {/* login form  */}
      <div className="w-1/2 rounded-md bg-gray-100 p-4">
        <h4>Welcome again !</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-sm text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Username"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-sm text-gray-500">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-black transition duration-300"
          >
            Login
          </button>
          <p>
            Not register? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>

      {/* <button className="bg-blue-500 px-3 outline outline-offset-2 outline-pink-500 py-1 translate-y-4 origin-center rotate-12 hover:origin-top  text-white rounded-md hover:bg-black transition duration-300">
        Login
      </button> */}
    </div>
  );
};

export default Login;
// assignment :TODO : implement register ui and hit register endpoint and show data in console. Also add error handling and show error messages to user.
