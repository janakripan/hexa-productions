import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerVariant,
  fadeInUp,
  underlineVariant,
} from "../../Animations/animations";
import { summaryCarousalData } from "../../constants/carousals";
import { LuChevronLeft, LuChevronRight, LuPlay, LuPause } from "react-icons/lu";
const Summary = () =>{
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredSlide, setHoveredSlide] = useState(false);

  const nextSlide = () => {
    setIndex((index) => (index + 1) % summaryCarousalData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) =>
        (prev - 1 + summaryCarousalData.length) % summaryCarousalData.length
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying && !hoveredSlide) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % summaryCarousalData.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, hoveredSlide]);

  return (
    <div className="w-full h-full px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-200/30 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-screen-xl w-full h-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 py-16 lg:py-24 relative z-10">
        {/* Enhanced left content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-fit flex flex-col items-center lg:items-start gap-6"
          >
            <motion.div
              variants={fadeInUp(0.2)}
              className="flex flex-col items-center lg:items-start gap-4"
            >
              <motion.h2
                variants={fadeInUp(0.4)}
                className="text-center lg:text-left font-light text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight uppercase"
              >
                we <span className="font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">are</span>
              </motion.h2>
              <motion.div
                variants={underlineVariant}
                className="h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-sm"
              ></motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp(0.6)}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200/50"
            >
              <p className="font-light text-base lg:text-lg leading-relaxed text-gray-700 text-center lg:text-left">
                <span className="font-semibold text-red-600">Hexa Production</span> is your one-stop creative partner in Dubai for
                powerful, end-to-end branding. From eye-catching event setups, bold
                signage, and custom vehicle wraps to stunning prints and digital
                content—we bring your brand to life across every space.
              </p>
              
              <motion.div
                variants={fadeInUp(0.8)}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <p className="text-sm lg:text-base text-gray-600 font-medium text-center lg:text-left">
                  With in-house production, premium materials, and a team that understands
                  your vision, we deliver <span className="text-red-600 font-semibold">standout results</span> that speak for you—loud,
                  clear, and unforgettable.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced carousel */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center relative"
          onMouseEnter={() => setHoveredSlide(true)}
          onMouseLeave={() => setHoveredSlide(false)}
        >
          {/* Carousel container with enhanced styling */}
          <div className="relative w-full max-w-lg">
            {/* Main image container */}
            <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={summaryCarousalData[index].id}
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full h-full rounded-2xl overflow-hidden group"
                >
                  <img
                    src={summaryCarousalData[index].image}
                    alt={summaryCarousalData[index].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Content overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <h3 className="text-xl lg:text-2xl font-bold mb-2">
                      {summaryCarousalData[index].title}
                    </h3>
                    <p className="text-sm lg:text-base opacity-90">
                      {summaryCarousalData[index].description}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200/50"
            >
              <LuChevronLeft size={20} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200/50"
            >
              <LuChevronRight size={20} />
            </motion.button>

            {/* Play/Pause button */}
            <motion.button
              onClick={toggleAutoplay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/70 transition-all duration-300"
            >
              {isPlaying ? <LuPause size={16} /> : <LuPlay size={16} />}
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-3 mt-6">
            {summaryCarousalData.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index 
                    ? 'bg-red-600 shadow-lg scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-lg mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying && !hoveredSlide ? "100%" : "0%" }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              key={index}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Summary;
