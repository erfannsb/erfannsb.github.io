import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./../locale/LanguageContext";

export default function AboutMe() {
  const { language, translations } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates once when in view
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between items-center w-full mx-auto pt-[100px] pb-[80px]"
      id="aboutme"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="basis-1/2 mr-[2em]"
      >
        <h3 className="font-['Kode_Mono','Vazirmatn'] text-3xl font-bold mb-3">
          {translations[language].about_me_title}
        </h3>
        <p className="font-['Chivo_Mono', 'Vazirmatn']">
          {translations[language].about_me}
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center items-center basis-1/2"
      >
        <img
          src="profile.png"
          alt="img"
          className="aspect-auto w-[400px] mb-[3em]"
        />
      </motion.div>
    </div>
  );
}
