import { motion } from "framer-motion";

const variantsContainer = {
  initial: {},
  show: {
    transition: {
      staggerChildren: 0.006,
    },
  },
};

const variantsTextSplit = {
  initial: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function AnimatedText({ text }) {
  return (
    <motion.span variants={variantsContainer} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={variantsTextSplit}
          className="inline-block animate-letter text-2xl md:text-4xl text-neutral-800 font-semibold"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
