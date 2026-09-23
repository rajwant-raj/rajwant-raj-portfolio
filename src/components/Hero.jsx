import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-500"
          >
            AI/ML Engineer • Full-Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-8xl"
          >
            Hi, I'm
            <span className="block text-gray-400">
              Rajwant Raj.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
          >
            I build intelligent applications that combine
            artificial intelligence, machine learning and
            modern web technologies to solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/rajwant-raj"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition hover:text-white"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-600 md:block"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;