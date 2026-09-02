import { motion } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";

const sections = [
  { id: "hero", label: "hero" },
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "learning", label: "learning" },
  { id: "contact", label: "contact" },
];

export const Navigation = ({ active }: { active: string }) => (
  <>
    {/* Mobile Theme Toggle Button */}
    <div className="fixed top-6 right-6 z-50 md:hidden">
      <ThemeToggle />
    </div>

    {/* Desktop Navigation */}
    <nav className="fixed top-0 right-0 p-8 z-40 hidden md:flex flex-col items-end gap-6">
      <ThemeToggle />
      <motion.div className="flex uppercase flex-col font-bold gap-4 text-xs font-mono tracking-wider items-end">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition-colors ${
              active === id
                ? "text-zinc-900 dark:text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-800 dark:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            {label}
          </a>
        ))}
      </motion.div>
    </nav>
  </>
);
