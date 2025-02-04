import React, { useState } from "react";
import { LINKS } from "../../constants";
import { motion } from "motion/react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinks = () => {
    setMenuOpen(false);
  };

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
        delay: i * 0.2,
      },
    }),
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <ul className="flex justify-between items-center max-w-6xl mx-auto backdrop-blur-lg p-4">
          <li className="text-white font-semibold text-lg uppercase ">
            <a href="/" className="outline-none">
              naveenkumar
            </a>
          </li>
          <li className="flex space-x-8 max-sm:hidden max-md:space-x-4">
            {LINKS.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-white hover:text-stone-400 duration-300 outline-none"
              >
                {link.label}
              </a>
            ))}
          </li>
          <li className="hidden max-sm:block">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <ion-icon name="close-outline" className="font"></ion-icon>
              ) : (
                <ion-icon name="menu-outline" className="font"></ion-icon>
              )}
            </button>
          </li>
        </ul>
        {menuOpen && (
          <motion.ul
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className=" max-sm:flex max-sm:flex-col bg-stone-500/10 space-y-4  items-center  max-w-6xl mx-auto backdrop-blur-lg p-4 hidden   "
          >
            {LINKS.map((link, index) => (
              <motion.a
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={childVariants}
                href={link.href}
                key={index}
                onClick={handleLinks}
                className="text-white hover:text-stone-400 duration-300 outline-none"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.ul>
        )}
      </nav>
    </>
  );
}

export default NavBar;
