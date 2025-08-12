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
      <h1 className="text-6xl max-md:text-4xl font-medium tracking-tight mb-2">
        About
      </h1>
      <div className="h-1 w-20 bg-white mb-10"></div>

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
      </div>
    </section>
  );
}

export default About;
