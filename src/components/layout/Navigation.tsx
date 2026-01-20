import { motion } from "framer-motion";

const sections = ["hero", "about", "skills", "projects", "contact"];

export const Navigation = ({ active }: { active: string }) => (
  <nav className="fixed top-0 right-0 p-8 z-40 hidden md:block">
    <motion.div className="flex uppercase flex-col font-bold gap-4 text-sm font-mono ">
      {sections.map((s) => (
        <a
          key={s}
          href={`#${s}`}
          className={active === s ? "text-white" : "text-zinc-600 hover:text-white"}
        >
          {s}
        </a>
      ))}
    </motion.div>
  </nav>
);
