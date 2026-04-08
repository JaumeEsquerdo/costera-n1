import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionZero } from "./SectionZero";
import { HorizontalSection } from "./HorizontalSection";
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
            bgColor={"bg-blue-300"}
          >
            {({ xImage }) => (
              <>
                <div
                  aria-label="hidden "
                  className="absolute inset-y-0 left-0 w-8 -translate-x-full ring-1 ring-blue-300  bg-blue-300 z-10 rounded-l-2xl shadow-2xl lg:w-12"
                />
                <div className=" flex flex-col justify-center items-start gap-4 md:gap-10 px-4 md:px-10 lg:gap-40 lg:px-20 lg:w-1/2">
                  <h3 className="text-lg font-black text-white text-balance">
                    01. El Corazón del Color: Costera de la Mar
                  </h3>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <h2 className="text-2xl lg:text-5xl font-black text-white text-pretty">
                      Vive en el icono de la Costa Blanca
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-balance">
                        Te alojas en la Costera de la Mar, la calle más
                        fotografiada y vibrante de Villajoyosa. Este eje
                        histórico no es solo una dirección, es el puente que une
                        el legado de la ciudad amurallada con el espíritu
                        marinero.
                      </p>
                      <p className="text-balance">
                        {" "}
                        Despierta rodeado de fachadas de colores y la brisa del
                        Mediterráneo a solo unos pasos de tu puerta.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div className=" w-full overflow-hidden lg:w-1/2 h-[60vh] relative">
                  <MotionImage
                    src="/hotel-fachada.webp"
                    style={{ x: xImage, scale: 1.2 }}
                    width={1000}
                    height={800}
                    alt="Fachada"
                    priority
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
            bgColor={"bg-orange-300"}
          >
            {({ xImage }) => (
              <>
                <div
                  aria-label="hidden"
                  className="absolute inset-y-0 left-0 w-8 -translate-x-full ring-1 ring-orange-300  bg-orange-300 z-10 rounded-l-2xl shadow-2xl lg:w-12"
                />
                <div className=" flex flex-col justify-center gap-4 md:gap-10 px-4 md:px-10  lg:gap-40 lg:px-20 lg:w-1/2">
                  <h3 className="text-lg font-black text-white">
                    02. Tu Conexión con el Mar
                  </h3>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <h2 className="text-2xl lg:text-5xl font-black text-white text-pretty">
                      A escasos metros de la arena
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-balance">
                        Olvida el coche y las vueltas innecesarias. Desde el
                        corazón del casco antiguo, una bajada directa te guía
                        hasta el Paseo Marítimo y la Playa Centro. En menos de 5
                        minutos pasarás del silencio de las calles empedradas al
                        bullicio del Mediterráneo.
                      </p>
                      <p className="text-balance">
                        {" "}
                        Ideal para ese primer baño de la mañana o un paseo al
                        atardecer.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div className=" w-full overflow-hidden lg:w-1/2 h-[70vh] relative">
                  <MotionImage
                    src="/hotel-fachada.webp"
                    width={1000}
                    height={800}
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
            bgColor={"bg-red-300"}
          >
            {({ xImage }) => (
              <>
                <div
                  aria-label="hidden "
                  className="absolute inset-y-0 left-0 w-8 -translate-x-full ring-1 ring-red-300  bg-red-300 z-10 rounded-l-2xl shadow-2xl lg:w-12"
                />
                <div className=" flex flex-col justify-center gap-4 md:gap-10 px-4 md:px-10  lg:gap-40 lg:px-20 lg:w-1/2">
                  <h3 className="text-lg font-black text-white">
                    03. Sabores y Tradición
                  </h3>
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <h2 className="text-2xl lg:text-5xl font-black text-white text-pretty">
                      Un festín para los sentidos
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-balance">
                        La Vila sabe a sal y a cacao. Estás a la vuelta de la
                        esquina de las mejores tabernas tradicionales y
                        arrocerías del puerto. Además, el aroma a chocolate
                        artesanal te guiará en un paseo hacia las fábricas
                        históricas de la ciudad. Una ubicación privilegiada para
                        los amantes de la buena mesa y la vida de barrio
                        auténtica.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div className="w-full overflow-hidden lg:w-80 lg:h-140 relative">
                  <MotionImage
                    src="/hotel-fachada.webp"
                    width={320}
                    height={560}
                    style={{ x: xImage, scale: 1.2 }}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                <motion.div className=" w-full overflow-hidden hidden lg:block lg:w-120 lg:h-160 relative">
                  <MotionImage
                    src="/hotel-fachada.webp"
                    width={480}
                    height={640}
                    style={{ x: xImage, scale: 1.2 }}
                    alt=""
                    className="object-cover w-full h-full"
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
