import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ item }) => {
    const IconComponent = item.icon
  return (
    <motion.div
      className="group relative w-full h-fit min-h-[320px] bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-600/10 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)", // red-500 to red-800
          padding: "2px",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-between px-6 py-8 h-full">
        {/* Animated icon container */}
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        >
          {/* Pulsing background ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-500 opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "100px",
              height: "100px",
              left: "-10px",
              top: "-10px",
            }}
          />

          {/* Icon container */}
          <div className="relative rounded-full w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center overflow-hidden shadow-lg">
            <motion.div
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <IconComponent className="w-10 h-10 object-cover object-center filter brightness-0 invert" />
              
            </motion.div>
          </div>
        </motion.div>

        {/* Title with stagger animation */}
        <motion.h4
          className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {item.title}
        </motion.h4>

        {/* Description with typewriter effect */}
        <motion.p
          className="text-gray-600 text-center leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {item.description}
        </motion.p>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ width: 0 }}
          whileHover={{ width: 48 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-0 group-hover:opacity-60"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              x: [-5, 5, -5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
