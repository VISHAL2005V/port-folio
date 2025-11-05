import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 overflow-hidden bg-[#0a0a0a] text-white text-center md:text-left"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-25"
      >
        <source src="/o.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌈 Animated Floating Blurs */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 w-48 h-48 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-3xl"
      />

      {/* 🖼️ Profile Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center z-10 order-1 md:order-2 mb-8 md:mb-0"
      >
        {/* 🌟 Animated Glow Behind Image */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl"
        />
        <motion.img
          src="/vis.jpg"
          alt="Vishal"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/40 object-cover"
        />
      </motion.div>

      {/* 🧠 Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center md:items-start justify-center text-center md:text-left z-10 order-2 md:order-1"
      >
        {/* 🌟 Title */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500"
        >
          Hi, I’m{" "}
          <span className="text-white drop-shadow-[0_0_15px_#ffffff50]">
            Vishal
          </span>{" "}
          👋
        </motion.h1>

        {/* 💬 Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-md md:max-w-xl mt-4 leading-relaxed"
        >
          🚀 A{" "}
          <span className="text-pink-400 font-semibold">Full Stack Developer</span>{" "}
          crafting modern, scalable & immersive digital experiences.
        </motion.p>

        {/* 🌐 Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center md:justify-start gap-5 mt-6"
        >
          {[
            {
              icon: <Github size={22} />,
              href: "https://github.com/VISHAL2005V",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: <Linkedin size={22} />,
              href: "https://www.linkedin.com/in/vishal-r-s-b8075a258/",
              gradient: "from-blue-500 to-indigo-500",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full bg-gray-800/60 hover:bg-gradient-to-r ${social.gradient} text-white shadow-md hover:shadow-pink-500/40 transition-all duration-300 backdrop-blur-lg`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* 🚀 Call to Action */}
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.07,
            boxShadow: "0px 0px 20px rgba(255, 0, 150, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
        >
          View My Work 🚀
        </motion.a>
      </motion.div>
    </section>
  );
}
