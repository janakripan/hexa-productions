import React from "react";
import { motion } from "framer-motion";
import bgimg from "../../assets/images/home/about banner.jpg";
import { aboutList } from "../../constants/about";

const AboutSection = () => {
  return (
    <div className="relative w-full min-h-screen lg:h-[120vh] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat shadow-2xl flex items-center justify-center backdrop-blur-sm"
        style={{
          backgroundImage: ` url(${bgimg})`,
        }}
        initial={{
          width: "min(120vh, 90vw)", 
          height: "min(120vh, 90vw)",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        whileInView={{
          width: "100%",
          height: "100%",
          borderRadius: "0%",
          left: "0%",
          top: "0%",
          x: "0%",
          y: "0%",
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: "-20px",
        }}
      >
        <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row text-white relative overflow-y-auto lg:overflow-hidden">
          {/* Left Side - Original Content */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col relative mb-8 lg:mb-0">
            {/* Title - responsive positioning */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left text-shadow-2xs text-shadow-black mb-4 lg:mb-0 lg:absolute"
              initial={{
                scale: 0.6,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                position: window.innerWidth >= 1024 ? 'absolute' : 'relative',
                left: window.innerWidth >= 1024 ? '2rem' : 'auto',
                top: window.innerWidth >= 1024 ? '4rem' : 'auto',
              }}
            >
              About Us
            </motion.h2>

            {/* Content */}
            <motion.div
              className="flex flex-col justify-center h-auto lg:h-full pt-4 lg:pt-32 lg:pl-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-6 lg:mb-8 backdrop-brightness-75 backdrop-blur-sm rounded-lg lg:p-4 lg:backdrop-brightness-100   p-3 "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                We are passionate about helping businesses thrive through
                effective advertising strategies. We are committed to creating
                compelling campaigns that drive results and increase brand
                visibility. Our mission is to empower businesses of all sizes by
                connecting them to the right audiences with innovative advertising
                solutions. We believe in the power of creative and data-driven
                strategies to achieve maximum impact and deliver exceptional value
                to our clients.

                <span className=" block py-3 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6 lg:mb-8 backdrop-brightness-75    backdrop-blur-lg rounded-lg lg:p-4 lg:backdrop-brightness-100  lg:rounded-none p-0 font-light ">
                  Our mission is to empower businesses of all sizes by connecting them to the right audiences with innovative advertising solutions. We believe in the power of creative and data-driven strategies to achieve maximum impact and deliver exceptional value to our clients.
                </span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <button className="bg-white text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:text-white hover:bg-red-500 transition-colors duration-300 text-sm md:text-base w-full sm:w-auto">
                  Learn More
                </button>
                <a className="border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 text-sm md:text-base text-center w-full sm:w-auto">
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Services Content */}
          <motion.div
            className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-start lg:justify-center px-0 lg:px-8 py-0 lg:py-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
           

            <div className="space-y-3 sm:space-y-4 lg:space-y-6 max-w-none lg:max-w-xl">
              {aboutList.map((service, index) => (
                <motion.div
                  key={index}
                  className="backdrop-brightness-75 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-4 border border-white/20 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-amber-300">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;