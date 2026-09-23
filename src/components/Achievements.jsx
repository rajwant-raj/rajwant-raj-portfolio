import {
  Award,
  Trophy,
  Medal,
  GraduationCap,
} from "lucide-react";

function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon",
      description:
        "Participated in the SIH journey with the SETU logistics intelligence project.",
    },
    {
      icon: Award,
      title: "Science Olympiad",
      description:
        "Secured a Gold Medal in Science Olympiad during school.",
    },
    {
      icon: Medal,
      title: "Silver Medal",
      description:
        "Received a Silver Medal in Science Olympiad during school.",
    },
    {
      icon: GraduationCap,
      title: "Generative AI",
      description:
        "Completed TCS iON Career Edge – Generative AI Essentials.",
    },
  ];

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
          05 / Achievements
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Milestones.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
              >
                <Icon
                  size={26}
                  className="mb-5 text-gray-400"
                />

                <h3 className="font-semibold">
                  {achievement.title}
                </h3>

                <p className="mt-2 leading-6 text-gray-500">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Achievements;