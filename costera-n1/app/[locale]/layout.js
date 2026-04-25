import { DM_Sans, Archivo_Black } from "next/font/google";
import "../globals.css";
// import SmoothScroll from "../app/components/SmoothScroll.jsx";
import es from "@/locales/es.json";
import en from "@/locales/en.json";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

/**
 * GENERACIÓN DE METADATOS (Server Side)
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = locale === "en" ? en : es;

  const siteTitle = `${t.Home.title} | ${t.Home.hero.subtitle}`;
  const siteDescription = t.Home.DescriptionHouse.title;

  return {
    // metadataBase: new URL("https://costeretan1.com"),
    title: siteTitle,
    description: siteDescription,
    keywords:
      locale === "en"
        ? ["accommodation Villajoyosa", "old town", "Costa Blanca holiday"]
        : [
            "alojamiento Villajoyosa",
            "casco antiguo",
            "vacaciones Costa Blanca",
          ],
    alternates: {
      canonical: `https://tudominio.com/${locale}`,
      languages: {
        "es-ES": "/es",
        "en-US": "/en",
        "x-default": "/es",
      },
    },
    robots: {
      index: false, // "Sí, Google, puedes guardar esta página"
      follow: false, // "Sí, puedes seguir mis enlaces internos"
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "large", // Permite a Google mostrar fotos grandes en los resultados
        "max-snippet": -1, // Permite a Google mostrar descripciones largas
      },
    },
    // 5. Verificación (Para cuando lo subas a Search Console)
    /* Google Search Console: Subir el dominio ahí cuando esté lista (acceso a estadísticas)*/
    verification: {
      google: "google-site-verification-code",
    },
    referrer: "origin-when-cross-origin",
    // --- AÑADE ESTO PARA REDES SOCIALES ---
    // openGraph: {
    //   title: siteTitle,
    //   description: siteDescription,
    //   type: "website",
    //   locale: locale === "en" ? "en_US" : "es_ES",
    //   images: [
    //     {
    //       url: "/og-image.jpg",
    //       width: 1200,
    //       height: 630,
    //       alt: t.Home.title,
    //     },
    //   ],
    // },
    viewport: {
      themeColor: "#f0fdf4", // El color bg-green-50 del body
      width: "device-width",
      initialScale: 1,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      className={`${archivoBlack.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-green-50 font-body text-neutral-800">
        {/* <SmoothScroll> */}

        {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
