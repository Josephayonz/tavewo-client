import { motion } from "framer-motion";

export default function HeroBanner({ eyebrow, title, subtitle, children }) {
  return (
    <section className="bg-navy text-white text-center px-5 md:px-8 py-16 md:py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && (
          <p className="text-eyebrow font-medium mb-4 tracking-wide">{eyebrow}</p>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">{title}</h1>
        {subtitle && (
          <p className="text-slate-200 text-base md:text-lg leading-relaxed">{subtitle}</p>
        )}
        {children}
      </motion.div>
    </section>
  );
}
