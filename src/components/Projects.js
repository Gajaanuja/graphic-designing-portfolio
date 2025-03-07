import React from "react";
import { motion } from "framer-motion";

const projectCategories = [
  {
    projects: [
        { id: 1, image: "graphic-portfolio/public/assets/projects/bloom.png" },
        { id: 2, image: "/assets/projects/mega-wizards.jpg" },
        { id: 3, image: "/assets/projects/Arona Digital Solutions.png" },
        { id: 4, image: "/assets/projects/DNL.png" },
        { id: 5, image: "/assets/projects/d-eye.png" }
      ]
    },
    {
      category: "Social Media Posts",
      projects: [
        { id: 6, image: "/assets/projects/Motly1.jpg" },
        { id: 7, image: "/assets/projects/g Designs.jpg" },
        { id: 8, image: "/assets/projects/fueld.png" },
        { id: 9, image: "/assets/projects/Burger.jpg" },
        { id: 10, image: "/assets/projects/motleyAd.png" },
        { id: 11, image: "/assets/projects/Book Cover.jpg" }
      ]
    }
];

const Projects = () => {
  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>My Work</h2>

      {projectCategories.map((category, index) => (
        <div key={index} className="category-section">
          <h3 className="category-title">{category.category}</h3>
          <div className="project-grid">
            {category.projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                whileHover={{ scale: 1.1 }}
              >
                <img src={project.image} alt={`Project ${project.id}`} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
