"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang) => {
    // Reemplaza el código de idioma actual (ej. /es/...) por el nuevo
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
    // router.push(newPath, { scroll: false }); // para no reiniciar scroll
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => switchLanguage("es")}>🇪🇸 ES</button>
      <button onClick={() => switchLanguage("en")}>🇺🇸 EN</button>
    </div>
  );
}
