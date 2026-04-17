import { DM_Sans, Archivo_Black } from "next/font/google";
import "../globals.css";
// import SmoothScroll from "../app/components/SmoothScroll.jsx";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "COSTERETA n1",
  description:
    "Plataforma web de alto rendimiento diseñada para la promoción y captación de clientes para un alojamiento turístico en el Casco Antiguo de Villajoyosa.",
};

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
