import React from "react";
import { ABOUT_CONTENT } from "../../data";
import { motion } from "motion/react";

function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  return (
    <section className="px-8 py-10" id="about">
      {/* Section Title */}
      <h1 className="text-6xl max-md:text-4xl font-medium tracking-tight mb-2">
        About
      </h1>
      <div className="h-1 w-20 bg-white mb-10"></div>

      {/* Paragraphs */}
      <div className="max-w-4xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-3xl max-md:text-2xl max-sm:text-xl mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Skills Section - optional */}
        {ABOUT_CONTENT.skills?.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {ABOUT_CONTENT.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-white/40 backdrop-blur-md 
                 border border-white/20 shadow-lg rounded-full 
                 text-sm font-semibold text-gray-800 
                 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500
                 hover:text-white hover:shadow-xl 
                 transform hover:scale-105 transition-all duration-300 ease-out"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default About;
