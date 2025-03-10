import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/home-background.jpg"; // Update with your actual image path and filename

const Home = () => {
  return (
    <motion.div 
      className="home w-full h-screen" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Hero section with gradient background */}
      <div className="flex h-full w-full">
        {/* Image section - left side with overlay */}
        <div className="w-2/3 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700 ease-in-out" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          {/* Add a subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        
        {/* Text section - right side */}
        <div className="w-1/3 bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center p-12">
          {/* Animated heading */}
          <motion.h1 
            className="text-5xl font-bold text-white mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Design is thinking made visual
          </motion.h1>
          
          {/* Animated paragraph */}
          <motion.p 
            className="text-white text-lg mt-4 opacity-80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            It's easy to do great work when you believe in what you do.
            That's why we're committed to helping more people like
            you, every day.
          </motion.p>
          
          {/* Animated button with improved styling */}
          <motion.div 
            className="mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/Projects">
              <button className="custom-button">
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;