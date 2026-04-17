import { useI18n } from "../hooks/usei18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export const BookingCTA = () => {
  const { t } = useI18n();

  const textsBookingCta = t.Home.BookingCTA;

  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center  p-8 pt-26">
      <h3 className="text-2xl font-bold mb-8 text-center">
        {textsBookingCta.title}
      </h3>
      <div className="flex flex-col gap-4 items-center lg:max-w-1/2">
        <p>{textsBookingCta.description}</p>
        <a className="border-2 border-green-950 bg-green-50 rounded-4xl cursor-pointer w-fit py-2 px-6 shadow-[4px_4px_0px_0px_rgba(5,46,7,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 hover:bg-green-100 transition-all flex items-center gap-2">
          {" "}
          {textsBookingCta.button}
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="w-4 h-4 lg:w-6 lg:h-6 shrink-0"
          />
        </a>
      </div>
    </section>
  );
};
