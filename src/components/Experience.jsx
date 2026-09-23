import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
          04 / Experience
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          My journey so far.
        </h2>

        <div className="mt-14">
          {experience.map((item, index) => (
            <div
              key={`${item.company}-${item.title}`}
              className={`grid gap-4 py-8 md:grid-cols-[150px_1fr] ${
                index !== experience.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <p className="text-sm text-gray-600">
                {item.period}
              </p>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-400">
                  {item.company}
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;