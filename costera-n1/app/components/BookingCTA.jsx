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
        <motion.p variants={itemsVariants} className="text-center lg:max-w-2/3">
          {textsBookingCta.description}
        </motion.p>
        <motion.a
          variants={itemsVariants}
          className="border-2 border-green-950 bg-green-50 rounded-4xl cursor-pointer w-fit py-2 px-6 shadow-[4px_4px_0px_0px_rgba(5,46,7,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 hover:bg-green-100 transition-all flex items-center gap-2"
        >
          {" "}
          {textsBookingCta.button}
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="w-4 h-4 lg:w-6 lg:h-6 shrink-0"
          />
        </motion.a>
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
};
