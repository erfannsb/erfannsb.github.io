import { useLanguage } from "../locale/LanguageContext";
export default function Footer() {
  const { language, translations } = useLanguage();
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" relative mt-[100px]">
      <img src="footer.png" className="h-[500px] w-full relative -z-2" alt="" />
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
        className="w-full h-[300px] absolute top-[200px] -z-2"
      ></div>
      <div className="flex justify-between py-[4em] px-[2em] flex-col lg:flex-row">
        <div className="lg:basis-1/2 flex flex-col items-center lg:block">
          <h3 className="font-bold font-[montserrat] text-2xl">ERFANNSB</h3>
          <p className="max-w-[500px]">{translations[language].hero_text}</p>
        </div>
        <div className="basis-1/2 flex justify-center items-center z-10 max-lg:mt-[2em]">
          <ul className="flex text-lg font-normal cursor-pointer z-10">
            <li className="mx-5 cursor-pointer z-10">
              <a href="/">{translations[language].header_home}</a>
            </li>
            <li className="mx-5 cursor-pointer">
              <a
                href="#aboutme"
                onClick={(e) => handleSmoothScroll(e, "aboutme")}
              >
                {translations[language].header_about_me}
              </a>
            </li>
            <li className="mx-5 cursor-pointer">
              <a
                href="#resume"
                onClick={(e) => handleSmoothScroll(e, "resume")}
              >
                {translations[language].header_resume}
              </a>
            </li>
            <li className="mx-5 cursor-pointer">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                {translations[language].header_contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#333]"></div>
      <p className="text-center py-[1em] text-[#666]">
        © 2025 ERFANNSB. All Rights Reserved{" "}
      </p>
    </div>
  );
}
