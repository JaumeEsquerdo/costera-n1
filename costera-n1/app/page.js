"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowSize } from "./hooks/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();
  const { scrollYProgress } = useScroll();
  const [showText, setShowText] = useState(true); // estado para render condicional

  // Suscribirse solo a scrollYProgress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setShowText(v < 0.2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const headerVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
  // Animar width/height
  const width = useTransform(scrollYProgress, [0, 1], [200, windowSize.width]);
  const height = useTransform(
    scrollYProgress,
    [0, 1],
    [400, windowSize.height],
  );
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);

  return (
    <main className="">
      <div className="h-[200vh] relative">
        <motion.header className="h-screen sticky top-0 flex flex-col justify-between items-center overflow-x-hidden">
          <AnimatePresence>
            {/* Texto solo visible al inicio */}
            {showText && (
              <motion.div
                variants={headerVariants}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                initial="open"
                exit="closed"
                className="text-center fixed top-0 z-10"
              >
                <h1 className="font-title text-9xl">COSTERA n1</h1>
                <h2 className="text-xl mt-4">
                  Apartamento vacacional en el Casco Antiguo de Villajoyosa
                </h2>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WRAPPER de la imagen */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center overflow-hidden`}
          >
            <motion.div
              style={{ width, height, borderRadius }}
              className=" overflow-hidden"
            >
              <Image
                src="/hotel-fachada.webp"
                width={200}
                height={400}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
          <AnimatePresence>
            {showText && (
              <motion.div
                className="fixed bottom-20 flex flex-col items-center"
                variants={headerVariants}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                initial="open"
                exit={showText ? "closed" : "open"}
              >
                <h2 className="text-lg">
                  Dentro del recinto amurallado y a un paso de la Playa Centro
                </h2>
                <p className="text-4xl">⬇</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </main>
  );
}
