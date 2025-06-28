import React from "react";
import { motion } from "framer-motion";
import bgimg from "../../assets/images/home/about banner.jpg";

const AboutSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute bg-cover bg-center bg-no-repeat shadow-2xl flex items-center justify-center backdrop-blur-sm"
        style={{
          backgroundImage: ` url(${bgimg})`,
        }}
        initial={{
          width: "90vh", // width same as height
          height: "90vh",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        whileInView={{
          width: "100%",
          height: "90vh",
          borderRadius: "0%",
          left: "0%",
          top: "50%",
          x: "0%",
          y: "-50%",
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{
          once: false,
          amount: 0.3,
          margin: "-50px",
        }}
      >
        <div className="w-full h-full p-8 flex flex-col text-white relative">
          {/* Title - moves from center to top-left */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight absolute text-center md:text-left text-shadow-2xs text-shadow-black "
            initial={{
              scale: 0.8,
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            whileInView={{
              left: "4rem",
              top: "8rem",
              y: "0%",
              x: "0%",
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Us
          </motion.h2>

          {/* Content */}
          <motion.div
            className="flex flex-col justify-center h-full pl-8 pt-32 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.p
              className="text-lg md:text-xl leading-relaxed max-w-2xl mb-8 backdrop-brightness-75"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              We are passionate about helping businesses thrive through
              effective advertising strategies. We are committed to creating
              compelling campaigns that drive results and increase brand
              visibility. Our mission is to empower businesses of all sizes by
              connecting them to the right audiences with innovative advertising
              solutions. We believe in the power of creative and data-driven
              strategies to achieve maximum impact and deliver exceptional value
              to our clients.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Learn More
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
