"use client";
import { useState, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

export const NavElement = ({ href, children, active, as = "link" }) => {
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
      active ? "font-bold underline" : ""
    } transition-colors duration-300 px-4 whitespace-nowrap`,
  };

  // Si pasas "as='p'", renderiza un párrafo, si no, un Link
  if (as === "p") {
    return <p {...commonProps}>{children}</p>;
  }

  return (
    <Link href={href} {...commonProps}>
      {children}
    </Link>
  );
};
