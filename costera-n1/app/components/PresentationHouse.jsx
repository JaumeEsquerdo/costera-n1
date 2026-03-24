"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useScroll } from "framer-motion";
import { ParallaxImage } from "./ParallaxImage";

export const PresentationHouse = () => {
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
      alt: "Fachada",

      top: "29%",
      left: "20%",
    },
    {
      id: 2,
      src: "/hotel-fachada.webp",
      alt: "Vista",

      top: "10%",
      left: "55%",
    },
    {
      id: 3,
      src: "/hotel-fachada.webp",
      alt: "Detalle",

      top: "40%",
      left: "10%",
    },
    {
      id: 4,
      src: "/hotel-fachada.webp",
      alt: "Casco",

      top: "30%",
      left: "70%",
    },
    {
      id: 5,
      src: "/hotel-fachada.webp",
      alt: "Vista",

      top: "10%",
      left: "55%",
    },
    {
      id: 6,
      src: "/hotel-fachada.webp",
      alt: "Detalle",

      top: "40%",
      left: "10%",
    },
    {
      id: 7,
      src: "/hotel-fachada.webp",
      alt: "Casco",

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
      className="relative flex flex-col justify-between h-[300vh] pt-8 "
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
          <h2 className="font-title text-5xl lg:text-7xl text-center">
            COSTERETA n1
          </h2>
        </section>
        <section className="h-1/2 bg-white lg:h-screen lg:w-1/2">
          <div className="max-w-[90%] mx-auto h-full pt-4 pb-4 flex flex-col items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className={`relative h-10 w-6 cursor-pointer`}
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
            </div>
            <Image src={imageRendered} width={300} height={550} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};
