import { motion } from "framer-motion";

/**
 * Fades + slides content into view as it enters the viewport.
 * Usage: <Reveal><YourContent /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
  as = "div",
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.9, delay:0.2, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Stagger container — animates direct motion children (using the
 * `staggerItem` variants below) one after another as they scroll into view.
 */
export function StaggerGroup({ children, className = "", stagger = 0.08, once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Apply to a motion.div inside a <StaggerGroup> via `variants={staggerItem}`
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
