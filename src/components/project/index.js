import React from "react";
import { motion } from "motion/react";
import { PROJECTS } from "../../constants";
import { delay } from "motion";

function index() {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <div className="px-6 py-10 " id="work">
      <h1 className="text-6xl max-md:text-4xl font-medium tracking-tight mb-10">
        Work
      </h1>
      <div className="h-1 w-20 bg-white"></div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden h-[500px] transition transform  rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={projectVariants}
          >
            <img
              src={project.image}
              alt="projext.image"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
              <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
              <div className="flex flex-col justify-between">
                <p className="mb-4 flex-grow text-2xl">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 hover:bg-gray-100 text-center text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default index;
