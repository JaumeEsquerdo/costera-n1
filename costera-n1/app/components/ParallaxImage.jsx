import { motion, useTransform } from "framer-motion";

export const ParallaxImage = ({ img, i, scrollYProgress }) => {
  const start = Math.min(0.24 + i * 0.06, 0.6); // el primer valor es para retrasar, después i * num es la separación con otros elem.
  const end = start + 0.3; //duración del scroll de la img (velocidad)

  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["110vh", "-110vh"], // Cruza la pantalla de abajo a arriba
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.15, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.img
      src={img.src}
      style={{
        left: img.left,
        top: img.top,
        y: y,
        opacity: opacity,
        position: "absolute",
      }}
      className="w-32 md:w-48 h-auto rounded-lg shadow-xl"
    />
  );
};
