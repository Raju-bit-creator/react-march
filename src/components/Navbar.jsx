import React, { useState } from "react";

const Navbar = ({ title }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((i) => i + 1);
    console.log("count", count);
  };
  console.log("title", title);
  return (
    <>
      <nav>
        <h1>{title}</h1>
        <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
        <h5>you clicked {count} times</h5>
        <h6>{title}</h6>
      </nav>
    </>
  );
};

export default Navbar;
