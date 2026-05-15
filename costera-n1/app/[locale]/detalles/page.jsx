"use client";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "next/image";
import { useI18n } from "@/app/hooks/usei18n";
import imgPortadaDetalles from "@/public/imgs-casa/img-piso-10.webp";
import imgHabitacionDetalles from "@/public/imgs-casa/img-piso-3.webp";
import imgComedorDetalles from "@/public/imgs-casa/img-piso-14.webp";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedText } from "@/app/components/AnimatedText";

const curvePath = "M0,320 C480,160 960,160 1440,320 Z";
const flatPath = "M0,320 C480,320 960,320 1440,320 Z";

const blockTextsVariants = {
  initial: {},
  show: {
    transition: {
      staggerChildren: 1.42,
    },
  },
};

export default function Detalles() {
  const { t } = useI18n();
  const textsDetalles = t.Details;
  const mapRef = useRef(null);

  const { scrollYProgress: scrollWaveMap } = useScroll({
    target: mapRef,
    offset: ["start end", "start start"],
  });

  const smoothEntrada = useSpring(scrollWaveMap, {
    stiffness: 40, // rigidez
    damping: 40, // amortiguación (evita que rebote)
    restDelta: 0.001,
  });

  /* PARA ANIM DE LA OLA */
  const pathAnim = useTransform(
    smoothEntrada,
    [0, 0.65], // Rango del scroll (de 0% a 100% de la entrada)
    [flatPath, curvePath], // Rango de formas
  );

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen w-[90%] gap-8 lg:gap-24 max-w-400 mx-auto overflow-hidden">
        <div className="pt-40 lg:w-full flex flex-col lg:flex-row h-[50vh] lg:h-[40vh] justify-between lg:pt-0 gap-8 lg:items-end ">
          <motion.h1
            initial={{ opacity: 0, y: -40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl font-title text-left w-full lg:max-w-1/2  lg:text-start text-neutral-800 4k:text-6xl"
          >
            {textsDetalles.title}
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col w-full gap-2 lg:max-w-1/3 lg:text-start text-neutral-600 4k:text-3xl"
          >
            <li> {textsDetalles.location}</li>
            <li>{textsDetalles.street}</li>
            {textsDetalles.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={blockTextsVariants}
          initial="initial"
          animate="show"
          className="max-[380]:mt-30 min-[380]:mt-12 flex flex-col gap-4 lg:max-w-2/3 "
        >
          {textsDetalles.descriptionTexts.map((t, i) => (
            <AnimatedText key={i} text={t} />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense auto-rows-[200px]">
          <div className="lg:col-span-1 lg:row-span-3 relative overflow-hidden rounded-2xl">
            <Image
              src={imgHabitacionDetalles}
              fill
              placeholder="blur"
              priority
              alt={textsDetalles.imageAlt}
              className="object-cover"
            />
          </div>{" "}
          <div className="lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-2xl">
            <Image
              src={imgPortadaDetalles}
              fill
              placeholder="blur"
              priority
              alt={textsDetalles.imageAlt}
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-2xl">
            <Image
              src="/imgs-casa/img-piso-15.webp"
              fill
              loading="lazy"
              alt={textsDetalles.imageAlt}
              className="object-cover"
            />
          </div>
          <div className="lg:col-start-1 lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-2xl">
            <Image
              src="/imgs-casa/img-piso-20.webp"
              fill
              loading="lazy"
              alt={textsDetalles.imageAlt}
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-3 relative overflow-hidden rounded-2xl">
            <Image
              src={imgComedorDetalles}
              fill
              placeholder="blur"
              priority
              alt={textsDetalles.imageAlt}
              className="object-cover"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.6, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col gap-8 pt-10 pb-20 lg:pb-50 md:max-w-5/8 mx-auto 4k:max-w-6/8 4k:gap-20"
        >
          <h2 className="text-2xl text-neutral-800 font-semibold text-center 4k:text-6xl">
            {textsDetalles.practicalInfoTitle}
          </h2>
          <ul className="flex flex-col gap-6 4k:gap-10">
            {textsDetalles.practicalInfo.map((info, i) => (
              <li key={i} className="text-neutral-800 4k:text-2xl">
                <span className="font-semibold">{info.title}: </span>
                <span className="text-neutral-600">{info.description}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </main>
      <section
        ref={mapRef}
        className="relative bg-neutral-800 h-[70vh] lg:[80vh] flex flex-col gap-12 lg:gap-20 justify-center items-center 4k:gap-40!"
        data-is-dark="true"
      >
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-white text-2xl text-center lg:text-3xl px-4 4k:text-6xl!"
        >
          {textsDetalles.titleMap}
        </motion.h2>
        {/* FALSO TECHO ANIMADO */}
        <motion.div
          aria-label="hidden"
          style={{ y: "-100%" }}
          className="hidden absolute md:top-[0.6px] lg:top-0 left-0 w-full z-0 md:flex  4k:top-0.5!"
        >
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-42 fill-neutral-800"
          >
            <motion.path
              data-is-dark="true"
              /* M0,320: Empieza abajo a la izquierda
                C480,0 960,0 1440,320: Dibuja la curva hacia arriba (el techo de la ola)
                Z: Cierra la forma volviendo al inicio por la base
              */
              d={pathAnim}
            />
          </svg>
        </motion.div>
        <div
          style={{
            position: "relative",
            width: "100%",

            aspectRatio: "4 / 3",
          }}
          className="max-w-165 max-h-100 4k:max-w-300 4k:max-h-160"
        >
          <iframe
            src="https://www.google.com/maps?q=Carrer+de+la+Costereta+1,+La+Vila+Joiosa&hl=es&z=18&output=embed"
            style={{
              border: 0,
              borderRadius: "14px",
              width: "90%",
              height: "100%",
              margin: "0 auto",
              boxShadow: `
        0 15px 40px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(255, 255, 255, 0.2)
      `,
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Footer bgColor="bg-neutral-50" textColor="text-neutral-950" />
    </>
  );
}
