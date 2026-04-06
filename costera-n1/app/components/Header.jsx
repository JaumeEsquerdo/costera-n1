"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavElement } from "./NavElement";

export const Header = ({ showText }) => {
  const pathname = usePathname();

  const variantsLink = {
    initial: { y: 0 },
    hover: { y: -32 },
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
            <ul className="flex gap-0  lg:gap-2 px-4">
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
                    active={pathname === "/"}
                    className="mt-1"
                  >
                    INICIO
                  </NavElement>
                  <NavElement href="/" active={pathname === "/"}>
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
                    active={pathname.startsWith("/detalles")}
                    className="mt-1"
                  >
                    DETALLES
                  </NavElement>
                  <NavElement
                    href="/detalles"
                    active={pathname.startsWith("/detalles")}
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
                  className="flex flex-col  items-center gap-2 cursor-pointer"
                >
                  <NavElement
                    href="/contacto"
                    active={pathname.startsWith("/contacto")}
                    className="mt-1"
                  >
                    CONTACTO
                  </NavElement>
                  <NavElement
                    href="/contacto"
                    active={pathname.startsWith("/contacto")}
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
                  <NavElement as="p" className="ring-2 mt-1  rounded-full">
                    IDIOMA
                  </NavElement>
                  <NavElement as="p" className="ring-2 rounded-full">
                    IDIOMA
                  </NavElement>
                </motion.div>
              </li>
            </ul>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};
