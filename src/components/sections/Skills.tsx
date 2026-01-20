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
          <p className="text-zinc-500 font-mono text-sm mb-8">02 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">Tech Stack</h2>

          <div className="space-y-12">
            {Object.entries(skills).map(([key, { title, icon: SectionIcon, items }]) => (
              <div key={key} className="border-b border-zinc-900 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <SectionIcon size={18} className="text-zinc-400" />
                  <h3 className="text-xl font-mono text-zinc-400">{title}</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="border border-zinc-900 rounded-lg p-6 flex flex-col items-center gap-3 hover:border-zinc-700 transition"
                    >
                      <Icon size={32} className="text-zinc-300" />
                      <p className="text-xs text-zinc-400">{name}</p>
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
