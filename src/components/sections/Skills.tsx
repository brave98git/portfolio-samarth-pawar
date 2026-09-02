import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm mb-8">03 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-zinc-900 dark:text-white">Technical Stack</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Engineering full-stack features, dynamic interfaces, and high-performance backend microservices using TypeScript, Next.js, Bun, and ElysiaJS alongside robust Linux tooling.
          </p>

          <div className="space-y-12">
            {Object.entries(skills).map(([key, { title, icon: SectionIcon, items }]) => (
              <div key={key} className="border-b border-zinc-200 dark:border-zinc-900 pb-12 last:border-0">
                <div className="flex items-center gap-3 mb-6">
                  <SectionIcon size={18} className="text-zinc-500 dark:text-zinc-400" />
                  <h3 className="text-xl font-mono text-zinc-800 dark:text-zinc-300">{title}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="border border-zinc-200 bg-white hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-950/30 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/30 rounded-lg p-5 flex flex-col items-center justify-center text-center gap-3 transition group shadow-xs dark:shadow-none"
                    >
                      <Icon size={28} className="text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white transition-colors" />
                      <p className="text-xs font-mono text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200 transition-colors">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
