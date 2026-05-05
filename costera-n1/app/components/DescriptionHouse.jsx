import { useI18n } from "../hooks/usei18n";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const DescriptionHouse = () => {
  const { t } = useI18n();

  const textsDescriptionHouse = t.Home.DescriptionHouse;

  return (
    <section className="h-screen flex flex-col gap-4 lg:gap-10 justify-center items-center p-8 lg:pt-26">
      {/* <motion.h3
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 text-center"
      >
        {textsDescriptionHouse.title}
      </motion.h3> */}
      <h2 className="sr-only">Detalles y ubicación de Costereta n1</h2>

      {/* <motion.p
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: textsDescriptionHouse.p1 }}
        /> */}
      {Object.entries(textsDescriptionHouse).map(([key, value]) => (
        <motion.div
          key={key}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }} //amount para: 0.2, en cuanto asome un 20% del contenedor, se hace la anim.
          className="flex flex-col z-10 lg:flex-row lg:items-end gap-2 lg:gap-4 w-full lg:max-w-9/10 [@media(max-height:720px)]:text-sm white-space: nowrap;
"
        >
          <motion.h3
            className="font-title text-2xl lg:text-5xl"
            variants={itemVariants}
          >
            {value.title}
          </motion.h3>
          <motion.p
            className="text-lg lg:text-2xl font-subtitle italic"
            variants={itemVariants}
          >
            {value.subtitle.toLowerCase()}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
};
