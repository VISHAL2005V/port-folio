import { motion } from "framer-motion";
import { Code2, Cpu, Brain, Camera, Globe, Zap } from "lucide-react";

const projects = [
  {
    title: "Nutrition Meter",
    desc: "Smart nutrition tracking app built with React, Node.js, Express & MySQL to analyze food data efficiently.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    icon: <Zap className="w-10 h-10 text-pink-400" />,
  },
  {
    title: "AI Health Assistant",
    desc: "AI-powered chatbot providing health tips, symptom analysis, and wellness recommendations using Flask & ML.",
    tech: ["React", "Flask", "ML"],
    icon: <Brain className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "AI Face Attendance System",
    desc: "Automated attendance using face recognition (React Frontend + Python + OpenCV backend).",
    tech: ["React", "Python", "OpenCV"],
    icon: <Camera className="w-10 h-10 text-indigo-400" />,
  },
  {
    title: "AI Career Map",
    desc: "Interactive career guidance system powered by Machine Learning to recommend the best-fit career paths.",
    tech: ["React", "Flask", "ML"],
    icon: <Cpu className="w-10 h-10 text-green-400" />,
  },
  {
    title: "Virtual Try-On System",
    desc: "Real-time outfit try-on system using React & OpenCV for an immersive virtual experience.",
    tech: ["React", "OpenCV", "Flask"],
    icon: <Globe className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Online Exam Monitor",
    desc: "AI-driven proctoring tool detecting cheating via webcam, mic, and gaze tracking.",
    tech: ["React", "Flask", "ML"],
    icon: <Code2 className="w-10 h-10 text-teal-400" />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6 flex flex-col items-center text-white overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
        style={{ minHeight: "100vh", objectPosition: "center" }}
      >
        <source src="/p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✨ Overlay for readability */}
      <div className="absolute inset-0"></div>

      {/* 💫 Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center relative z-10"
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Projects
        </span>
      </motion.h2>

      {/* 💻 Project Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl w-full px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="group relative bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 overflow-hidden backdrop-blur-lg"
          >
            {/* Neon Hover Border Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-xl transition duration-500"></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-gray-800/60 rounded-2xl">{p.icon}</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs sm:text-sm bg-gray-800/70 text-pink-400 rounded-full border border-pink-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
