import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/about.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-me-container">
        <h1 className="about-title">About Me</h1>

        {/* Updated Flexbox Layout */}
        <div className="about-me-content">
          {/* Profile Image - Left Side */}
          <div className="profile-image">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-img"
            />
          </div>

          {/* Text - Right Side */}
          <div className="bio">
            <h2 className="bio-title">
              Graphic <span className="highlight">Designer</span>
            </h2>
            <p>
            Hi! I'm Gajaanuja Megalathan, a passionate Graphic Designer with a keen eye for detail and a creative approach to visual storytelling. With experience in Adobe Photoshop, Illustrator, After Effects, and Premiere Pro, I specialize in creating engaging graphics, motion videos, and branding materials that effectively communicate ideas. Whether it's designing logos, social media content, or video editing, I am committed to delivering high-quality, visually compelling work that resonates with audiences.            </p>
            <button className="experience-button">Experience</button>
          </div>
        </div>

        {/* Skills Card - No Changes */}
        <div className="skills-card">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-list">
            {["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "Canva", "Figma"].map((skill) => (
              <div key={skill} className="skill-item">
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
