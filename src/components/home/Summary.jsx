import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerVariant,
  fadeInUp,
  underlineVariant,
} from "../../Animations/animations";
import { summaryCarousalData } from "../../constants/carousals";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Summary = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index) => (index + 1) % summaryCarousalData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) =>
        (prev - 1 + summaryCarousalData.length) % summaryCarousalData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % summaryCarousalData.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full h-full px-4">
      {/* left content */}
      <div className="max-w-screen-xl w-full h-full  mx-auto flex flex-col md:flex-row gap-5 py-24">
        <div className="w-full md:w-1/2 ">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-fit flex flex-col items-center gap-4 "
          >
            <motion.h2
              variants={fadeInUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center uppercase font-open  text-2xl md:text-4xl font-light text-gray-600 "
            >
              we <span className="font-semibold">are</span>
            </motion.h2>
            <motion.div
              variants={underlineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="pt-0.75 w-8 bg-red-600"
            ></motion.div>
          </motion.div>
          <motion.p
            variants={fadeInUp(0.6, 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 font-light text-sm md:text-base whitespace-normal w-full md:px-4 lg:px-24 text-center lg:text-left"
          >
            Hexa Production is your one-stop creative partner in Dubai for
            powerful, end-to-end branding. From eye-catching event setups, bold
            signage, and custom vehicle wraps to stunning prints and digital
            content—we bring your brand to life across every space. With
            in-house production, premium materials, and a team that understands
            your vision, we deliver standout results that speak for you—loud,
            clear, and unforgettable.
          </motion.p>
        </div>

        {/* summary carousal */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden px-4 pr-20"
        >
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hover:text-white hover:bg-red-500 transition-all duration-300"
          >
            <BiChevronLeft />
          </button>

          <div className="w-full h-64 flex items-center justify-center rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={summaryCarousalData[index].id}
                src={summaryCarousalData[index].image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover rounded-3xl"
              />
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute lg:right-16 right-0 z-10 bg-white shadow-md rounded-full p-2 hover:text-white hover:bg-red-500 transition-all duration-300"
          >
            <BiChevronRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Summary;
