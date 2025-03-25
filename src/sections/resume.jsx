import Svg from "./../../public/Star.svg";
import { motion, useInView } from "framer-motion";
import Item from "./item";
import { useEffect, useRef, useState } from "react";
import enSkills from "./../data/skills_en.json";
import deSkills from "./../data/skills_de.json";
import faSkills from "./../data/skills_fa.json";
import { useLanguage } from "../locale/LanguageContext";
export default function Resume() {
  const { language, translations } = useLanguage();
  const [Skills, setSkills] = useState(enSkills);

  useEffect(() => {
    if (language == "en") {
      setSkills(enSkills);
    } else if (language == "fa") {
      setSkills(faSkills);
    } else {
      setSkills(deSkills);
    }
  }, [language]);

  return (
    <div className="w-full mx-auto pt-[20px]" id="resume">
      {Skills.map((e, index) => {
        const ref = useRef(null); // Create a new ref for each h3
        const isInView = useInView(ref, { once: true });

        return (
          <div key={index}>
            <motion.h3
              ref={ref}
              initial={{ opacity: 0, y: 50 }} // Start off-screen
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-['Kode_Mono','Vazirmatn'] font-bold text-3xl flex text-[#D9D9D9] mb-12 mt-30"
            >
              <img src={Svg} className="w-6 aspect-auto mr-2" /> {e.name}
            </motion.h3>
            {e.items.map((f, i) => (
              <Item key={i} name={f.name} skill={f.skill} icon={f.icon} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
