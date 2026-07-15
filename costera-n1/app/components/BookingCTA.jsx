import { useI18n } from "../hooks/usei18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTemporalState } from "../hooks/useTemporalState";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemsVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const BookingCTA = () => {
  const { t } = useI18n();
  const [mostrarAviso, setMostrarAviso] = useTemporalState(3000);

  const textsBookingCta = t.Home.BookingCTA;
  const warningContact = t.Warning;

  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center  p-8 pt-10 lg:pt-26">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col justify-center gap-6 items-center"
      >
        <motion.h3
          variants={itemsVariants}
          className="text-2xl font-bold text-center 4k:text-4xl"
        >
          {textsBookingCta.title}
        </motion.h3>
        {/* <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 lg:gap-6 items-center lg:max-w-2/3"
        > */}
        <motion.p
          variants={itemsVariants}
          className="text-center lg:max-w-2/3 text-neutral-600 4k:text-xl"
        >
          {textsBookingCta.description}
        </motion.p>
        <div className="relative flex flex-col w-full items-center justify-center gap-4 lg:gap-6 lg:w-fit 4k:gap-8">
          <motion.a
            onClick={setMostrarAviso}
            variants={itemsVariants}
            className="
          cursor-pointer 
          border-2 border-yellow-950/40
          bg-yellow-50
          text-neutral-800
          rounded-4xl
          overflow-hidden
          shadow-sm
          hover:shadow-md
          hover:scale-95
          will-change-transform
          transition-all duration-200
          active:scale-90
          flex items-center
          gap-4
          px-6
          py-2
          4k:text-2xl
          "
          >
            <span className="text-neutral-800">{textsBookingCta.button}</span>

            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="text-neutral-800 inline-block w-4 h-4 lg:w-5 lg:h-5"
            />
          </motion.a>

          {mostrarAviso && (
            <div className="absolute -top-26 md:-top-40 z-20 bg-gray-200 border-2 py-2 px-4 md:py-4 md:px-8 rounded-2xl max-w-[45ch] w-full mx-4 text-center font-medium">
              {warningContact.description}
            </div>
          )}
        </div>
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
};
