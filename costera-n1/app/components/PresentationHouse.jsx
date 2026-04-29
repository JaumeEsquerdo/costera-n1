"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { delay, easeOut, useScroll } from "framer-motion";
import { ParallaxImage } from "./ParallaxImage";
// import Link from "next/link";
import { useI18n } from "../hooks/usei18n";
import { motion } from "framer-motion";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.6, ease: easeOut },
  },
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.8,
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const PresentationHouse = () => {
  const { t } = useI18n();

  const texts = t.Home.PresentationHouse;

  const ref = useRef(null);
  const [imageRendered, setImageRendered] = useState("/hotel-fachada.webp");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const handleMainImg = (src) => {
    setImageRendered(src);
  };

  const images = [
    {
      id: 1,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.fachada,

      top: "29%",
      left: "20%",
    },
    {
      id: 2,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.vista,

      top: "10%",
      left: "55%",
    },
    {
      id: 3,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.detalle,

      top: "40%",
      left: "10%",
    },
    {
      id: 4,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.casco,

      top: "30%",
      left: "70%",
    },
    {
      id: 5,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.vista,

      top: "10%",
      left: "55%",
    },
    {
      id: 6,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.detalle,

      top: "40%",
      left: "10%",
    },
    {
      id: 7,
      src: "/hotel-fachada.webp",
      alt: texts.imageAlts.casco,

      top: "30%",
      left: "70%",
    },
  ];
  // const totalImages = images.length;

  // const sm = useTransform(scrollYProgress, [Math.min(0.2 * i), 1], [0, -50]);
  // const md = useTransform(scrollYProgress, [Math.min(0.2 * i), 1], [0, -150]);
  // const lg = useTransform(scrollYProgress, [Math.min(0.2 * i), 1], [0, -250]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-between h-[400vh] pt-8 "
    >
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {images.map((img, i) => (
          <ParallaxImage
            key={img.id}
            img={img}
            i={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      <div className="sticky top-0 h-screen  flex flex-col lg:flex-row">
        <section className="flex flex-col flex-1 max-w-[90%] justify-end pb-4 mx-auto">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="font-title text-5xl lg:text-7xl text-center text-green-950"
          >
            {texts.title.split(" ").map((word, wordIndex) => (
              // cada palabra en un span y después se mapea cada span por letra
              <span key={wordIndex} className="whitespace-nowrap mr-6">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>
        </section>
        <section className="h-2/3 bg-white lg:h-screen lg:w-1/2">
          <div className="max-w-[90%] mx-auto h-full pt-4 pb-4 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-4 lg:gap-8">
              <motion.h3
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.9 }}
                className="text-lg text-center"
              >
                {texts.subtitle}
              </motion.h3>
              <div className="flex flex-wrap items-center gap-4">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className={`relative h-10 w-6 cursor-pointer lg:w-12 lg:h-20`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      onClick={() => handleMainImg(img.src)}
                      className={`object-cover object-center  hover:opacity-90 `}
                    />
                    {img.src === imageRendered && (
                      <div className="absolute inset-0 bg-green-700/60 z-10" />
                    )}
                  </div>
                ))}
                <Link
                  href="/detalles"
                  className="hover:opacity-60 transition-opacity text-green-950 duration-100 w-fit h-fit text-center"
                >
                  (+)
                </Link>
              </div>
              {/* <Link
                href={"/detalles"}
                className="border-2 text-sm border-green-950 bg-green-50 rounded-4xl cursor-pointer w-fit py-1 px-3 lg:py-2 lg:px-6 shadow-[4px_4px_0px_0px_rgba(5,46,7,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 hover:bg-green-100 transition-all"
              >
                {" "}
                {texts.viewmore}
              </Link> */}
            </div>
            <div className="relative overflow-hidden max-w-[80vw] lg:max-w-[40vw] w-260 aspect-video">
              <Image
                src={imageRendered}
                fill
                priority
                alt={texts.mainImageAlt}
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
