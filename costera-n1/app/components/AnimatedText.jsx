import { motion } from "framer-motion";

const variantsContainer = {
  initial: {},
  show: {
    transition: {
      staggerChildren: 0.04,
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
    <motion.span
      variants={variantsContainer}
      className="flex flex-wrap"
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={variantsTextSplit}
          className="inline-block mr-1 md:mr-2 text-lg md:text-4xl text-neutral-800 font-semibold 4k:text-6xl!"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
