import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950/40 via-black to-cyan-950/30">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)]" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-48 w-48 rounded-full border border-white/10 border-dashed"
      />

      <div className="relative z-10 text-center">
        <span className="block text-7xl font-bold text-white/10">
          {project.number}
        </span>

        <span className="mt-2 block text-sm uppercase tracking-[0.25em] text-gray-500">
          {project.title}
        </span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
          03 / Projects
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Things I've built.
          </h2>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            A selection of projects where I applied AI,
            machine learning and full-stack development.
          </p>
        </div>

        <div className="mt-14 space-y-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20"
            >
              <div className="grid md:grid-cols-2">

                <div className="overflow-hidden">
                  <ProjectVisual project={project} />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">

                  <span className="text-sm text-indigo-300">
                    {project.number}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 leading-7 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex w-fit items-center gap-2 text-sm font-medium transition hover:text-cyan-300"
                  >
                    <ExternalLink size={16} />
                    View Project
                    <ArrowUpRight size={16} />
                  </a>

                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;