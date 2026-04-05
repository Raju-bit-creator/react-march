import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Techyvercity");

  const handleClick = () => {
    setCount((i) => i + 1);
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
      <Router>
        <Navbar title={title} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Navbar title="Techyvercity" /> */}
    </>
  );
}

export default App;
