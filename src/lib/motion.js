import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const MotionLink = motion(Link);
export const MotionDiv = motion.div;
export const MotionButton = motion.button;

// Spread these onto any motion element for a consistent button feel
export const buttonHover = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 20 },
};

// Spread onto cards for a subtle lift on hover
export const cardHover = {
  whileHover: { y: -6, boxShadow: "0 12px 28px rgba(10, 25, 48, 0.12)" },
  transition: { type: "spring", stiffness: 300, damping: 22 },
};
