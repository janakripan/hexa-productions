import React from "react";
import { motion } from "framer-motion";
import {
  containerVariant,
  fadeInUp,
  
} from "../../Animations/animations";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../constants/services";

const Services = () => {
  

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-red-100 to-purple-200 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-red-50 to-red-100 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-24">
        {/* Animated container */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Main heading */}
          <motion.h2
            variants={fadeInUp(0.4, 0)}
            className="font-light text-4xl md:text-5xl lg:text-6xl text-gray-800 uppercase tracking-wide max-w-4xl"
          >
            our{" "}
            <span className="font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent relative">
              Services
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp(0.4, 0.3)}
            className="text-gray-600 text-lg max-w-2xl leading-relaxed"
          >
            We deliver comprehensive solutions tailored to your business needs,
            combining cutting-edge technology with creative excellence.
          </motion.p>

          {/* Decorative underline */}
          <motion.div
            variants={fadeInUp(0.4, 0.6)}
            className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg"
          />

          {/*  Services Grid */}
          <motion.div
            variants={containerVariant}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {servicesData.map((sv, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp(0.6, idx * 0.2)}
                className="w-full h-full"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <ServiceCard item={sv} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp(0.8, 0.6)}
            className="flex flex-col items-center gap-6 mt-8"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
