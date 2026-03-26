import { motion, useTransform } from "framer-motion";
import Image from "next/image";

// crear un componente de motion que envuelve al Image de Next
const MotionImage = motion.create(Image);

export const ParallaxImage = ({ img, i, scrollYProgress }) => {
  const start = Math.min(0.24 + i * 0.07, 0.6); // el primer valor es para retrasar, después i * num es la separación con otros elem.
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
  const randomRotation = (i % 2 === 0 ? 1 : -1) * (i * 2 + 1); // Pares (positivo) derecha, Impares (negativo) izquierda

  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [randomRotation, 0],
  );

  return (
    <motion.div
      style={{
        left: img.left,
        top: img.top,
        y: yFrame,
        rotate: rotate,
        opacity: opacity,
        position: "absolute",
      }}
      // El contenedor corta la imagen que sobra
      className="w-40 h-60 md:w-52 md:h-80 overflow-hidden shadow-xl"
    >
      <MotionImage
        src={img.src}
        alt={img.alt}
        fill
        style={{
          y: yImage, // Efecto parallax interno
          scale: 1.2, // Escalamos un poco para que haya margen para moverse y asegurar q no quede hueco en blanco
        }}
        className="object-cover"
        sizes="(max-width: 768px) 33vw, 20vw" // Dile al navegador qué % de pantalla ocupa la img para que descargue el peso justo (33% en móvil, 20% en PC)
      />
    </motion.div>
  );
};
