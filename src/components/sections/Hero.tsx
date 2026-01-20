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
      <p className="text-zinc-500 font-mono text-sm mb-4">
        Full-Stack Developer
      </p>

      <h1 className="text-6xl font-light mb-6">
        Samarth Pawar
      </h1>

      <p className="text-zinc-400 text-xl mb-12 max-w-2xl">
        Building smooth, animated & scalable web applications.
      </p>

      <div className="flex gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/brave98git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm hover:text-zinc-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="font-mono">GitHub</span>
          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/samarth-pawar-460a762a9"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm hover:text-zinc-400 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span className="font-mono">LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Email */}
        <a
          href="mailto:samarthbhagwanpawar098@gmail.com"
          className="group flex items-center gap-2 text-sm hover:text-zinc-400 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="font-mono">Email</span>
          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  </section>
);
