"use client";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "@/app/hooks/usei18n";

export default function Contacto() {
  const { t } = useI18n();

  const textsContact = t.Contact;
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen lg:h-screen w-[90%] max-w-400 mx-auto ">
        <div className="pt-40 lg:w-full  lg:flex lg:h-[30vh] lg:pt-0 lg:items-end">
          <h1 className="text-4xl font-title text-left w-full  lg:text-start ">
            {textsContact.title}
          </h1>
        </div>
        <div className="py-8 flex flex-col gap-12 lg:flex-row">
          <div className="w-full flex flex-col items-start justify-end">
            <div className="relative w-90 max-w-[90%] h-60 overflow-hidden lg:h-full lg:max-h-200 lg:w-full lg:max-w-160">
              <Image
                src="/imgs-casa/img-piso-17.webp"
                fill
                priority
                alt={textsContact.imageAlt}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:max-w-1/2">
            <p>{textsContact.description}</p>
            <div className="flex flex-col w-full gap-2 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col w-full items-center justify-center gap-6 lg:gap-8 lg:w-fit">
                <a
                  className="   group cursor-pointer inline-flex items-stretch
    border-2 border-green-950/40
    bg-green-950/80
    text-green-50
    rounded-b-4xl
    rounded-tl-4xl
    overflow-hidden
    shadow-sm
    hover:shadow-md
    will-change-transform
    transition-all duration-200
    active:scale-95"
                >
                  <span className="flex items-center px-6 py-2 text-green-50">
                    {textsContact.cta}
                  </span>
                  <span
                    className="
            
      flex items-center justify-center
      px-4
      rounded-tl-4xl
      bg-green-50
      text-green-950/80
      -ml-px
      transition-transform duration-200
      group-hover:translate-x-1.5
    "
                  >
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      className="w-4 h-4 lg:w-5 lg:h-5"
                    />
                  </span>
                </a>
                <p className="text-sm text-center">{textsContact.note}</p>
              </div>
              <div className="hidden lg:inline relative  lg:w-65 lg:h-100 overflow-hidden">
                <Image
                  src="/imgs-casa/img-piso-1.webp"
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
