import { useScroll, motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { Navigation } from "../components/layout/Navigation";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Learning from "../components/sections/Learning";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const activeSection = useActiveSection();

  return (
    <div className="bg-[#fafafa] text-zinc-900 dark:bg-black dark:text-white min-h-screen selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 dark:bg-zinc-300 origin-left z-50 transition-colors duration-300"
        style={{ scaleX: scrollYProgress }}
      />
      <Navigation active={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
