"use client";
import { useI18n } from "../hooks/usei18n";

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
          <div className="flex flex-col gap-4">
            <h4 className={`text-5xl lg:text-9xl ${textColor} font-bold`}>
              {textsFooter.title}
            </h4>
            <p className={`text-center ${textColor}`}>{textsFooter.subtitle}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
