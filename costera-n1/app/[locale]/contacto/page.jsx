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
        <div className="pt-40 lg:w-full lg:flex-1 lg:flex lg:items-end">
          <h1 className="text-4xl font-title text-center w-full  lg:text-start ">
            {textsContact.title}
          </h1>
        </div>
        <div className="mt-auto py-8 flex flex-col gap-12 lg:flex-1 lg:mt-0 lg:flex-row">
          <div className="w-full flex flex-col items-center lg:items-start justify-end">
            <div className="relative w-90 max-w-[90%] h-60 overflow-hidden lg:h-full lg:max-h-200 lg:w-full lg:max-w-160">
              <Image
                src="/hotel-fachada.webp"
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
                <a className="border-2 border-green-950 bg-green-50 rounded-4xl cursor-pointer w-fit py-2 px-6 shadow-[4px_4px_0px_0px_rgba(5,46,7,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 hover:bg-green-100 transition-all flex items-center gap-2">
                  {" "}
                  {textsContact.cta}
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="w-4 h-4 lg:w-6 lg:h-6 shrink-0"
                  />
                </a>
                <p className="text-sm text-center">{textsContact.note}</p>
              </div>
              <div className="hidden lg:inline relative  lg:w-65 lg:h-100 overflow-hidden">
                <Image
                  src="/hotel-fachada.webp"
                  fill
                  priority
                  alt={textsContact.imageAlt}
                  className="object-cover"
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
