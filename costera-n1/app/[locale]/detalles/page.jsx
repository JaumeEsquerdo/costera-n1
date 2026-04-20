"use client";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "next/image";
import { useI18n } from "@/app/hooks/usei18n";

export default function Detalles() {
  const { t } = useI18n();
  const textsDetalles = t.Contact;
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen w-[90%] gap-8 max-w-400 mx-auto ">
        <div className="pt-40 lg:w-full flex flex-col lg:flex-row h-[50vh] lg:h-[40vh] justify-between lg:pt-0 gap-8 lg:items-end">
          <h1 className="text-4xl font-title text-center w-full lg:max-w-1/2  lg:text-start">
            Detalles
          </h1>
          <ul className="flex flex-col w-full gap-2 lg:max-w-1/3 lg:text-start">
            <li>Localización: Villajoyosa, Alicante (03570)</li>
            <li>Calle: Costereta n1</li>
            <li>Piso reformado</li>
            <li>Bajada rápida a la playa centro de Villajoyosa</li>
            <li>x metros cuadrados</li>
            <li>Localizado en el casco antiguo</li>
          </ul>
        </div>
        <div className="pt:8 lg:py-8 flex flex-col-reverse gap-8 lg:max-h-200 justify-between lg:h-100 lg:flex-row">
          <div className="flex flex-col gap-8 lg:max-w-1/2">
            <p>
              Un interior pensado para el día a día. Mobiliario práctico y
              funcional en un espacio luminoso que conserva la esencia de las
              casas de pescadores, pero adaptado a las necesidades actuales del
              viajero
            </p>
          </div>

          <div className="relative w-90 max-w-[90%] h-60 overflow-hidden lg:h-full lg:max-h-100 lg:w-full lg:max-w-160">
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
          <p>
            La ubicación en la Costera garantiza una experiencia inmersiva. Es
            una zona peatonal y vibrante durante el día, pero tranquila y
            recogida al caer la noche, ideal para un descanso real.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-10 pb-20">
          <h2 className="text-2xl">Información práctica para tu estancia</h2>
          <ul className="flex flex-col gap-6 list-disc">
            <li>
              Acceso Peatonal: El apartamento se encuentra en una calle
              histórica peatonal. El acceso final es a pie, disfrutando del
              encanto del casco antiguo.
            </li>
            <li>
              Parking Público: Recomendamos estacionar en el Parking del Río
              (zona baja) o en el Parking del Centro (zona alta). Ambos se
              encuentran a unos 5-7 minutos caminando de la casa.
            </li>
            <li>
              Check-in Autónomo: (Si lo tienes, si no, pon Recepción
              Personalizada) Gestión ágil para que entres a tu ritmo.Check-in
              Autónomo: (Si lo tienes, si no, pon &quot;Recepción Personalizada
              &quot;) Gestión ágil para que entres a tu ritmo.
            </li>
            <li>
              Equipamiento Completo: Cocina con menaje, cafetera, microondas y
              kit de limpieza básico.
            </li>
            <li>
              Climatización: Aire acondicionado y calefacción para garantizar tu
              confort en cualquier época del año.
            </li>
            <li>
              Conectividad: Wi-Fi de alta velocidad incluido, ideal si necesitas
              teletrabajar entre chapuzón y chapuzón.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
