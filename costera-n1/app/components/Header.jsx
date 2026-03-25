import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavElement } from "./NavElement";

export const Header = ({ showText }) => {
  const pathname = usePathname();

  const variantsLink = {
    initial: { y: 0 },
    hover: { y: -25 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showText && (
          <motion.header
            className="fixed top-10 left-1/2 -translate-x-1/2 z-99"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2 }}
          >
            <ul className="flex gap-4">
              <li className="h-6 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`flex flex-col`}
                >
                  <NavElement href="/" active={pathname === "/"}>
                    INICIO
                  </NavElement>
                  <NavElement href="/" active={pathname === "/"}>
                    INICIO
                  </NavElement>
                </motion.div>
              </li>

              <li className="h-6 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  <NavElement
                    href="/detalles"
                    active={pathname === "/detalles"}
                  >
                    DETALLES
                  </NavElement>
                  <NavElement
                    href="/detalles"
                    active={pathname === "/detalles"}
                  >
                    DETALLES
                  </NavElement>
                </motion.div>
              </li>
              <li className="h-6 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  <NavElement
                    href="/contacto"
                    active={pathname === "/contacto"}
                  >
                    CONTACTO
                  </NavElement>
                  <NavElement
                    href="/contacto"
                    active={pathname === "/contacto"}
                  >
                    CONTACTO
                  </NavElement>
                </motion.div>
              </li>
              <li className="h-6 overflow-hidden">
                <motion.div
                  variants={variantsLink}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  <NavElement as="p">IDIOMA</NavElement>
                  <NavElement as="p">IDIOMA</NavElement>
                </motion.div>
              </li>
            </ul>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};
