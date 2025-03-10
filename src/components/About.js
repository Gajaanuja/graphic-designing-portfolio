import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/about.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <motion.div
      className="about-container w-full min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-200 py-12 px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-me-container">
        <h1 className="text-3xl font-bold text-center">About Me</h1>
        <div className="about-me-content mt-8 flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl shadow-lg overflow-hidden border-4 border-indigo-300">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          </div>
          <div className="bio mt-6 md:mt-0 md:ml-8 max-w-lg text-center md:text-left">
            <p className="text-lg leading-relaxed">
              Hi, I'm Gajaanuja! I am a passionate Graphic Designer with a keen eye for detail and a creative approach to visual storytelling. 
              With experience in Adobe Photoshop, Illustrator, After Effects, and Premiere Pro, I specialize in creating engaging graphics, motion videos, 
              and branding materials that effectively communicate ideas. Whether it's designing logos, social media content, or video editing, 
              I am committed to delivering high-quality, visually compelling work that resonates with audiences.
            </p>
            {/* <p className="text-lg leading-relaxed mt-4">
              In addition to my technical skills, I am deeply interested in cybersecurity and am currently working towards becoming a Cybersecurity Engineer.
              I am always open to exploring new challenges and growing both personally and professionally.
            </p> */}
          </div>
        </div>

        {/* Skills Card */}
        <div className="skills-card bg-white bg-opacity-60 backdrop-blur-lg shadow-lg rounded-3xl mt-12 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">Skills</h2>
          <div className="skills-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "Photoshop",
              "Illustrator",
              "After Effects",
              "Premiere Pro",
              "Canva",
              "Figma",
            ].map((skill) => (
              <div
                key={skill}
                className="skill-item bg-indigo-700 hover:bg-indigo-600 text-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              >
                <h3 className="font-semibold text-xl">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;