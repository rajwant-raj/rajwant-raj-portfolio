import { GraduationCap, Code2, Brain } from "lucide-react";

function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
          01 / About
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Building with curiosity,
              <span className="text-gray-500"> learning by doing.</span>
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-400">
              I'm a Computer Science and Engineering student interested
              in Artificial Intelligence, Machine Learning and Full-Stack
              Development.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My approach is simple: learn the fundamentals, build
              practical projects and continuously improve through
              real-world problems and hackathons.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <GraduationCap className="mb-5 text-gray-400" size={28} />
            <h3 className="font-semibold">Computer Science</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              B.Tech CSE student at Uttaranchal University.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Brain className="mb-5 text-gray-400" size={28} />
            <h3 className="font-semibold">AI & Machine Learning</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Building practical ML applications and prediction systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Code2 className="mb-5 text-gray-400" size={28} />
            <h3 className="font-semibold">Development</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Creating modern web applications with React and backend
              technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;