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
          className="
    group cursor-pointer inline-flex items-stretch
    border-2 border-green-950 
    bg-green-950
    text-green-50
    rounded-b-4xl
    rounded-tl-4xl
    overflow-hidden
    shadow-sm
    hover:shadow-md
    will-change-transform
    transition-all duration-200
    active:scale-95
  "
        >
          <span className="flex items-center px-6 py-2 text-green-50">
            {textsBookingCta.button}
          </span>

          <span
            className="
            
      flex items-center justify-center
      px-4
      rounded-tl-4xl
      bg-green-50
      text-green-950
      -ml-px
      transition-transform duration-200
      group-hover:translate-x-1.5
    "
          >
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="w-4 h-4 lg:w-5 lg:h-5"
            />
          </span>
        </motion.a>
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
};
