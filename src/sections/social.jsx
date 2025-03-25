import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../locale/LanguageContext";

export default function Social() {
  const { language, translations } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center flex-col items-center pt-[240px] pb-[100px]"
      id="contact"
    >
      <h3 className="text-3xl font-bold font-['Kode_Mono','Vazirmatn']">
        {translations[language].social_media}
      </h3>
      <div className="flex mt-10 justify-between">
        <div>
          <a
            href="https://www.instagram.com/erfan_nsb"
            className="mx-5 flex flex-col items-center cursor-pointer hover:scale-[1.05] transition"
          >
            <img
              src="Icons/instagram.png"
              alt="Instagram"
              className="w-15 aspect-auto mb-2 "
            />
            <h5>Instagram</h5>
          </a>
        </div>
        <div>
          <a
            href="ttps://t.me/erfannsb"
            className="mx-5 flex flex-col items-center cursor-pointer hover:scale-[1.05] transition"
          >
            <img
              src="Icons/telegram.png"
              alt="Telegram"
              className="w-15 aspect-auto mb-2"
            />
            <h5>Telegram</h5>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/erfannsb"
            className="mx-5 flex flex-col items-center cursor-pointer hover:scale-[1.05] transition"
          >
            <img
              src="Icons/github.png"
              alt="Github"
              className="w-15 aspect-auto mb-2"
            />
            <h5>Github</h5>
          </a>
        </div>
        <div>
          <a
            href="mailto:erfannsb@gmail.com"
            className="mx-5 flex flex-col items-center cursor-pointer hover:scale-[1.05] transition"
          >
            <img
              src="Icons/gmail.png"
              alt="Gmail"
              className="w-15 aspect-auto mb-2"
            />
            <h5>Gmail</h5>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
