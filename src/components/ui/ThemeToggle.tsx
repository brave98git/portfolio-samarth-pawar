import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="group font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors cursor-pointer flex items-center select-none py-1"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5"
      >
        <span className="text-zinc-400 dark:text-zinc-600 font-light">[</span>
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
          {theme === "dark" ? "light" : "dark"}
        </span>
        <span className="text-zinc-400 dark:text-zinc-600 font-light">]</span>
      </motion.span>
    </button>
  );
};
