"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { PresentationHouse } from "../components/PresentationHouse";
import { Header } from "../components/Header";
import { DescriptionHouse } from "../components/DescriptionHouse";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { BookingCTA } from "../components/BookingCTA";
import { Footer } from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";

import es from "../../locales/es.json";
import en from "../../locales/en.json";

export default function Home() {
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();
  const [showText, setShowText] = useState(true);

  /** * GESTIÓN DE TRADUCCIONES con next-i18n-router
   * 1. Obtenemos el idioma actual desde la URL ([locale]).
   * 2. Seleccionamos el diccionario JSON correspondiente.
   * 3. La constante 't' contendrá los textos finales.
   */
  const params = useParams();
  const locale = params.locale || "es";
  const t = locale === "en" ? en : es;

  // Escucha los cambios del scroll vertical
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      // Mostramos el texto solo si el scroll es menor al 40%
      setShowText(v < 0.4);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const headerVariants = {
    init: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const maxScroll = windowSize.height * 2; // hero ocupa 2 veces la altura del viewport
  const progress = useTransform(scrollY, [0, maxScroll], [0, 1]);
  // Animar width/height
  const width = useTransform(progress, [0, 1], [200, windowSize.width]);
  const height = useTransform(progress, [0, 1], [400, windowSize.height]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const borderRadius = useTransform(progress, [0, 1], ["0px", "0px"]);

  return (
    <>
      <Header showText={showText} />
      <main className="min-h-screen relative flex flex-col">
        {/* Header */}
        {/* Hero */}
        <div className="h-[300vh] relative">
          <motion.header className="h-screen sticky top-0 flex flex-col justify-between items-center overflow-x-hidden">
            <AnimatePresence>
              {/* Texto solo visible al inicio */}
              {showText && (
                <motion.div
                  variants={headerVariants}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  initial="init"
                  animate="open"
                  exit="closed"
                  className="text-center fixed top-6 lg:top-8 z-10 g-12 max-w-[90%]"
                >
                  <h1 className="font-title text-5xl lg:text-9xl text-green-950">
                    {t.Index.title}
                  </h1>
                  <h2 className="text-base lg:text-xl mt-4 [@media(max-height:720px)]:hidden">
                    {t.Index.hero.subtitle}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WRAPPER de la imagen */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center overflow-hidden`}
            >
              <motion.div
                style={{ width, height }}
                className="relative overflow-hidden"
              >
                <Image
                  src="/hotel-fachada.webp"
                  fill
                  sizes="100vw"
                  priority
                  alt="Imagen de la fachada de la casa"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>
            <AnimatePresence>
              {showText && (
                <motion.div
                  className="fixed bottom-4 lg:bottom-10 flex flex-col items-center justify-center gap-2 lg:gap-6 max-w-[90%]"
                  variants={headerVariants}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  initial="init"
                  animate="open"
                  exit={showText ? "closed" : "open"}
                >
                  <h2 className="text-sm lg:text-lg text-center">
                    Dentro del recinto amurallado y a un paso de la Playa Centro
                  </h2>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-3xl text-green-950"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        </div>
        {/* Presentación (sección 2) */}
        <PresentationHouse />
        {/* Sección 3, Descripción */}
        <DescriptionHouse />
        {/* Sección 4, Scroll Horizontal */}
        <HorizontalScroll />
        {/* Sección 5, Booking CTA  */}
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
