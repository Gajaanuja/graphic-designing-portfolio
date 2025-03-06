import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // Make sure this path is correct

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="about-content">
        {/* Left side: Profile Image */}
        <div className="about-image">
          <img src={profilePic} alt="Gajaanuja" />
        </div>

        {/* Right side: About Me Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Gajaanuja, a passionate graphic designer with expertise in branding, 
            illustration, and digital art.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
