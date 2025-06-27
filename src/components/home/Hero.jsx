import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router";

// Mock hero banner image
const heroBanner = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80";

// Enhanced animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const fadeInUp = (delay = 0, duration = 0.8) => ({
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      delay, 
      duration,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
});

const letterVariant = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
    scale: 0.5
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

const upAndDown = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowAnimation = {
  animate: {
    textShadow: [
      "0 0 20px rgba(239, 68, 68, 0.5)",
      "0 0 40px rgba(239, 68, 68, 0.8)",
      "0 0 20px rgba(239, 68, 68, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const finalWord = "Dreams";

const Hero = () => {
   const navigate = useNavigate()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
   
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = (path) =>{
    navigate(`${path}`)
  }

  return (
    <div className="relative w-full min-h-screen h-fit lg:overflow-hidden ">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={heroBanner}
          alt="Professional workspace showcasing creative excellence"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Dynamic Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.7) 50%, 
            rgba(0,0,0,0.9) 100%)`
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-15">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            <Sparkles 
              className="text-red-500/20 w-4 h-4 md:w-6 md:h-6" 
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        {/* Badge/Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium"
        >
          <Star className="w-4 h-4 text-yellow-400" />
          <span>Premium Creative Solutions</span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-5xl mx-auto">
          <motion.h1
            variants={fadeInUp(0.4, 1)}
            initial="hidden"
            animate="visible"
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            <span className="block mb-2">Crafting Your</span>
            <motion.span
              className="relative inline-block"
              initial="hidden"
              animate="visible"
              variants={containerVariant}
            >
              <motion.span
                variants={glowAnimation}
                animate="animate"
                className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-extrabold"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.3))"
                }}
              >
                {finalWord.split("").map((char, idx) => (
                  <motion.span
                    key={idx}
                    variants={letterVariant}
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 180,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              
              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp(0.8, 0.8)}
            initial="hidden"
            animate="visible"
            className="text-gray-200 text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Transforming visions into reality with cutting-edge design, 
            <span className="text-red-400 font-medium"> premium craftsmanship</span>, 
            and unparalleled creative excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp(1.2, 0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span onClick={()=>handleExploreClick("about")} className="relative z-10 flex items-center gap-2">
                Explore Our Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </motion.button>
          </motion.div>
        </div>

        {/* Stats/Features
        <motion.div
          variants={fadeInUp(1.4, 0.8)}
          initial="hidden"
          animate="visible"
          className= " hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto "
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Creative Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#summary"
          variants={upAndDown}
          animate="animate"
          whileHover={{ 
            scale: 1.2, 
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)"
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

      {/* Floating particles */}
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
      </div>
    </div>
  );
};

export default Hero;