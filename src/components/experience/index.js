import React from "react";
import { motion } from "motion/react";
import { EXPERIENCES } from "../../constants";

function index() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.3 },
  };
  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeInOut" },
  };
  return (
    <div>
      <section className="px-6 py-10" id="#experience">
        <h2 className="text-6xl max-md:text-4xl font-medium mb-10">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-white"></div>
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={childVariants}
            >
              <div className="flex max-md:flex-col justify-between ">
                <div className="text-sm w-1/4 max-md:mb-2 p-4 max-md:w-full ">
                  {experience.yearRange}
                </div>
                <div className="w-3/4 mb-10 max-sm:w-full">
                  <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-500/10 rounded-lg">
                    <h2 className="text-xl mb-2">{experience.title}</h2>
                    <p className="mb-4 text-sm italic">{experience.location}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default index;
