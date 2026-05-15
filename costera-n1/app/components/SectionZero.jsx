import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "../hooks/usei18n";
// const MotionImage = motion.create(Image);

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.6 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -400 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.6 },
//   },
// };

export const SectionZero = () => {
  const containerRef = useRef();
  const { t } = useI18n();

  const textsSectionZero = t.Home.HorizontalScroll.sectionZero;

  const { scrollYProgress: scrollGlobal } = useScroll({
    target: containerRef,
    // "Comienza cuando el INICIO de la sección toca el FINAL de la pantalla"
    // "Termina cuando el FINAL de la sección toca el INICIO de la pantalla"
    offset: ["start end", "end start"],
  });

  // SPRING: hace que el progreso no sea "seco".
  // Si el scroll salta, el spring lo suaviza.
  const smoothProgress = useSpring(scrollGlobal, {
    stiffness: 40, // rigidez
    damping: 40, // amortiguación (evita que rebote)
    restDelta: 0.001,
  });

  const xFrame = useTransform(smoothProgress, [0, 1], ["-60vw", "80vw"]);
  const xImage = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen shrink-0 flex flex-col justify-center items-center text-white"
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
        className="relative flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-16 pt-22 pb-6 lg:py-40 overflow-hidden"
      >
        <motion.div className="relative w-30 h-40 md:w-40 md:h-54 xl:w-56 xl:h-80 overflow-hidden rounded-2xl 4k:w-120! 4k:h-160!">
          <motion.div
            style={{
              x: xImage,
              scale: 1.4,
            }}
            className="absolute inset-0"
          >
            <Image
              alt=""
              src="/imgs-sections/casco-antiguo.webp"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 600px, 1200px"
            />
          </motion.div>
        </motion.div>

        <motion.div className="hidden lg:inline relative w-70 h-50 xl:w-85 xl:h-50 overflow-hidden rounded-2xl 4k:w-140! 4k:h-100!">
          <motion.div
            style={{
              x: xImage,
              scale: 1.4,
            }}
            className="absolute inset-0"
          >
            <Image
              alt=""
              src="/imgs-sections/laVila-3.webp"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 600px, 1200px"
            />
          </motion.div>
        </motion.div>
        <motion.div className="relative w-34 h-50 md:h-64 xl:w-80 xl:h-100 overflow-hidden rounded-2xl 4k:w-140! 4k:h-200!">
          <motion.div
            style={{
              x: xImage,
              scale: 1.4,
            }}
            className="absolute inset-0"
          >
            <Image
              alt=""
              src="/imgs-sections/fideua-2.webp"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 600px, 1200px"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div
        // variants={containerVariants}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col justify-center items-center gap-2 px-15 py-6 xl:py-10"
      >
        <h3
          // variants={itemVariants}
          className="text-3xl font-bold lg:text-7xl text-center 4k:text-9xl!"
          dangerouslySetInnerHTML={{ __html: textsSectionZero.title }}
        />
        <div
          // variants={itemVariants}
          className="flex items-center gap-2"
        >
          <p className="w-fit text-lg opacity-80 lg:text-xl text-center 4k:text-4xl!">
            {textsSectionZero.subtitle}{" "}
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-3xl text-white 4k:text-5xl!"
          />
        </div>
      </div>
    </section>
  );
};
