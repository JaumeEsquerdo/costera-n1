import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionZero } from "./SectionZero";
import { HorizontalSection } from "./HorizontalSection";
import { useI18n } from "../hooks/usei18n";
import { formatText } from "../lib/formatText";

const MotionImage = motion.create(Image);

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

/* ring en Tailwind CSS es como un box-shadow para poder meter un efecto de borde sin ocupar espacio real */

export const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { t } = useI18n();
  const textsHorizontalSections = t.Home.HorizontalScroll;

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transformamos el scroll vertical (0 a 1) en movimiento horizontal (-200%)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-360vw"]);

  return (
    <section ref={targetRef} className="relative h-[460vh] bg-slate-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {/* SECCIÓN 0: El texto que ya tenemos */}
          <SectionZero />

          {/* SECCIÓN 1: Galería o fotos */}
          <HorizontalSection
            index={1} // Qué número de sección es (empezando desde 0 o 1)
            globalProgress={scrollYProgress}
            bgColor={"bg-casas-blue"}
          >
            {({ xImage }) => (
              <>
                <div
                  aria-label="hidden "
                  className="absolute inset-y-0 left-0 w-8 -translate-x-full ring-1 ring-casas-blue  bg-casas-blue z-10 rounded-l-2xl shadow-2xl lg:w-12 hidden lg:inline"
                />
                <div
                  aria-label="hidden"
                  className="absolute inset-y-0 -right-14 w-8 -translate-x-full ring-1 ring-casas-blue  bg-casas-blue z-1 inline lg:hidden"
                />
                <div className=" flex flex-col justify-center items-start gap-4 md:gap-10 px-4 md:px-10 lg:gap-40 lg:px-20 lg:w-1/2">
                  <h3 className="text-lg font-black text-white text-balance">
                    {textsHorizontalSections.section1.overtitle}
                  </h3>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <h2 className="text-2xl lg:text-5xl font-black text-white text-pretty">
                      {textsHorizontalSections.section1.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-balance">
                        {formatText(textsHorizontalSections.section1.p1)}
                      </p>
                      <p className="text-balance">
                        {" "}
                        {formatText(textsHorizontalSections.section1.p2)}
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div className="w-[90%] h-[42vh] overflow-hidden lg:w-90 lg:h-140 relative [@media(max-height:720px)]:hidden">
                  <MotionImage
                    src="/imgs-sections/casas-colores-2.webp"
                    fill
                    style={{ x: xImage, scale: 1.2 }}
                    alt=""
                    sizes="(max-width: 768px) 700px, 1400px"
                    className="object-cover"
                  />
                </motion.div>

                <motion.div className="overflow-hidden hidden lg:block lg:w-120 lg:h-160 relative">
                  <MotionImage
                    src="/imgs-sections/casas-colores.webp"
                    fill
                    style={{ x: xImage, scale: 1.2 }}
                    sizes="(max-width: 768px) 700px, 1800px"
                    alt=""
                    className="object-cover"
                  />
                </motion.div>
              </>
            )}
          </HorizontalSection>

          {/* SECCIÓN 2: bajada a la playa */}
          <HorizontalSection
            index={2}
            globalProgress={scrollYProgress}
            bgColor={"bg-casas-orange"}
          >
            {({ xImage }) => (
              <>
                <div
                  aria-label="hidden"
                  className="absolute inset-y-0 left-0 w-8 -translate-x-full ring-1 ring-casas-orange  bg-casas-orange z-10 rounded-l-2xl shadow-2xl lg:w-12 hidden lg:inline"
                />
                <div
                  aria-label="hidden"
                  className="absolute inset-y-0 -right-14 w-8 -translate-x-full ring-1 ring-casas-orange  bg-casas-orange z-1 inline lg:hidden"
                />
                <div className=" flex flex-col justify-center gap-4 md:gap-10 px-4 md:px-10  lg:gap-40 lg:px-20 lg:w-1/2">
                  <h3 className="text-lg font-black text-white">
                    {textsHorizontalSections.section2.overtitle}
                  </h3>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <h2 className="text-2xl lg:text-5xl font-black text-white text-pretty">
                      {textsHorizontalSections.section2.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-balance">
                        {formatText(textsHorizontalSections.section2.p1)}
                      </p>
                      <p className="text-balance">
                        {" "}
                        {formatText(textsHorizontalSections.section2.p2)}
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div className=" w-[90%] h-[45vh] overflow-hidden lg:w-1/2 lg:h-[70vh] relative [@media(max-height:720px)]:hidden">
                  <MotionImage
                    src="/imgs-sections/laVila-5.webp"
                    fill
                    sizes="(max-width: 768px) 67vw, 65vw"
                    style={{ x: xImage, scale: 1.2 }}
                    alt=""
                    className="object-cover"
                  />
                </motion.div>
              </>
            )}
          </HorizontalSection>
          {/* SECCIÓN 3: Gastronomía */}
          <HorizontalSection
            index={3}
            globalProgress={scrollYProgress}
            bgColor={"bg-casas-red"}
          >
            {({ xImage }) => (
              <>
                <div
                  aria-label="hidden "
                  className="absolute inset-y-0 left-0 w-8 -translate-x-full ring-1 ring-casas-red  bg-casas-red z-10 rounded-l-2xl shadow-2xl lg:w-12 hidden lg:inline"
                />
                <div className=" flex flex-col justify-center gap-4 md:gap-10 px-4 md:px-10  lg:gap-40 lg:px-20 lg:w-1/2">
                  <h3 className="text-lg font-black text-white">
                    {textsHorizontalSections.section3.overtitle}
                  </h3>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <h2 className="text-2xl lg:text-5xl font-black text-white text-pretty">
                      {textsHorizontalSections.section3.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-balance ">
                        {formatText(textsHorizontalSections.section3.p1)}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div className=" w-[90%] h-[40vh] overflow-hidden lg:w-1/2 lg:h-[60vh] relative [@media(max-height:720px)]:hidden">
                  <MotionImage
                    src="/imgs-sections/fideua-posit.webp"
                    style={{ x: xImage, scale: 1.2 }}
                    fill
                    sizes="(max-width: 768px) 1400px, 65vw"
                    alt="Fachada"
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </>
            )}
          </HorizontalSection>
        </motion.div>
      </div>
    </section>
  );
};
