import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Database", icon: <FaDatabase className="text-pink-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/s.mp4" type="video/mp4" />
      </video>

      {/* ✨ Gradient Overlay for readability */}
      <div className="absolute inset-0 "></div>

      {/* 💫 Animated Background Blurs */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-20 left-10 z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl bottom-20 right-10 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 💎 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center z-10"
      >
        My <span className="text-pink-500">Tech Skills</span> 💻
      </motion.h2>

      {/* 🧠 Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl z-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center bg-gray-900/70 p-6 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* 🪄 Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="mt-16 text-sm text-gray-400 text-center z-10"
      >
        ⚡ Building dynamic, full-stack web apps using the MERN Stack & beyond.
      </motion.p>
    </section>
  );
}
