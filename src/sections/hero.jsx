import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import style from "./styles/hero.module.css";
import { useLanguage } from "./../locale/LanguageContext";

export default function Hero() {
  const { language, translations } = useLanguage();

  const text = translations[language].hero_text;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [initialDelay, setInitialDelay] = useState(1000);
  const typingDelay = 100; // Adjust typing speed if needed

  // Reset when language changes
  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setInitialDelay(1000);
  }, [language]);

  // Typing effect logic
  useEffect(() => {
    setInitialDelay(index === 0 ? 1000 : typingDelay);

    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, initialDelay);

      return () => clearTimeout(typingTimeout);
    }
  }, [index, text, initialDelay]);

  return (
    <div className="grow flex justify-center items-center relative -z-1">
      <div>
        <X className="absolute bottom-[200px] left-[5%]" />
        <X className="absolute bottom-[230px] left-[5%]" />
        <X className="absolute bottom-[260px] left-[5%]" />

        <X className="absolute top-[200px] right-[5%]" />
        <X className="absolute top-[230px] right-[5%]" />
        <X className="absolute top-[260px] right-[5%]" />

        <h3 className="absolute top-[200px] left-[15%] font-[montserrat] font-[400]">
          20XX
        </h3>

        <h3 className="absolute top-[200px] right-[15%] font-[montserrat] font-[400]">
          2004
        </h3>
        <motion.img
          initial={{ opacity: 0, y: 10 }} // Starts small, rotated, and invisible
          animate={{ opacity: 1, y: 0 }} // Grows to normal size, becomes visible
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: "easeOut",
            bounce: 0.4, // Adds a little bounce effect
          }}
          src="title.png"
          alt="title"
          className="w-[80%] mx-auto select-none"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center my-10 max-w-[70%] mx-auto"
        >
          {displayedText} <span className={style.animate_blink}>|</span>
        </motion.p>
      </div>
    </div>
  );
}
