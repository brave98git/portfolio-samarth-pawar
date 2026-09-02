import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Globe } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm mb-8">
            04 — Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-16 text-zinc-900 dark:text-white">
            Selected Work
          </h2>

          <div className="space-y-8">
            {projects.map((project) => {
              const isExternal = project.link.startsWith("http");

              return (
                <a
                  key={project.title}
                  href={project.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="
                    group block
                    border-b border-zinc-200 dark:border-zinc-900
                    pb-8
                    hover:border-zinc-400 dark:hover:border-zinc-700
                    transition
                  "
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-light flex items-center gap-2 text-zinc-900 group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 transition-colors">
                          {project.title}
                          {project.isPrivate ? (
                            <Lock className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors" />
                          ) : isExternal && project.link.includes("govlyx.com") ? (
                            <Globe className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 dark:text-zinc-400" />
                          )}
                        </h3>

                        {project.tag && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border transition-colors bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white font-medium">
                            {project.tag}
                          </span>
                        )}

                        {project.statusText && (
                          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 italic">
                            ({project.statusText})
                          </span>
                        )}
                      </div>

                      <p className="text-zinc-600 dark:text-zinc-400 text-sm my-4 max-w-3xl leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-zinc-600 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-900 px-3 py-1 rounded-full group-hover:border-zinc-300 dark:group-hover:border-zinc-800 transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 sm:text-right shrink-0">
                      {project.year}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
