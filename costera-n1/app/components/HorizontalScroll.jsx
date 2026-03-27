import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionZero } from "./SectionZero";

/**
 * FLOW DE ANIMACIÓN "SCROLL-TO-HORIZONTAL":
 * * 1. EL CONTENEDOR PADRE (section):
 * Define el "recorrido" total del scroll. Al medir 300vh, le damos al usuario
 * 3 pantallas de altura para desplazarse hacia abajo. Esto genera el "tiempo" de la animación.
 * * 2. EL MONITOR STICKY (div sticky):
 * "Congela" el contenido en la pantalla del usuario. Mientras el padre se recorre
 * hacia arriba, este div se queda anclado en el top:0. Así el usuario no siente
 * que la página sube, sino que se queda "atrapado" en esta sección.
 * * 3. EL TRANSFORM (Framer Motion):
 * Escuchamos cuánto ha bajado el usuario en el Padre (de 0% a 100%).
 * Ese porcentaje lo convertimos en movimiento horizontal (Eje X).
 * Ej: Si el usuario bajó al 50% del Padre, movemos el Tren -100vw a la izquierda.
 * * 4. EL TREN (motion.div):
 * Contiene todas las secciones puestas una al lado de la otra (flex).
 * Es el que realmente se desliza lateralmente frente a la "cámara" del usuario.
 */

export const HorizontalScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transformamos el scroll vertical (0 a 1) en movimiento horizontal (-200%)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {/* SECCIÓN 1: El texto que ya tenemos */}
          <SectionZero />

          {/* SECCIÓN 2: Galería o fotos */}
          <div className="w-screen h-screen shrink-0 flex items-center justify-center bg-blue-500 rounded-l-2xl">
            <h2 className="text-5xl font-black text-white">
              Fachadas de Colores
            </h2>
          </div>

          {/* SECCIÓN 3: Detalles finales */}
          <div className="relative w-screen h-screen shrink-0 flex items-center justify-center bg-orange-500 ">
            <div
              aria-label="hidden "
              className="absolute inset-y-0 left-0 w-8 -translate-x-8/12 bg-orange-500 z-10 rounded-l-2xl"
            />
            <h2 className="text-5xl font-black text-white">Cerca del Mar</h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
