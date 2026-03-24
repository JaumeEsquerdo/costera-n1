"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css"; // para dar estilos base

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // velocidad/suavidad
      lerp: 0.1, // inercia
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.scrollTo(0, { immediate: true }); //hacer q al refreshear empiece de 0

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // orden para desactivar la memoria del navegador en el refresh
    }

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
