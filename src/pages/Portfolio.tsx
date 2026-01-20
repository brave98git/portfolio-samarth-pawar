import { useScroll, motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { Navigation } from "../components/layout/Navigation";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const activeSection = useActiveSection();

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-slate-300 origin-left z-50 " style={{ scaleX: scrollYProgress }} />
      <Navigation active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
