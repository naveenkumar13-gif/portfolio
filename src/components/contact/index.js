import React from "react";
import { motion } from "motion/react";
import { CONTACT_CONTENT } from "../../constants";
function index() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay,
      },
    }),
  };

  const iconVarients = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    }),
  };
  return (
    <div>
      <section
        className="min-h-screen flex flex-col justify-center px-10 max-md:px-4"
        id="contact"
      >
        <h1 className="text-6xl max-md:text-4xl  font-medium mb-10">Contact</h1>
        <div className="h-1 w-20 bg-white"></div>
        <motion.h3
          className="text-8xl max-md:text-6xl leading-none max-sm:text-5xl"
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          variants={textVariants}
        >
          {CONTACT_CONTENT.headline}
        </motion.h3>
        <motion.p
          className="text-2xl mt-6 max-w-3xl max-md:text-lg"
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          variants={textVariants}
        >
          {CONTACT_CONTENT.description}
        </motion.p>
        <motion.a
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          variants={textVariants}
          className="text-3xl max-md:text-2xl font-medium mt-8 max-sm:text-lg"
        >
          {CONTACT_CONTENT.email}
        </motion.a>
        <div className="flex space-x-6 mt-6">
          {CONTACT_CONTENT.socialLinks.map((link, index) => {
            const Icon =
              link.icon === "RiTwitterXFill" ? (
                <ion-icon name="logo-twitter"></ion-icon>
              ) : link.icon === "RiGithubFill" ? (
                <ion-icon name="logo-github"></ion-icon>
              ) : (
                <ion-icon name="logo-linkedin"></ion-icon>
              );
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                initial="hidden"
                whileInView="visible"
                custom={1 * index * 0.2}
                variants={iconVarients}
              >
                {Icon}
              </motion.a>
            );
          })}
        </div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          custom={1.6}
          variants={textVariants}
          className="text-sm text-stone-400 mt-36 max-sm:mt-12"
        >
          {CONTACT_CONTENT.footerText}
        </motion.p>
      </section>
    </div>
  );
}

export default index;
