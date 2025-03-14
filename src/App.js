import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';
import logo from './assets/image.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Router>
      <div className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Gajaanuja Megalathan</h1>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <nav ref={menuRef} className={isMenuOpen ? 'menu active' : 'menu'}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-icons">
          <a href="mailto:hacktonic001@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/gajaanuja-megalathan-a79899195/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="icon" />
          </a>
          <a href="https://github.com/Gajaanuja" target="_blank" rel="noopener noreferrer">
            <Github className="icon" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Gajaanuja Megalathan. All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
