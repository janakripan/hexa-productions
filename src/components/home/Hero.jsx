import React, {  useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles, Star } from "lucide-react";
import heroBanner from "../../../public/videos/hero banner video.mp4";
import { containerVariant, letterVariant } from "../../Animations/animations";




const fadeInUp = (delay = 0, duration = 0.8) => ({
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});



const upAndDown = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowAnimation = {
  animate: {
    textShadow: [
      "0 0 20px rgba(239, 68, 68, 0.5)",
      "0 0 40px rgba(239, 68, 68, 0.8)",
      "0 0 20px rgba(239, 68, 68, 0.5)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const finalWord = "Dreams";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);



  
 
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0; // set to 2x speed
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen h-fit lg:overflow-hidden ">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[100%] "
      >
        <video
          ref={videoRef}
          src={heroBanner} // ensure it's in public/videos
          className="w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* dark overlay */}

      <div className="bg-black/70 absolute inset-0 z-10">

      </div>

     

      

      {/* Main Content - Repositioned to bottom */}
      <motion.div
        variants={containerVariant}
        className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20 text-center px-4"
      >
        <div className="max-w-5xl mx-auto mb-4">
          <motion.h1
            variants={fadeInUp(0.4, 1)}
            initial="hidden"
            animate="visible"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            <span className="inline mr-3">Crafting Your</span>
            <motion.span
              className="relative inline"
              initial="hidden"
              animate="visible"
              variants={containerVariant}
            >
              <motion.span
                variants={containerVariant}
                animate="visible"
                initial="hidden"
                className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent font-extrabold"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.3))",
                }}
              >
                {finalWord.split("").map((char, idx) => (
                  <motion.span
                    key={idx}
                    variants={letterVariant}
                    className="inline-block"
                   
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"
              />
            </motion.span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#summary"
          variants={upAndDown}
          animate="animate"
          whileHover={{
            scale: 1.2,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col w-full h-full items-center gap-2 text-white p-2 px-4 rounded-full border-2 border-white/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
        >
          <span className="text-xs font-medium opacity-80 group-hover:opacity-100">
            Discover More
          </span>
          <ChevronDown className="w-6 h-6 group-hover:text-red-400 transition-colors" />
        </motion.a>

        {/* Scroll progress line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "60px" }}
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
          className="w-px bg-gradient-to-b from-white/50 to-transparent mx-auto mt-4"
        />
      </motion.div>

      {/* Floating particles
      <div className="absolute inset-0 pointer-events-none z-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
