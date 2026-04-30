export function formatText(text) {
  if (!text) return null;

  // Divide el texto manteniendo los segmentos **en negrita**
  // (la regex los captura) para poder reemplazarlos por <strong>
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
