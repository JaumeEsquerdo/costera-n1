import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Header = ({ showText }) => {
  const pathname = usePathname();

  const linkClass = (path) => (pathname === path ? "font-bold underline" : "");

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
                  className="flex flex-col"
                >
                  <Link href="/" className={linkClass("/")}>
                    Inicio
                  </Link>
                  <Link href="/" className={linkClass("/")}>
                    Inicio
                  </Link>
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
                  <Link href="/detalles" className={linkClass("/detalles")}>
                    Detalles
                  </Link>
                  <Link href="/detalles" className={linkClass("/detalles")}>
                    Detalles
                  </Link>
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
                  <Link href="/contacto" className={linkClass("/contacto")}>
                    Contacto
                  </Link>
                  <Link href="/contacto" className={linkClass("/contacto")}>
                    Contacto
                  </Link>
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
                  <p>Idioma</p>
                  <p>Idioma</p>
                </motion.div>
              </li>
            </ul>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};
