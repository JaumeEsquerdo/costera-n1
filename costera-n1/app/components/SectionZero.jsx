import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const SectionZero = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "Comienza cuando el FINAL de la sección toca el FINAL de la pantalla"
    // "Termina cuando el FINAL de la sección toca el INICIO de la pantalla"
    offset: ["start end", "end start"],
  });

  // SPRING: hace que el progreso no sea "seco".
  // Si el scroll salta, el spring lo suaviza.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // rigidez
    damping: 30, // amortiguación (evita que rebote)
    restDelta: 0.001,
  });

  const xFrame = useTransform(smoothProgress, [0, 1], ["-60vw", "80vw"]);
  //   const xImage = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

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
        className="relative flex flex-col lg:flex-row items-center gap-2 lg:gap-6 py-40 overflow-hidden"
      >
        <div className="relative w-40 h-60 lg:w-40 lg:h-80 overflow-hidden">
          <Image
            alt=""
            src="/hotel-fachada.webp"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 20vw"
          />
        </div>

        <div className="relative w-70 h-50 lg:w-85 lg:h-50 overflow-hidden">
          <Image
            alt=""
            src="/hotel-fachada.webp"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 20vw"
          />
        </div>
        <div
          style={{ x: xFrame }}
          className="relative w-50 h-80 lg:w-80 lg:h-120 overflow-hidden"
        >
          <Image
            alt=""
            src="/hotel-fachada.webp"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 20vw"
          />
        </div>
      </motion.div>
      <div className="flex flex-col justify-center items-center pb-16 px-15">
        <h3 className="text-3xl font-bold mb-6 lg:text-7xl  text-center">
          COSTERETA n1 <br />
          el corazón de La Vila
        </h3>
        <div className="flex gap-2">
          <p className="max-w-xl text-lg opacity-80 lg:text-xl text-center">
            Un recorrido por lo que te espera a solo unos pasos{" "}
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-3xl text-white"
          />
        </div>
      </div>
    </section>
  );
};
