import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Hook para manejar un estado booleano que vuelve a 'false' automáticamente.
 * @param {number} delay - Tiempo en milisegundos antes de volver a false (por defecto 3000ms).
 */

export function useTemporalState(delay = 3000) {
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  // useCallback evita que la función se recree en cada renderizado
  const activate = useCallback(() => {
    // Si ya hay un timer corriendo, lo cancelamos
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsActive(true);

    // Iniciamos el nuevo temporizador
    timerRef.current = setTimeout(() => {
      setIsActive(false);
    }, delay);
  }, [delay]);

  // Limpieza al desmontar el componente
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return [isActive, activate];
}
