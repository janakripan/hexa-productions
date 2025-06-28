import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      {/* Main Card */}
      <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 overflow-hidden h-full flex flex-col transition-all duration-300">
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {item.description}
          </p>
        </div>

        {/* Subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;