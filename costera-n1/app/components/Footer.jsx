"use client";
import { useI18n } from "../hooks/usei18n";
import { motion } from "framer-motion";

export const Footer = ({
  bgColor = "bg-green-950",
  textColor = "text-white",
}) => {
  const { t } = useI18n();

  const textsFooter = t.Footer;

  return (
    <footer
      className={`relative h-[60vh] ${bgColor} w-full`}
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100% , 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+60vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-40vh)] h-[40vh] flex flex-col items-center">
          <div className="flex flex-col w-full overflow-hidden justify-center items-center">
            <div className="flex flex-col w-fit justify-center items-start lg:items-center gap-4 lg:gap-8">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <motion.span
                  initial={{ x: -200 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ amount: 0.2 }}
                  className={`text-5xl lg:text-9xl ${textColor} inline-block font-bold`}
                >
                  {textsFooter.title["title-1"]}{" "}
                </motion.span>
                <motion.span
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ amount: 0.2 }}
                  className={`inline-block text-5xl lg:text-9xl font-bold ${textColor}`}
                >
                  {textsFooter.title["title-2"]}
                </motion.span>
              </div>
              <p className={`text-left lg:text-center ${textColor}`}>
                {textsFooter.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
