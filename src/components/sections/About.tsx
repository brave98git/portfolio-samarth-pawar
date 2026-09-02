import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm mb-8">01 — About</p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-zinc-900 dark:text-white">
                Engineering across the stack
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                I’m a full-stack developer and Computer Engineering student with experience building web applications and working with Linux-based software systems.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                I enjoy working across the entire lifecycle — from crafting fluid, interactive frontend experiences and architecting robust backend APIs to databases, offline deployments, and system-level tooling.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l border-zinc-300 dark:border-zinc-800 pl-6">
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-600 mb-2">Focus Areas</p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-400 text-sm">
                  <li>• Full-Stack Architecture (React, Next.js, Node.js, TypeScript)</li>
                  <li>• Linux Systems, Bash & Service Management</li>
                  <li>• API & Backend Engineering (ElysiaJS, Bun, REST, Databases)</li>
                  <li>• Motion-First & Performance-Driven UI</li>
                </ul>
              </div>

              <div className="border-l border-zinc-300 dark:border-zinc-800 pl-6">
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-600 mb-2">Status & Focus</p>
                <p className="text-zinc-700 dark:text-zinc-400 text-sm leading-relaxed">
                  Working on software engineering & system projects while actively studying AI/ML, System Design, and OS internals.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
