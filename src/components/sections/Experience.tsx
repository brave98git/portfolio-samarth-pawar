import { motion } from "framer-motion";
import { Briefcase, Calendar, Terminal } from "lucide-react";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm mb-8">02 — Experience</p>

          <h2 className="text-4xl md:text-5xl font-light mb-16 text-zinc-900 dark:text-white">
            Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 bg-white/70 hover:border-zinc-300 dark:border-zinc-900 dark:bg-zinc-950/40 dark:hover:border-zinc-800 rounded-lg p-8 md:p-10 transition relative shadow-sm dark:shadow-none"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-zinc-200 dark:border-zinc-900 pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 rounded bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                        <Briefcase className="w-5 h-5" />
                      </span>
                      <h3 className="text-2xl font-light text-zinc-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">
                      {exp.company} <span className="text-zinc-400 dark:text-zinc-600">·</span>{" "}
                      <span className="text-zinc-500">{exp.type}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-base mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs uppercase font-mono tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" /> Key Contributions & Engineering Scope
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-zinc-400 dark:text-zinc-600 mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-900/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-zinc-700 bg-zinc-100 border border-zinc-200 dark:text-zinc-400 dark:bg-zinc-900/80 dark:border-zinc-800/80 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
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

export default Experience;
