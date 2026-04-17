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

  const textsHeader = t.Header;

  const [langIsOpen, setLangIsOpen] = useState(false);

  const handleLangOpen = () => {
    setLangIsOpen((prev) => !prev);
  };

  const cleanPath = pathname.replace(/\/$/, "");

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
              whileHover={
                pathname === `/${locale}` || pathname === `/${locale}/`
                  ? undefined
                  : "hover"
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`flex flex-col items-center gap-2 cursor-pointer`}
            >
              <NavElement
                href="/"
                active={cleanPath === `/${locale}`}
                className="mt-1"
              >
                {textsHeader.inicio}
              </NavElement>
              {cleanPath !== `/${locale}` && (
                <NavElement
                  href="/"
                  active={
                    pathname === `/${locale}` || pathname === `/${locale}/`
                  }
                >
                  {textsHeader.inicio}
                </NavElement>
              )}
            </motion.div>
          </li>

          <li className="h-8 overflow-hidden">
            <motion.div
              variants={variantsLink}
              initial="initial"
              whileHover={
                cleanPath.startsWith(`/${locale}/detalles`)
                  ? undefined
                  : "hover"
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col  items-center gap-2 cursor-pointer"
            >
              <NavElement
                href="/detalles"
                active={cleanPath.startsWith(`/${locale}/detalles`)}
                className="mt-1"
              >
                {textsHeader.detalles}
              </NavElement>
              {!cleanPath.startsWith(`/${locale}/detalles`) && (
                <NavElement
                  href="/detalles"
                  active={cleanPath.startsWith(`/${locale}/detalles`)}
                >
                  {textsHeader.detalles}
                </NavElement>
              )}
            </motion.div>
          </li>
          <li className="h-8 overflow-hidden">
            <motion.div
              variants={variantsLink}
              initial="initial"
              whileHover={
                cleanPath.startsWith(`/${locale}/contacto`)
                  ? undefined
                  : "hover"
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col  items-center gap-2 "
            >
              <NavElement
                href="/contacto"
                active={cleanPath.startsWith(`/${locale}/contacto`)}
                className="mt-1"
              >
                {textsHeader.contacto}
              </NavElement>
              {!cleanPath.startsWith(`/${locale}/contacto`) && (
                <NavElement
                  href="/contacto"
                  active={cleanPath.startsWith(`/${locale}/contacto`)}
                >
                  {textsHeader.contacto}
                </NavElement>
              )}
            </motion.div>
          </li>
          <li className="h-8 overflow-hidden">
            <motion.div className="flex flex-col  items-center gap-2 cursor-pointer">
              <NavElement
                onClick={handleLangOpen}
                as="button"
                className={`ring-2 mt-1 rounded-full hover:bg-green-100 ${langIsOpen ? "bg-green-100" : ""} transition-colors duration-200`}
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
