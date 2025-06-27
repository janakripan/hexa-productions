import { delay } from "framer-motion";

// only for hero container
export const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
    },
  },
};

// letter animation hero heading
export const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// fade in up

export const fadeInUp =(duration, delay)=> ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: "easeOut",
      delay: delay,
    },
  },
});

// up and down travel

export const upAndDown = {
  animate: {
    y: [0, -28, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// underline animation

export const underlineVariant = {
  hidden:{
    width:0,
    opacity:0
  },
  visible:{
    opacity:1,
    width:32,
    transition:{
      delay:1,
      ease:"easeOut",
      duration:0.5,
    }
  }
}