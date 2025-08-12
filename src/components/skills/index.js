import React from "react";
import { motion } from "motion/react";
import { ABOUT_CONTENT } from "../../data"; 

function Skills() {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, type: "spring", stiffness: 120 }
    },
  };

  return (
    <div className="px-6 py-10" id="skills">
      <h1 className="text-6xl max-md:text-4xl font-medium tracking-tight mb-6">
        Skills
      </h1>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <div className="flex flex-wrap gap-4">
        {ABOUT_CONTENT.skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="px-5 py-2 bg-white/40 backdrop-blur-md 
              border border-white/20 shadow-lg rounded-full 
              text-sm font-semibold text-gray-800 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500
              hover:text-white hover:shadow-xl 
              transform hover:scale-105 transition-all duration-300 ease-out"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
