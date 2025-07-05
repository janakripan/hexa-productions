import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import hexaImage from '../../src/assets/images/splash screen/hexa_image[1].jpg'

const logoUrl = "https://hexagroup.ae/wp-content/uploads/2024/03/cropped-cropped-HEXA-LOGO-new.pdf.png";

const SplashScreen = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5000);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  // Enhanced background with dynamic gradient
  const backgroundVariants = {
    initial: {
      background: "radial-gradient(circle at 20% 50%, #1e293b 0%, #0f172a 25%, #7c2d12 50%, #dc2626 75%, #f97316 100%)",
    },
    animate: {
      background: [
        "radial-gradient(circle at 20% 50%, #1e293b 0%, #0f172a 25%, #7c2d12 50%, #dc2626 75%, #f97316 100%)",
        "radial-gradient(circle at 80% 20%, #312e81 0%, #1e1b4b 25%, #991b1b 50%, #dc2626 75%, #ea580c 100%)",
        "radial-gradient(circle at 50% 80%, #374151 0%, #1f2937 25%, #7f1d1d 50%, #ef4444 75%, #f59e0b 100%)",
        "radial-gradient(circle at 70% 30%, #1e293b 0%, #0f172a 25%, #7c2d12 50%, #dc2626 75%, #f97316 100%)",
      ],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Container variants with dramatic entrance
  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
      rotateY: 180,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.5,
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Enhanced logo container variants
  const logoContainerVariants = {
    initial: {
      scale: 0,
      rotate: -360,
      opacity: 0,
    },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Logo animation variants
  const logoVariants = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };

  // Continuous hover effect
  const hoverVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const imageVariants = {
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
      transition:{
        duration:3,
        ease:"easeInOut"
      }
    },
    
  }
  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-black"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.img variants={imageVariants} src={hexaImage} alt="" className="" />
        
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;