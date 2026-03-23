import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Header = ({ showText }) => {
  const pathname = usePathname();

  const linkClass = (path) => (pathname === path ? "font-bold underline" : "");

  return (
    <>
      <AnimatePresence mode="wait">
        {!showText && (
          <motion.header
            className="fixed top-10 left-1/2 -translate-x-1/2 z-99"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          >
            <ul className="flex gap-4">
              <li>
                <Link href="/" className={linkClass("/")}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/detalles" className={linkClass("/detalles")}>
                  Detalles
                </Link>
              </li>
              <li>
                <Link href="/contacto" className={linkClass("/contacto")}>
                  Contacto
                </Link>
              </li>
              <li>Idioma</li>
            </ul>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};
