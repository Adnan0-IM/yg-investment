import { cubicBezier } from "framer-motion";
export const viewport = { once: true, amount: 0.2 };

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

export const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.1,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export const pop = {
  hover: { y: -2, scale: 1.01, transition: { duration: 0.15 } },
  tap: { scale: 0.98 },
};
