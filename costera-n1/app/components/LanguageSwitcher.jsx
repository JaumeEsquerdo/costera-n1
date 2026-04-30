"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useI18n } from "../hooks/usei18n";
import { NavElement } from "./NavElement";

const variantsLanguage = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useI18n();

  const switchLanguage = (newLang) => {
    // Reemplaza el código de idioma actual (ej. /es/...) por el nuevo
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
    // router.push(newPath, { scroll: false }); // para no reiniciar scroll
  };

  return (
    <motion.div
      variants={variantsLanguage}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute top-10 right-6 lg:right-9 flex gap-2"
    >
      <NavElement
        as="div"
        noSpacing
        onClick={() => switchLanguage("es")}
        className={`cursor-pointer mx-0 px-0 ${locale === "es" ? "font-bold" : ""} ${locale === "es" ? "" : "hover:opacity-80"} transition-opacity duration-100`}
      >
        ES
      </NavElement>
      <NavElement
        as="div"
        noSpacing
        onClick={() => switchLanguage("en")}
        className={`cursor-pointer mx-0 px-0 ${locale === "en" ? "font-bold" : ""} ${locale === "en" ? "" : "hover:opacity-80"} transition-opacity duration-100`}
      >
        EN
      </NavElement>
    </motion.div>
  );
}
