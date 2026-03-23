"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css"; // para dar estilos base

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // velocidad/suavidad
      lerp: 0.1, // inercia
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time); // actualiza el estado del scroll (calcula scroll, lo anima)
      requestAnimationFrame(raf); // repite en el siguiente frame
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
