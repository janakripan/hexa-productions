import React from "react";
import { containerVariant, fadeInUp } from "../../Animations/animations";
import { motion } from "framer-motion";
import { featureData } from "../../constants/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="max-w-screen-xl w-full h-full flex flex-col items-center mx-auto py-16 px-4">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full flex-col items-center gap-12 text-center"
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto">
          {/* Animated heading */}
         <motion.h2
                     variants={fadeInUp(0.4, 0)}
                     className="font-light text-3xl md:text-4xl lg:text-5xl text-gray-800 uppercase tracking-wide max-w-4xl"
                   >
                     our{" "}
                     <span className="font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent relative">
                       Features
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
            variants={fadeInUp(0.6, 0.1)}
            className="text-gray-600 text-lg mt-5 leading-relaxed"
          >
            Discover the powerful features that make our platform the perfect choice for your business needs.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featureData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp(0.5, 0.1 * idx)}
              className="w-full h-full"
            >
              <FeatureCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;