/**
 * CONFIGURACIÓN DE INTERNACIONALIZACIÓN (i18n)
 * --------------------------------------------
 * Dependencia: npm install next-i18n-router
 * * Este Middleware gestiona el enrutamiento por idioma.
 * Detecta y redirige automáticamente a los usuarios según el prefijo (/es, /en).
 * * Requisito de estructura:
 * Todas las rutas deben vivir dentro de 'app/[locale]/'.
 */

import { i18nRouter } from "next-i18n-router";

const i18nConfig = {
  locales: ["es", "en"],
  defaultLocale: "es",
  prefixDefault: true, // Mantiene el /es siempre visible, ideal para SEO
};

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// El matcher es un FILTRO: le dice al Middleware que solo actúe en las PÁGINAS.
// Ignora archivos internos de Next.js, imágenes y documentos (evita bucles y errores 404 en las fotos).
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
