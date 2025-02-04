import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../../data";

function index() {
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
        delay: i * 0.2,
      },
    }),
  };
  return (
    <div>
      <section className="px-6 py-10" id="testimonials">
        <h1 className="text-6xl max-md:text-4xl font-medium mb-10">
          What People Are Saying
        </h1>
        <div className="h-1 w-20 bg-white"></div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonials, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={index}
              variants={childVariants}
              className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/30 "
            >
              <div className="flex items-centerm b-4 ">
                <img
                  src={testimonials.image}
                  alt="images"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{testimonials.name}</h2>
                  <p className="text-sm font-light">{testimonials.title}</p>
                </div>
              </div>
              <p className="leading-relaxed my-2">{testimonials.feedback}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default index;
