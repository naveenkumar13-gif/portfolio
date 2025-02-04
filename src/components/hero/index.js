import React from "react";
import { motion } from "motion/react";
import { HERO_CONTENT } from "../../data";
import nk from "../../assets/nk.jpeg";

function index() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { clipPath: "inset(0  50% 0 50%)" },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <section>
        <div className="relative z-10 min-h-screen flex flex-wrap  items-center justify-center text-white">
          <motion.div
            className="w-1/2 max-md:w-full p-8 max-sm:p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl my-14  max-md:text-3xl max-sm:text-2xl max-sm:my-7 max-sm:pt-7"
              variants={textVariants}
            >
              {HERO_CONTENT.greeting}
            </motion.h1>
            <motion.p
              className="text-4xl  max-md:text-2xl max-sm:text-xl mb-4"
              variants={textVariants}
            >
              {HERO_CONTENT.introduction}
            </motion.p>
            <motion.p
              className="text-4xl  max-md:text-2xl max-sm:text-xl "
              variants={textVariants}
            >
              {HERO_CONTENT.description}
            </motion.p>
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 inline-block rounded-2xl mt-8 max-lg:p-4 max-md:p-3 max-md:text-sm max-sm:text-xs"
              href={HERO_CONTENT.resumeLink}
              target="_blank"
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>
          </motion.div>
          <motion.div
            className="max-md:w-full w-1/2 p-8 max-sm:p-4"
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={imageVariants}
          >
            <img
              src={nk}
              alt="jason root"
              width={400}
              height={500}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default index;
