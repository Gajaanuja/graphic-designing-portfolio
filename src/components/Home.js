import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      className="home w-full h-screen" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Split layout with image on left, text on right */}
      <div className="flex h-full w-full">
        {/* Image section - left side */}
        <div className="w-2/3 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('./assets/image.png');" }}
          ></div>
        </div>
        
        {/* Text section - right side */}
        <div className="w-1/3 bg-black flex flex-col justify-center p-12">
          <h1 className="text-5xl font-bold text-white mb-8">Design is thinking made visual</h1>
          
          <p className="text-white text-lg mt-4">
            It's easy to do great work when you believe in what you do.
            That's why we're committed to helping more people like
            you, every day.
          </p>
          
          <div className="mt-12">
            <button className="bg-white text-black py-2 px-6 rounded-md font-medium hover:bg-gray-200 transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;