import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm mb-8">06 — Contact</p>

          <h2 className="text-5xl font-light mb-8 text-zinc-900 dark:text-white">Let’s connect</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
            Open to software engineering opportunities, full-stack collaborations, and systems work.
          </p>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:samarthbhagwanpawar098@gmail.com"
              className="group flex items-center gap-3 text-lg md:text-xl text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-800 dark:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors" />
              <span>Email</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://linkedin.com/in/samarth-pawar-460a762a9"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg md:text-xl text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-zinc-800 dark:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://github.com/brave98git"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg md:text-xl text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5 text-zinc-400 group-hover:text-zinc-800 dark:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
