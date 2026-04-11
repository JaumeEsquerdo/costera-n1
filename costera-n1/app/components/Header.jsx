"use client";
import { usePathname, useParams } from "next/navigation";
import { motion, AnimatePresence, animate } from "framer-motion";
import { NavElement } from "./NavElement";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export const Header = ({ showText }) => {
  const pathname = usePathname();
  const { locale } = useParams();

  const [langIsOpen, setLangIsOpen] = useState(false);

  const variantsLink = {
    initial: { y: 0 },
    hover: { y: -32 },
  };

  const variantsLanguage = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleLangOpen = () => {
    setLangIsOpen((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showText && (
          <motion.header
            className="fixed top-10 left-1/2 -translate-x-1/2 z-99 lg:left-1/12 lg:translate-x-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2 }}
          >
            <ul className="relative flex gap-0 px-2 lg:gap-2 lg:px-4">
              <li className="h-8 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`flex flex-col items-center gap-2 cursor-pointer`}
                >
                  <NavElement
                    href="/"
                    active={pathname.startsWith(`/${locale}`)}
                    className="mt-1"
                  >
                    INICIO
                  </NavElement>
                  <NavElement
                    href="/"
                    active={pathname.startsWith(`/${locale}`)}
                  >
                    INICIO
                  </NavElement>
                </motion.div>
              </li>

              <li className="h-8 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col  items-center gap-2 cursor-pointer"
                >
                  <NavElement
                    href="/detalles"
                    active={pathname.startsWith(`/${locale}/detalles`)}
                    className="mt-1"
                  >
                    DETALLES
                  </NavElement>
                  <NavElement
                    href="/detalles"
                    active={pathname.startsWith(`/${locale}/detalles`)}
                  >
                    DETALLES
                  </NavElement>
                </motion.div>
              </li>
              <li className="h-8 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col  items-center gap-2 "
                >
                  <NavElement
                    href="/contacto"
                    active={pathname.startsWith(`/${locale}/contacto`)}
                    className="mt-1"
                  >
                    CONTACTO
                  </NavElement>
                  <NavElement
                    href="/contacto"
                    active={pathname.startsWith(`/${locale}/contacto`)}
                  >
                    CONTACTO
                  </NavElement>
                </motion.div>
              </li>
              <li className="h-8 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col  items-center gap-2 cursor-pointer"
                >
                  <NavElement
                    onclick={handleLangOpen}
                    as="button"
                    className="ring-2 mt-1 rounded-full"
                  >
                    IDIOMA
                  </NavElement>
                  <NavElement
                    as="button"
                    onclick={handleLangOpen}
                    className="ring-2 rounded-full"
                  >
                    IDIOMA
                  </NavElement>
                </motion.div>
              </li>
            </ul>
            <AnimatePresence>
              {langIsOpen && <LanguageSwitcher variants={variantsLanguage} />}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};
