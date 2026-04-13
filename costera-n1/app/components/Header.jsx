"use client";
import { usePathname, useParams } from "next/navigation";
import { motion, AnimatePresence, animate } from "framer-motion";
import { NavElement } from "./NavElement";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { useI18n } from "../hooks/usei18n";

const variantsLink = {
  initial: { y: 0 },
  hover: { y: -32 },
};

export const Header = ({ showText }) => {
  const { t } = useI18n();
  const pathname = usePathname();
  const { locale } = useParams();

  const textsHeader = t.Index.header;

  const [langIsOpen, setLangIsOpen] = useState(false);

  const handleLangOpen = () => {
    setLangIsOpen((prev) => !prev);
  };

  return (
    <>
      <motion.header
        className="fixed top-10 left-1/2 -translate-x-1/2 z-99 lg:left-1/12 lg:translate-x-0"
        initial={false}
        animate={{ opacity: showText ? 0 : 1, y: showText ? -100 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
                {textsHeader.inicio}
              </NavElement>
              <NavElement href="/" active={pathname.startsWith(`/${locale}`)}>
                {textsHeader.inicio}
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
                {textsHeader.detalles}
              </NavElement>
              <NavElement
                href="/detalles"
                active={pathname.startsWith(`/${locale}/detalles`)}
              >
                {textsHeader.detalles}
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
                {textsHeader.contacto}
              </NavElement>
              <NavElement
                href="/contacto"
                active={pathname.startsWith(`/${locale}/contacto`)}
              >
                {textsHeader.contacto}
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
                onClick={handleLangOpen}
                as="button"
                className="ring-2 mt-1 rounded-full"
              >
                {textsHeader.idioma}
              </NavElement>
              <NavElement
                as="button"
                onClick={handleLangOpen}
                className="ring-2 rounded-full"
              >
                {textsHeader.idioma}
              </NavElement>
            </motion.div>
          </li>
        </ul>
        <AnimatePresence>{langIsOpen && <LanguageSwitcher />}</AnimatePresence>
      </motion.header>
    </>
  );
};
