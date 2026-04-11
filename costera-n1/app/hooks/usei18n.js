"use client";

/** * GESTIÓN DE TRADUCCIONES con next-i18n-router
 * 1. Obtenemos el idioma actual desde la URL ([locale]).
 * 2. Seleccionamos el diccionario JSON correspondiente.
 * 3. La constante 't' contendrá los textos finales.
 */

/* imports de diccionario */
import { useParams } from "next/navigation";
import es from "../../locales/es.json";
import en from "../../locales/en.json";

export const useI18n = () => {
  const params = useParams();
  const locale = params.locale || "es";

  /* seleccionar el diccionario */
  const t = locale === "en" ? en : es;
  return { locale, t };
};
