import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h4>Signup</h4>
      <p>
        aleady register? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
