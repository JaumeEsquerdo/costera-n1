import { Footer } from "./Footer";

export const BookingCTA = () => {
  return (
    <section className="h-screen flex flex-col p-8 pt-26">
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">
          ¿Tienes fechas para tu próxima escapada?
        </h3>
        <div className="flex flex-col gap-4 lg:max-w-1/2">
          <p>
            Costera N1 te espera en el corazón del casco antiguo. Consulta
            disponibilidad y reserva de forma segura a través de nuestro gestor
            oficial.
          </p>
          <button>CTA BOOKING</button>
        </div>
      </div>
    </section>
  );
};
