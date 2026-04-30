import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "../hooks/usei18n";
const MotionImage = motion.create(Image);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6 },
  },
};

export const SectionZero = () => {
  const containerRef = useRef();
  const { t } = useI18n();

  const textsSectionZero = t.Home.HorizontalScroll.sectionZero;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "Comienza cuando el FINAL de la sección toca el FINAL de la pantalla"
    // "Termina cuando el FINAL de la sección toca el INICIO de la pantalla"
    offset: ["start end", "end start"],
  });

  // SPRING: hace que el progreso no sea "seco".
  // Si el scroll salta, el spring lo suaviza.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40, // rigidez
    damping: 40, // amortiguación (evita que rebote)
    restDelta: 0.001,
  });

  const xFrame = useTransform(smoothProgress, [0, 1], ["-60vw", "80vw"]);
  const xImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="w-screen h-screen shrink-0 flex flex-col justify-center items-center text-white"
      data-is-dark="true"
    >
      <motion.div
        style={{
          x: xFrame,
          willChange: "transform", // Prepara la GPU
          translateZ: 0, // Fuerza capa 3D
          backfaceVisibility: "hidden", // Evita artefactos visuales
          perspective: 1000,
        }}
        className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-22 pb-6 lg:py-40 overflow-hidden"
      >
        <motion.div className="relative w-40 h-70 lg:w-56 lg:h-80 overflow-hidden">
          <MotionImage
            alt=""
            style={{ x: xImage, scale: 1.2 }}
            src="/imgs-sections/casco-antiguo.webp"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 600px, 1200px"
          />
        </motion.div>

        <motion.div className="hidden lg:inline relative w-70 h-50 lg:w-85 lg:h-50 overflow-hidden">
          <MotionImage
            alt=""
            src="/imgs-sections/laVila-3.webp"
            style={{ x: xImage, scale: 1.2 }}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 600px, 1200px"
          />
        </motion.div>
        <motion.div className="relative w-50 h-80 lg:w-80 lg:h-120 overflow-hidden">
          <MotionImage
            alt=""
            src="/imgs-sections/fideua-2.webp"
            fill
            style={{ x: xImage, scale: 1.2 }}
            priority
            className="object-cover"
            sizes="(max-width: 768px) 600px, 1200px"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col justify-center items-center pb-16 px-15"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold mb-6 lg:text-7xl  text-center"
          dangerouslySetInnerHTML={{ __html: textsSectionZero.title }}
        />
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <p className="max-w-xl text-lg opacity-80 lg:text-xl text-center font-subtitle">
            {textsSectionZero.subtitle}{" "}
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-3xl text-white"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
