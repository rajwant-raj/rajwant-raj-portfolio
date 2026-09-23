import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
          02 / Skills
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Tools I work with.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold">
                {skillGroup.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;