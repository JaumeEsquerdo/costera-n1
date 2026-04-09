import { useTransform } from "framer-motion";

export const HorizontalSection = ({
  children,
  bgColor,
  globalProgress,
  index,
}) => {
  // Dividimos el scroll total (1) entre el número de secciones (ej. 4 secciones = 0.25 cada una)
  const totalSections = 4;
  const start = index / totalSections;
  const end = (index + 1) / totalSections;

  // Creamos un progreso local [0 a 1] que solo ocurre cuando el scroll global pasa por esta sección
  const localProgress = useTransform(globalProgress, [start, end], [0, 1]);

  // Ahora sí, el paralaje xImage basado en su progreso local
  const xImage = useTransform(localProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      className={`relative w-[120vw] h-screen shrink-0 flex flex-col items-center justify-between pb-10 pt-24 pr-20 pl-10 lg:flex-row ${bgColor}`}
    >
      {typeof children === "function" ? children({ xImage }) : children}
    </div>
  );
};
