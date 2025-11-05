import { motion } from "framer-motion";
import { Code2, Sparkles, Laptop, Rocket } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-white overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
        style={{
          minHeight: "100vh",
          objectPosition: "center",
        }}
      >
        <source src="/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔮 Animated Gradient Orbs */}
      <motion.div
        className="absolute w-40 h-40 sm:w-60 sm:h-60 bg-pink-500/30 rounded-full blur-3xl top-8 left-6 animate-pulse"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl bottom-8 right-6 animate-pulse"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* ✨ Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center relative z-10"
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Me
        </span>
      </motion.h2>

      {/* 💬 Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="max-w-2xl text-center text-gray-300 text-sm sm:text-base leading-relaxed mb-10 px-2 sm:px-4 relative z-10"
      >
        I’m <span className="text-pink-400 font-semibold">Vishal R S</span>, a
        passionate MERN Stack Developer who loves creating interactive and
        intelligent digital experiences. I blend creativity with technology to
        build modern solutions that merge{" "}
        <span className="text-purple-400 font-semibold">AI</span>,{" "}
        <span className="text-blue-400 font-semibold">Machine Learning</span>,
        and{" "}
        <span className="text-teal-400 font-semibold">beautiful design</span>{" "}
        into seamless web applications.
      </motion.p>

      {/* 💡 Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative z-10">
        {[
          {
            icon: <Code2 size={36} className="text-pink-400" />,
            title: "Frontend Development",
          },
          {
            icon: <Laptop size={36} className="text-blue-400" />,
            title: "Backend Engineering",
          },
          {
            icon: <Rocket size={36} className="text-purple-400" />,
            title: "AI & Machine Learning",
          },
          {
            icon: <Sparkles size={36} className="text-teal-400" />,
            title: "Creative UI Design",
          },
        ].map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-900/70 border border-gray-800 hover:border-pink-500/40 p-4 sm:p-6 rounded-2xl shadow-md text-center w-[150px] sm:w-[200px] md:w-[220px] transition-all duration-300 backdrop-blur-lg"
          >
            <div className="flex justify-center mb-3 sm:mb-4">{skill.icon}</div>
            <p className="text-gray-300 font-medium text-xs sm:text-sm">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
