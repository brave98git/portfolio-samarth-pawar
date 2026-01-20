import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
          <p className="text-zinc-500 font-mono text-sm mb-8">
            03 — Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Selected Work
          </h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group block
                  border-b border-zinc-900
                  pb-8
                  hover:border-zinc-700
                  transition
                "
              >
                <div className="flex justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-light flex items-center gap-2 group-hover:text-zinc-400 transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    <p className="text-zinc-500 text-sm my-4 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono text-zinc-600 border border-zinc-900 px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-sm font-mono text-zinc-600">
                    {project.year}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
