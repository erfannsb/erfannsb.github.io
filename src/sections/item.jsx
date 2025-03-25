import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../locale/LanguageContext";
export default function Item({ icon, name, skill }) {
  const { language, translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillset = ["Expert", "Competent", "Intermediate", "Beginner", "none"];
  if (!skillset.includes(skill)) {
    skill = "Expert"; // Definitely ;)
  }
  const skillColor = [
    "border-green-400",
    "border-blue-400",
    "border-yellow-400",
    "border-red-400",
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex items-center justify-between my-9"
    >
      <div className="flex items-center">
        {icon && <img src={icon} alt="" className="w-9 aspect-auto mr-4" />}
        <h3 className="font-[400] text-xl text-[#E5E5E5]">{name}</h3>
      </div>
      {skill == "none" ? (
        <></>
      ) : (
        <div className="flex items-center">
          <p className="text-[#656565] font-thin text-lg">
            {skill == "Expert" && translations[language].skill_expert}
            {skill == "Competent" && translations[language].skill_competent}
            {skill == "Intermediate" &&
              translations[language].skill_intermediate}
            {skill == "Beginner" && translations[language].skill_beginner}
          </p>
          <div
            className={
              "ml-3 rounded-full border border-solid w-6 h-6 " +
              skillColor[skillset.indexOf(skill)]
            }
          ></div>
        </div>
      )}
    </motion.div>
  );
}
