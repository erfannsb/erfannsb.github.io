import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./../locale/LanguageContext";

export default function Header() {
  const { language, translations } = useLanguage();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center py-[1em] px-[2em] fixed top-0 left-0 w-full bg-black/60 shadow-lg ring-1 ring-black/10 backdrop-blur-lg">
      <div className="font-[montserrat] font-black text-xl flex">
        <img src="Vector.png" alt="logo" className="aspect-auto w-7 mr-2" />
        ERFANNSB
      </div>
      <div className="max-md:hidden">
        <ul className="list-none flex items-center font-[Chivo_Mono] border border-gray-400 border-solid rounded-4xl px-3 py-2 font-[300] text-md pr-0">
          <li className="mx-5">
            <a href="/">{translations[language].header_home}</a>
          </li>
          <li className="mx-5">
            <a
              href="#aboutme"
              onClick={(e) => handleSmoothScroll(e, "aboutme")}
            >
              {translations[language].header_about_me}
            </a>
          </li>
          <li className="mx-5">
            <a href="#resume" onClick={(e) => handleSmoothScroll(e, "resume")}>
              {translations[language].header_resume}
            </a>
          </li>
          <li className="mx-5 bg-amber-50 text-gray-900 py-2 px-4 rounded-4xl">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              {translations[language].header_contact}
            </a>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer z-50">
        <Dropdown />
      </div>
    </header>
  );
}

function Dropdown() {
  const { language, changeLanguage, translations } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const langs = ["EN", "FA", "DE"];
  return (
    <div className="relative z-50">
      {/* Dropdown Button */}
      <button
        className="flex justify-between items-center px-4 py-2  text-white rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-3">{lang}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Dropdown Menu */}
      <motion.ul
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-0  mt-2 bg-white text-black border rounded-lg shadow-md overflow-hidden"
      >
        {langs
          .filter((e) => e != lang)
          .map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                changeLanguage(item.toLowerCase());
                setLang(item);
              }}
            >
              {item}
            </li>
          ))}
      </motion.ul>
    </div>
  );
}
