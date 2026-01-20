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
          <p className="text-zinc-500 font-mono text-sm mb-8">04 — Contact</p>

          <h2 className="text-5xl font-light mb-8">Let’s work together</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl">
            Open to new opportunities and collaborations.
          </p>

          <div className="flex flex-col gap-4">
            <a href="mailto:samarthbhagwanpawar098@gmail.com" className="flex gap-3 text-xl hover:text-zinc-400">
              <Mail /> Email <ArrowUpRight />
            </a>

            <a href="https://linkedin.com" className="flex gap-3 text-xl hover:text-zinc-400">
              <Linkedin /> LinkedIn <ArrowUpRight />
            </a>

            <a href="https://github.com/brave98git/" className="flex gap-3 text-xl hover:text-zinc-400">
              <Github /> GitHub <ArrowUpRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
