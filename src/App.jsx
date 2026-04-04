import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Techyvercity");

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(5);
  };
  const handleNameChange = (e) => {
    setName("uttam");
  };
  const title = "Techyvercity";

  return (
    <>
      <h2>welcome to {title}</h2>
      <Navbar title="Techyvercity" />

      <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </>
  );
}

export default App;
