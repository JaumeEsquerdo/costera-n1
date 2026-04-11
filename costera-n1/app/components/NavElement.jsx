"use client";
import { useState, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

/* Componente Link / p, para cambiar de color light/dark según el fondo del contenedor en el que esté */

export const NavElement = ({
  href,
  children,
  active,
  as = "link",
  className = "",
  onclick,
}) => {
  const [isOverDark, setIsOverDark] = useState(false);
  const { scrollY } = useScroll();
  const elementRef = useRef(null);

  useMotionValueEvent(scrollY, "change", () => {
    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    // Optimizamos: buscamos los elementos una sola vez por frame de scroll
    const darkElements = document.querySelectorAll('[data-is-dark="true"]');

    let collision = false;
    const checkX = rect.left + rect.width / 2;
    const checkY = rect.top + rect.height / 2;

    for (const darkEl of darkElements) {
      const darkRect = darkEl.getBoundingClientRect();
      if (
        checkX >= darkRect.left &&
        checkX <= darkRect.right &&
        checkY >= darkRect.top &&
        checkY <= darkRect.bottom
      ) {
        collision = true;
        break; // Optimizamos: si ya chocó con uno, no hace falta mirar el resto
      }
    }

    if (isOverDark !== collision) setIsOverDark(collision);
  });

  const commonProps = {
    ref: elementRef,
    className: `${isOverDark ? "text-white" : "text-black"} ${
      active ? "font-bold" : ""
    } transition-colors duration-300  px-2 mx-1 lg:mx-2 whitespace-nowrap cursor-pointer ${className}`,
  };

  // Si es "as='p'", renderiza un párrafo, si no, un Link
  if (as === "button") {
    return (
      <button onClick={onclick} {...commonProps}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} {...commonProps}>
      {children}
    </Link>
  );
};
