import { motion, useTransform } from "framer-motion";

export const ParallaxImage = ({ img, i, scrollYProgress }) => {
  const start = Math.min(0.24 + i * 0.06, 0.6); // el primer valor es para retrasar, después i * num es la separación con otros elem.
  const end = start + 0.3; //duración del scroll de la img (velocidad)

  // 1. Movimiento del CONTENEDOR (el marco de la foto)
  const yFrame = useTransform(
    scrollYProgress,
    [start, end],
    ["110vh", "-110vh"], // cruza la pantalla de abajo a arriba
  );

  // 2. Movimiento de la IMAGEN (parallax interno)
  // Queremos que la imagen se mueva en sentido contrario o a distinta velocidad
  // "20%" a "-20%" hace que la foto parezca deslizarse dentro del marco
  const yImage = useTransform(scrollYProgress, [start, end], ["-20%", "20%"]);

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.15, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{
        left: img.left,
        top: img.top,
        y: yFrame,
        opacity: opacity,
        position: "absolute",
      }}
      // El contenedor corta la imagen que sobra
      className="w-40 h-60 md:w-52 md:h-80 overflow-hidden rounded-lg shadow-xl"
    >
      <motion.img
        src={img.src}
        alt={img.alt}
        style={{
          y: yImage, // Efecto parallax interno
          scale: 1.2, // Escalamos un poco para que haya margen para moverse y asegurar q no quede hueco en blanco
        }}
        className="w-full h-[120%] object-cover" // La imagen es más alta que el marco
      />
    </motion.div>
  );
};
