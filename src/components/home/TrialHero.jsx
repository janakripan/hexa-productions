import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles, Star, ArrowRight, Award, Users, Building2 } from "lucide-react";
import heroBanner from "../../../public/videos/hero banner video 2.mp4";
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

const fadeInLeft = (delay = 0, duration = 0.8) => ({
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

const fadeInRight = (delay = 0, duration = 0.8) => ({
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
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

// Modern heading animation with staggered reveal
const modernHeadingAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const modernLineAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Glitch effect for "Dreams"
const glitchAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  const stats = [
    { icon: Building2, number: "500+", label: "Projects Completed", delay: 0.8 },
    { icon: Users, number: "10K+", label: "Happy Clients", delay: 1.0 },
    { icon: Award, number: "15+", label: "Years Experience", delay: 1.2 },
  ];

  return (
    <div className="relative w-full min-h-screen h-fit overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          src={heroBanner}
          className="w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* Dark overlay */}
      <div style={{y}} className="bg-black/70 absolute inset-0 z-10"></div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full z-15"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Top Navigation Highlight */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">Award-Winning Architecture Firm</span>
          <Star className="w-4 h-4 text-yellow-400" />
        </div>
      </motion.div>

      {/* Side Decorative Elements */}
      <motion.div
        variants={fadeInLeft(0.6)}
        initial="hidden"
        animate="visible"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <div className="text-white text-xs font-light tracking-[0.2em] rotate-90 origin-center whitespace-nowrap">
            BUILDING EXCELLENCE
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInRight(0.6)}
        initial="hidden"
        animate="visible"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <div className="text-white text-xs font-light tracking-[0.2em] -rotate-90 origin-center whitespace-nowrap">
            SINCE 2008
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        </div>
      </motion.div>

      {/* Main Content - Modern Eye-Catching Design */}
      <motion.div
        style={{y}}
        variants={containerVariant}
        className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4"
      >
        {/* Modern Headline */}
        <div className="lg:max-w-7xl mx-auto mb-6 pt-8">
          <motion.div
            variants={modernHeadingAnimation}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-full opacity-30"></div>
            
            <motion.h1 className="relative text-white font-black tracking-tight leading-[0.85] mb-8">
              {/* First Line */}
              <motion.div
                variants={modernLineAnimation}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 md:mb-4"
              >
                <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  CRAFTING
                </span>
                <span className="inline-block ml-4 text-white/70 font-light">
                  YOUR
                </span>
              </motion.div>

              {/* Second Line - Eye-catching "Dreams" */}
              <motion.div
                variants={modernLineAnimation}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl relative"
              >
                <motion.span
                  variants={glitchAnimation}
                  initial="hidden"
                  animate="visible"
                  className="relative inline-block"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 40px rgba(239, 68, 68, 0.8)",
                  }}
                >
                  {/* Main text with multiple gradients */}
                  <span className="relative z-10 bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-black">
                    DREAMS
                  </span>
                  
                  {/* Glitch layers */}
                  <motion.span
                    className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-black opacity-20"
                    animate={{
                      x: [0, 2, -2, 0],
                      opacity: [0.2, 0.8, 0.2, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    DREAMS
                  </motion.span>
                  
                  <motion.span
                    className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-black opacity-20"
                    animate={{
                      x: [0, -2, 2, 0],
                      opacity: [0.2, 0.6, 0.2, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    DREAMS
                  </motion.span>
                </motion.span>

                {/* Decorative elements */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"
                />
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.7, duration: 0.8, type: "spring" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80"
                />
              </motion.div>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "60%", opacity: 1 }}
                transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                className="mx-auto mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"
              />
            </motion.h1>
          </motion.div>

          {/* Modern Subtitle */}
          <motion.p
            variants={fadeInUp(1.8, 0.8)}
            initial="hidden"
            animate="visible"
            className="text-white/90 text-lg md:text-xl lg:text-2xl font-light max-w-4xl mx-auto leading-relaxed mb-8"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Where visionary design meets exceptional craftsmanship.
            </span>
            <br className="hidden md:block" />
            <span className="text-white/70">
              We transform spaces into extraordinary experiences that inspire and endure.
            </span>
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp(2.2, 0.8)}
          initial="hidden"
          animate="visible"
          className="flex flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center mb-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp(stat.delay, 0.6)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full mb-3 group-hover:bg-red-500/20 transition-all duration-300 border border-white/20 group-hover:border-red-500/30">
                <stat.icon className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium text-center group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className=" hidden md:block absolute bottom-5 lg:bottom-3 left-1/2 transform -translate-x-1/2 z-20"
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
          className="flex flex-col w-full h-full items-center gap-2 text-white p-2 px-5 rounded-full border-2 border-white/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
        >
          <span className="text-xs font-medium opacity-80 group-hover:opacity-100">
            Discover More
          </span>
          <ChevronDown className="w-6 h-6 group-hover:text-red-400 transition-colors" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;