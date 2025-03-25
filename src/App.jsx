import "./App.css";
import AboutMe from "./sections/aboutme";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Resume from "./sections/resume";
import Social from "./sections/social";

function App() {
  return (
    <>
      <div className="bg"></div>
      <section className="flex flex-col h-screen">
        <Header />
        <Hero />
      </section>
      <section className="2xl:w-[60%] xl:w-[70%] md:w-[80%] sm:w-[95%] mx-auto">
        <AboutMe />
        <Resume />
        <Social />
      </section>
      <Footer />
    </>
  );
}

export default App;
