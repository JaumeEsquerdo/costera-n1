"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { PresentationHouse } from "../components/PresentationHouse";
import { Header } from "../components/Header";
import { DescriptionHouse } from "../components/DescriptionHouse";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { BookingCTA } from "../components/BookingCTA";
import { Footer } from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import imgPortada from "@/public/imgs-casa/entrada-puerta.webp";

import { useI18n } from "../hooks/usei18n";
const MotionImage = motion.create(Image);

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

export default function Home() {
  const { t, locale } = useI18n();
  const { scrollY } = useScroll();
  const [showText, setShowText] = useState(true);
  const containerRef = useRef(null);

  const textsHero = t.Home.hero;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Escucha los cambios del scroll vertical
  useEffect(() => {
    const checkScroll = () => {
      setShowText(window.scrollY < window.innerHeight * 0.4);
    };

    checkScroll();
    const unsubscribe = scrollY.on("change", (v) => {
      // Mostramos el texto solo si el scroll es menor al 40%
      setShowText(v < window.innerHeight * 0.4);
    });
    return () => unsubscribe();
  }, [scrollY]);

  //FILTRO DE SUAVIZADO
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25, // Resistencia al movimiento
    stiffness: 120, // Fuerza de atracción
  });

  const width = useTransform(smoothProgress, [0, 0.6], ["23vw", "100vw"]);

  const height = useTransform(smoothProgress, [0, 0.6], ["42vh", "100vh"]);

  const moveY = useTransform(smoothProgress, [0, 1], ["10%", "-0%"]);
  const scaleImgHero = useTransform(smoothProgress, [0, 0.6], [1.6, 1]);

  return (
    <>
      <main className="min-h-screen relative flex flex-col">
        {/* Header */}
        <Header showText={showText} />
        {/* Hero */}
        <div ref={containerRef} className="h-[300vh] relative">
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
                  className="text-center fixed top-6 lg:top-8 z-10 g-12 flex flex-col max-w-[90%] 4k:gap-16! 4k:top-32!"
                >
                  <h1 className="max-[380px]:text-4xl font-title min-[380px]:text-5xl md:text-6xl lg:text-8xl 4k:text-9xl! text-neutral-800">
                    {t.Home.title}
                  </h1>
                  <h2 className="text-base lg:text-xl mt-4 text-neutral-800 2xl:text-2xl 4k:text-4xl!">
                    {textsHero.subtitle}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WRAPPER de la imagen */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center overflow-hidden`}
            >
              <motion.div
                style={{
                  width,
                  height,
                }}
                className={` relative overflow-hidden saturate-120 rounded-2xl
      `}
                data-is-dark="true"
              >
                <MotionImage
                  style={{
                    y: moveY,
                    scale: scaleImgHero,
                  }}
                  src={imgPortada}
                  fill
                  sizes="100vw"
                  priority
                  quality={75}
                  fetchPriority="high"
                  placeholder="blur"
                  alt={textsHero.image_alt}
                  className="object-cover object-center "
                />
              </motion.div>
            </div>
            <AnimatePresence>
              {showText && (
                <motion.div
                  className="fixed max-[379px]:bottom-14 min-[380px]:bottom-24  md:bottom-32 lg:bottom-24 2xl:bottom-30 flex flex-col items-center justify-center gap-4 lg:gap-6 2xl:gap-12 max-w-[90%]"
                  variants={headerVariants}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  initial="init"
                  animate="open"
                  exit={showText ? "closed" : "open"}
                >
                  <h2 className="relative text-sm text-center lg:text-xl 2xl:text-xl text-neutral-800 4k:text-2xl">
                    {textsHero.location_info}
                  </h2>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-3xl text-neutral-800 left-1/2 -translate-x-1/2 absolute animate-buble transition-all duration-100"
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
