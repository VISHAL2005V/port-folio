import { motion } from "framer-motion";
import { Code2, Sparkles, Laptop, Rocket } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full sm:h-full md:h-full object-cover opacity-40 z-0"
        style={{
          minHeight: "100vh", // ✅ Ensures full height even on mobile browsers
          objectPosition: "center",
        }}
      >
        <source src="/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔮 Animated Gradient Orbs */}
      <motion.div
        className="absolute w-64 sm:w-72 h-64 sm:h-72 bg-pink-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse z-1"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse z-1"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* ✨ Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center relative z-10"
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
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-3xl text-center text-gray-300 text-base sm:text-lg leading-relaxed mb-14 px-2 sm:px-6 relative z-10"
      >
        I’m <span className="text-pink-400 font-semibold">Vishal R S</span>, a
        passionate MERN Stack Developer who loves creating interactive, smart,
        and modern digital experiences. I blend creativity with technology — 
        crafting projects that merge{" "}
        <span className="text-purple-400 font-semibold">AI</span>,{" "}
        <span className="text-blue-400 font-semibold">Machine Learning</span>, 
        and{" "}
        <span className="text-teal-400 font-semibold">beautiful design</span>{" "}
        into seamless web applications.
      </motion.p>

      {/* 💡 Animated Skill Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 justify-items-center relative z-10">
        {[
          {
            icon: <Code2 size={44} className="text-pink-400" />,
            title: "Frontend Development",
          },
          {
            icon: <Laptop size={44} className="text-blue-400" />,
            title: "Backend Engineering",
          },
          {
            icon: <Rocket size={44} className="text-purple-400" />,
            title: "AI & Machine Learning",
          },
          {
            icon: <Sparkles size={44} className="text-teal-400" />,
            title: "Creative UI Design",
          },
        ].map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            className="bg-gray-900/60 border border-gray-800 hover:border-pink-500/40 p-6 sm:p-8 rounded-2xl shadow-lg text-center w-64 sm:w-56 transition-all duration-300 backdrop-blur-lg"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <p className="text-gray-300 font-medium text-sm sm:text-base">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
