"use client";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "next/image";
import { useI18n } from "@/app/hooks/usei18n";

export default function Detalles() {
  const { t } = useI18n();
  const textsDetalles = t.Details;
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen w-[90%] gap-8 max-w-400 mx-auto ">
        <div className="pt-40 lg:w-full flex flex-col lg:flex-row h-[50vh] lg:h-[40vh] justify-between lg:pt-0 gap-8 lg:items-end">
          <h1 className="text-4xl font-title text-left w-full lg:max-w-1/2  lg:text-start">
            {textsDetalles.title}
          </h1>
          <ul className="flex flex-col w-full gap-2 lg:max-w-1/3 lg:text-start">
            <li> {textsDetalles.location}</li>
            <li>{textsDetalles.street}</li>
            {textsDetalles.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="pt:8 lg:py-8 flex flex-col-reverse gap-8 lg:max-h-200 justify-between lg:h-100 lg:flex-row">
          <div className="flex flex-col gap-8 lg:max-w-1/2">
            <p>{textsDetalles.description}</p>
          </div>

          <div className="relative w-90 max-w-[90%] h-60 overflow-hidden lg:h-full lg:max-h-100 lg:w-full lg:max-w-160">
            <Image
              src="/hotel-fachada.webp"
              fill
              priority
              alt={textsDetalles.imageAlt}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="relative w-120 max-w-[90%] h-60 overflow-hidden lg:h-100 lg:max-h-200 lg:w-full lg:max-w-140">
            <Image
              src="/hotel-fachada.webp"
              fill
              priority
              alt={""}
              className="object-cover"
            />
          </div>
          <div className="relative w-60 max-w-[90%] h-60 overflow-hidden lg:h-125 lg:max-h-200 lg:w-full lg:max-w-220">
            <Image
              src="/hotel-fachada.webp"
              fill
              priority
              alt={""}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="relative w-80 max-w-[90%] h-60 overflow-hidden lg:h-100 lg:max-h-200 lg:w-full lg:max-w-140">
            <Image
              src="/hotel-fachada.webp"
              fill
              priority
              alt={""}
              className="object-cover"
            />
          </div>
          <div className="relative w-40 max-w-[90%] h-60 overflow-hidden lg:h-125 lg:max-h-200 lg:w-full lg:max-w-120">
            <Image
              src="/hotel-fachada.webp"
              fill
              priority
              alt={""}
              className="object-cover"
            />
          </div>
          <p>{textsDetalles.locationDescription}</p>
        </div>
        <div className="flex flex-col gap-8 pt-10 pb-20">
          <h2 className="text-2xl">{textsDetalles.practicalInfoTitle}</h2>
          <ul className="flex flex-col gap-6 ">
            {textsDetalles.practicalInfo.map((info, i) => (
              <li key={i}>- {info}</li>
            ))}
          </ul>
        </div>
      </main>
      <section
        className="bg-green-950 h-[70vh] lg:[80vh] flex justify-center items-center"
        data-is-dark="true"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "660px",
            maxHeight: "400px",

            aspectRatio: "4 / 3",
          }}
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
      <Footer bgColor="bg-green-50" textColor="text-green-950" />
    </>
  );
}
