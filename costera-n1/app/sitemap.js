// // app/sitemap.js
// archivo que le genera a los buscadores (Google, Bing) un índice estructurado de todas las URLs de tu web
// export default function sitemap() {
//   const baseUrl = "https://costeretan1.com";
//   const routes = ["", "/detalles", "/contacto"];

// se utiliza un flatMap para devolver solo un array no parejas de arrays (es, en)
//   return routes.flatMap((route) => [
//     {
//       url: `${baseUrl}/es${route}`,
//       lastModified: new Date("2024-03-20"), // Pon la fecha de entrega
//       changeFrequency: "yearly", // Le decimos que casi no cambia
//       priority: route === "" ? 1 : 0.7,
//     },
//     {
//       url: `${baseUrl}/en${route}`,
//       lastModified: new Date("2024-03-20"),
//       changeFrequency: "yearly",
//       priority: route === "" ? 1 : 0.7,
//     },
//   ]);
// }
