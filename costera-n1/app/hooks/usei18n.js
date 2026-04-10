"use client";

/* imports de diccionario */
import { useParams } from "next/navigation";
import es from "../../locales/es.json";
import en from "../../locales/en.json";

export const useI18n = () => {
  const params = useParams();
  const locale = params.locale || es;

  /* seleccionar el diccionario */
  const t = locale === "en" ? en : es;
  return { locale, t };
};
