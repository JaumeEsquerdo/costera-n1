"use client";
import Image from "next/image";
import { Header } from "./Header";
import { useState } from "react";

export const images = [
  {
    id: 1,
    src: "/hotel-fachada.webp",
    alt: "Fachada del apartamento Costera n1",
  },
  { id: 2, src: "/hotel-fachada.webp", alt: "Vista exterior del edificio" },
  {
    id: 3,
    src: "/hotel-fachada.webp",
    alt: "Detalle de la fachada en Villajoyosa",
  },
  { id: 4, src: "/hotel-fachada.webp", alt: "Apartamento en el casco antiguo" },
  { id: 5, src: "/hotel-fachada.webp", alt: "Vista desde la calle principal" },
  { id: 6, src: "/hotel-fachada.webp", alt: "Entrada del alojamiento" },
  { id: 7, src: "/hotel-fachada.webp", alt: "Fachada iluminada al atardecer" },
  {
    id: 8,
    src: "/hotel-fachada.webp",
    alt: "Detalle arquitectónico del edificio",
  },
];
export const PresentationHouse = () => {
  const [imageRendered, setImageRendered] = useState("/hotel-fachada.webp");

  const handleMainImg = (src) => {
    setImageRendered(src);
  };

  return (
    <div className="h-screen flex flex-col pt-8">
      <section className="flex flex-col flex-1 max-w-[90%] justify-between pb-4 mx-auto">
        <h2 className="font-title text-5xl lg:text-6xl">COSTERA n1</h2>
      </section>
      <section className="h-1/2 bg-white ">
        <div className="max-w-[90%] mx-auto h-full pt-4 pb-4 flex flex-col items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative h-10 w-6">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  onClick={() => handleMainImg(img.src)}
                  className={`object-cover object-center cursor-pointer hover:opacity-90`}
                />
              </div>
            ))}
          </div>
          <Image src={imageRendered} width={300} height={550} alt="" />
        </div>
      </section>
    </div>
  );
};
