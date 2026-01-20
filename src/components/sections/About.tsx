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
          <p className="text-zinc-500 font-mono text-sm mb-8">01 — About</p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Crafting digital experiences
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                I specialize in building interactive full-stack web applications
                with a strong focus on animations and performance. Currently
                diving deeper into system design and scalable architectures.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l border-zinc-800 pl-6">
                <p className="text-sm font-mono text-zinc-600 mb-2">Focus Areas</p>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Motion-first UI</li>
                  <li>• State management</li>
                  <li>• API & data efficiency</li>
                  <li>• Full-stack MERN</li>
                </ul>
              </div>

              <div className="border-l border-zinc-800 pl-6">
                <p className="text-sm font-mono text-zinc-600 mb-2">Currently</p>
                <p className="text-zinc-400">
                  Open to MERN projects and product-focused collaborations.
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
