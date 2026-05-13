"use client";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "@/app/hooks/usei18n";
import vistasMar from "@/public/imgs-casa/img-piso-17.webp";
import vistasCalle from "@/public/imgs-casa/img-piso-1.webp";
import { motion } from "framer-motion";

export default function Contacto() {
  const { t } = useI18n();

  const textsContact = t.Contact;
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen lg:h-screen w-[90%] max-w-400 mx-auto ">
        <div className="pt-40 lg:w-full  lg:flex lg:h-[30vh] lg:pt-0 lg:items-end">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl font-title text-left w-full  lg:text-start text-neutral-800"
          >
            {textsContact.title}
          </motion.h1>
        </div>
        <div className="py-8 lg:py-12 flex flex-col gap-12 lg:flex-row">
          <div className="w-full flex flex-col items-start justify-end">
            <div className="relative w-90 max-w-[90%] h-60 overflow-hidden lg:h-full lg:max-h-200 lg:w-full lg:max-w-160 rounded-2xl">
              <Image
                src={vistasMar}
                placeholder="blur"
                fill
                priority
                alt={textsContact.imageAlt}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:max-w-1/2">
            <p className="text-neutral-600">{textsContact.description}</p>
            <div className="flex flex-col w-full gap-2 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col w-full items-center justify-center gap-2 lg:gap-4 lg:w-fit">
                <a
                  className="cursor-pointer 
    border-2 border-yellow-950/40
    bg-yellow-50
    text-neutral-800
    rounded-4xl
    overflow-hidden
    shadow-sm
    hover:shadow-md
    hover:scale-95
    will-change-transform
    transition-all duration-200
    active:scale-90
    flex items-center
    gap-4
    px-6
    py-2
    "
                >
                  <span className="  text-neutral-800">{textsContact.cta}</span>

                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className=" text-neutral-800 inline-block w-4 h-4 lg:w-5 lg:h-5"
                  />
                </a>
                <p className="text-sm text-center text-neutral-600">
                  {textsContact.note}
                </p>
              </div>
              <div className="hidden lg:inline relative  lg:w-65 lg:h-100 overflow-hidden rounded-2xl">
                <Image
                  src={vistasCalle}
                  placeholder="blur"
                  fill
                  priority
                  alt={textsContact.imageAlt}
                  className="object-cover object-bottom"
                  sizes="(max-width: 768px) 600px, 1200px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
