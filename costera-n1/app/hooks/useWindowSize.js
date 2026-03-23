import { useState, useEffect } from "react";

// Hook para obtener el tamaño de la ventana (width y height)
export function useWindowSize() {
  // Estado con lazy initialization:
  // - Solo se ejecuta una vez al montar
  // - Evita errores en SSR (Next.js) porque window no existe en servidor
  const [size, setSize] = useState(() => {
    if (typeof window !== "undefined") {
      return { width: window.innerWidth, height: window.innerHeight };
    }

    // Fallback para SSR (antes de que cargue en cliente)
    return { width: 300, height: 400 };
  });

  useEffect(() => {
    // Función que actualiza el estado cuando cambia el tamaño
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Devolvemos width y height actuales
  return size;
}
