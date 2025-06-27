import React from "react";
import heroBanner from "../../assets/images/home/hero-banner.jpg";
import { motion } from "framer-motion";
import "../../Animations/glow.css";
import { containerVariant, fadeInUp, letterVariant, upAndDown } from "../../Animations/animations";
import { FaLongArrowAltDown } from "react-icons/fa";

const finalWord = "Dreams";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background image */}
      <img
        src={heroBanner}
        alt="hero banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <motion.h1
         variants={fadeInUp(1, 0.5)}
         initial="hidden"
         animate="visible"
          className="text-white text-4xl md:text-6xl font-bold tracking-wide uppercase"
        >
          Crafting Your{""}
          <motion.span
            className="text-red-500 ml-2"
            initial="hidden"
            animate="visible"
            variants={containerVariant}
          >
            {finalWord.split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariant}
                className="inline-block glowing-text"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
      </div>
      <div className="w-full h-fit py-2 flex justify-center z-20 absolute bottom-4 ">
        <motion.a
          href="#summary"
          animate="animate"
          variants={upAndDown}
          className="text-white text-4xl rounded-full   p-1 hover:bg-white hover:text-red-500 transition-all duration-300"
        >
          <FaLongArrowAltDown />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
