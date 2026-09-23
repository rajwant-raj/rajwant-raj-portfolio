import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-16">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            06 / Contact
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Let's build something
            <span className="text-gray-500"> meaningful.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            I'm open to internships, collaborations, interesting
            projects and opportunities where I can learn and
            contribute.
          </p>

          <a
            href="mailto:rajwantraj667@example.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            <Mail size={18} />
            Get in touch
            <ArrowUpRight size={17} />
          </a>

          <div className="mt-10 flex gap-5">
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

      </div>
    </section>
  );
}

export default Contact;