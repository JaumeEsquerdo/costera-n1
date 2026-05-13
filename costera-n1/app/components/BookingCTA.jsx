import { useI18n } from "../hooks/usei18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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

  const textsBookingCta = t.Home.BookingCTA;

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
          className="text-2xl font-bold text-center"
        >
          {textsBookingCta.title}
        </motion.h3>
        {/* <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 lg:gap-6 items-center lg:max-w-2/3"
        > */}
        <motion.p
          variants={itemsVariants}
          className="text-center lg:max-w-2/3 text-neutral-600"
        >
          {textsBookingCta.description}
        </motion.p>
        <motion.a
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
  "
        >
          <span className="text-neutral-800">{textsBookingCta.button}</span>

          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="text-neutral-800 inline-block w-4 h-4 lg:w-5 lg:h-5"
          />
        </motion.a>
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
};
