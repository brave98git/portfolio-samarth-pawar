import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";
import { learningTopics } from "../../data/learning";

const Learning = () => {
  return (
    <section
      id="learning"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm">05 — Currently Learning</p>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400">
              <Sparkles className="w-3 h-3 text-amber-500 dark:text-amber-400" /> Active Focus
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-6 text-zinc-900 dark:text-white">
            Currently Exploring
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Actively expanding depth across intelligent systems, large-scale architectures, and low-level computer science fundamentals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {learningTopics.map((topic, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 bg-white/70 hover:border-zinc-300 dark:border-zinc-900 dark:bg-zinc-950/40 dark:hover:border-zinc-800 rounded-lg p-6 md:p-8 transition flex flex-col justify-between shadow-xs dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      {topic.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-zinc-900 dark:text-white mb-3">
                    {topic.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-900">
                  {topic.topics.map((item, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono text-zinc-700 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded"
                    >
                      {item}
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

export default Learning;
