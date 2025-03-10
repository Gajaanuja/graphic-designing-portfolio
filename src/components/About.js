import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/about.jpg"; // Make sure this path is correct

const About = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-indigo-800 to-black py-20 px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title with animation */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h1>

        {/* Centered profile image */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative">
            {/* Profile image with border effect */}
            <div className="w-48 h-48 rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-500">
              <img 
                src={profilePic} 
                alt="Gajaanuja" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <motion.div 
              className="absolute -bottom-3 -right-3 bg-indigo-600 text-white px-3 py-1 rounded-full shadow-lg text-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="font-bold">5+ Years</span>
            </motion.div>
          </div>
        </motion.div>

        {/* About Me content with centered text */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-2 text-indigo-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            I'm Gajaanuja
          </motion.h2>
          
          <motion.h3 
            className="text-xl font-semibold mb-4 text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Creative Graphic Designer & Visual Artist
          </motion.h3>
          
          {/* Stylized paragraph with custom border and background */}
          <motion.div 
            className="mb-10 p-6 rounded-lg bg-indigo-900/30 border-l-4 border-indigo-500 text-gray-300"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="leading-relaxed mb-3">
              I'm a passionate graphic designer with expertise in branding, illustration, and digital art. 
              My approach combines creative vision with strategic thinking to deliver designs that not only 
              look stunning but also effectively communicate my clients' messages.
            </p>
            <p className="leading-relaxed">
              With a background in fine arts and digital media, I bring a unique perspective to every project.
              I believe that great design has the power to transform businesses and create meaningful connections
              with audiences.
            </p>
          </motion.div>

          {/* Skills section */}
          <motion.div
            className="mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-white">My Expertise</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["Branding", "Illustration", "UI/UX", "Digital Art", "Typography", "Motion Graphics"].map((skill, index) => (
                <motion.span 
                  key={index}
                  className="bg-indigo-900/50 text-indigo-300 px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-110"
                  whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.4)", scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Customized attractive buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <motion.button 
              className="relative overflow-hidden group bg-indigo-600 text-white py-3 px-8 rounded-full font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button shine effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              {/* Button icon and text */}
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Resume
              </span>
            </motion.button>

            <motion.button 
              className="relative overflow-hidden group bg-transparent border-2 border-indigo-500 text-indigo-400 hover:text-white py-3 px-8 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background effect */}
              <span className="absolute top-0 left-0 w-0 h-full bg-indigo-600 group-hover:w-full transition-all duration-300 -z-10"></span>
              
              {/* Button icon and text */}
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                View Portfolio
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
