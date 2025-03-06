import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./styles.css";
import logo from "./assets/image.png";  // Import logo

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="logo-container">
          {/* Make the logo a clickable link to the home page */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Gajaanuja Megalathan</h1>
          </Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
