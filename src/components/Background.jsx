import { motion } from "framer-motion";

function Background() {
  const particles = Array.from({ length: 18 });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main grid */}
      <div className="grid-background absolute inset-0" />

      {/* Large glowing orbs */}
      <motion.div
        className="glow-orb glow-orb-one"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="glow-orb glow-orb-two"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating particles */}
      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="floating-particle"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_90%)]" />
    </div>
  );
}

export default Background;