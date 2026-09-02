import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center px-6 md:px-12 lg:px-24"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm mb-4">
        Full-Stack Developer | Software Engineer
      </p>

      <h1 className="text-6xl md:text-7xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">
        Samarth Pawar
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
        Building responsive, animated web applications and resilient Linux-based software systems.
      </p>

      <div className="flex flex-wrap gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/brave98git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 text-sm text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white border border-zinc-300 bg-white/70 hover:border-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600 px-4 py-2.5 rounded-lg transition-all shadow-xs dark:shadow-none"
        >
          <Github className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <span className="font-mono">GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/samarth-pawar-460a762a9"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 text-sm text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white border border-zinc-300 bg-white/70 hover:border-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600 px-4 py-2.5 rounded-lg transition-all shadow-xs dark:shadow-none"
        >
          <Linkedin className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <span className="font-mono">LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Email */}
        <a
          href="mailto:samarthbhagwanpawar098@gmail.com"
          className="group flex items-center gap-2.5 text-sm text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white border border-zinc-300 bg-white/70 hover:border-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600 px-4 py-2.5 rounded-lg transition-all shadow-xs dark:shadow-none"
        >
          <Mail className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <span className="font-mono">Email</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  </section>
);
