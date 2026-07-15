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
import { useTemporalState } from "@/app/hooks/useTemporalState";

export default function Contacto() {
  const { t } = useI18n();

  const [mostrarAviso, setMostrarAviso] = useTemporalState(3000);

  const textsContact = t.Contact;

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen lg:h-screen w-[90%] max-w-400 4k:max-w-500 mx-auto ">
        <div className="pt-40 lg:w-full  lg:flex lg:h-[30vh] lg:pt-0 lg:items-end">
          <motion.h1
            initial={{ opacity: 0, y: -40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl font-title text-left w-full lg:text-start text-neutral-800 4k:text-6xl"
          >
            {textsContact.title}
          </motion.h1>
        </div>
        <div className="py-8 lg:py-12 flex flex-col gap-12 lg:flex-row 4k:h-300 4k:max-h-[40%] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="w-full flex flex-col items-start justify-end"
          >
            <div className="relative w-90 max-w-[90%] h-60 overflow-hidden md:h-120  md:w-full lg:h-full lg:max-h-200 lg:max-w-160 4k:max-w-260 4k:max-h-300 rounded-2xl">
              <Image
                src={vistasMar}
                placeholder="blur"
                fill
                priority
                alt={textsContact.imageAlt}
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col gap-12 w-full lg:max-w-1/2 4k:h-full "
          >
            <p className="text-neutral-600">{textsContact.description}</p>
            <div className="flex flex-col w-full gap-2 lg:flex-row lg:items-center lg:justify-between 4k:h-full 4k:gap-12 ">
              <div className="relative flex flex-col w-full items-center justify-center gap-4 lg:gap-6 lg:w-fit 4k:gap-8">
                <a
                  onClick={setMostrarAviso}
                  className=" cursor-pointer 
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
    4k:text-2xl
    "
                >
                  <span className="  text-neutral-800 inline-block text-nowrap">
                    {textsContact.cta}
                  </span>

                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className=" text-neutral-800 inline-block w-4 h-4 lg:w-5 lg:h-5"
                  />
                </a>

                {mostrarAviso && (
                  <div className="absolute -top-26 z-20 bg-gray-200 border-2 py-2 px-4 md:py-4 md:px-8 rounded-2xl max-w-[45ch] mx-4 text-center font-medium">
                    ¡Actualmente no estamos prestando el servicio, estate atento
                    a nuevas actualizaciones!
                  </div>
                )}
                <p className="text-[0.8rem] text- text-center text-neutral-600">
                  {textsContact.note}
                </p>
              </div>
              <div className="hidden lg:inline-block relative lg:min-w-65 lg:min-h-100 rounded-2xl overflow-hidden 4k:w-full! 4k:h-full!">
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
