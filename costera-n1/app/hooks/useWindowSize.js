"use client";
import { useState, useEffect } from "react";

// Hook para obtener el tamaño de la ventana (width y height)
export function useWindowSize() {
  // Estado con lazy initialization:
  // - Solo se ejecuta una vez al montar
  // - Evita errores en SSR (Next.js) porque window no existe en servidor
  const [size, setSize] = useState({
    width: "35vw",
    height: "40vh",
  });

  useEffect(() => {
    // Función que actualiza el estado cuando cambia el tamaño
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Devolvemos width y height actuales
  return size;
}
