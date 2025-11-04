import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 overflow-hidden text-center md:text-left"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/o.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌈 Floating Animated Blurs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl z-1"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl z-1"
      />

      {/* 🖼️ Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 mb-10 md:mb-0 flex justify-center relative z-10 order-1 md:order-2"
      >
        {/* 🌟 Animated Glow Behind Image */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl"
        />
        <motion.img
          src="/vi.jpg"
          alt="Vishal"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-44 mt-14 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/40 object-cover"
        />
      </motion.div>

      {/* 🧠 Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex-1 space-y-6 z-10 order-2 md:order-1"
      >
        {/* 🌟 Gradient Shimmer Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 animate-textShimmer"
        >
          Hi, I’m <span className="text-white">Vishal</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0"
        >
          🚀 A passionate{" "}
          <span className="text-pink-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          crafting elegant, responsive, and high-performing web experiences.
        </motion.p>

        {/* 🌐 Floating Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center md:justify-start gap-5 mt-6"
        >
          {[
            {
              icon: <Github size={24} />,
              href: "https://github.com/VISHAL2005V",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: <Linkedin size={24} />,
              href: "https://www.linkedin.com/in/vishal-r-s-b8075a258/",
              gradient: "from-blue-500 to-indigo-500",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r ${social.gradient} text-white shadow-lg hover:shadow-pink-500/40 transition-all duration-300`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* 🚀 Button with Glow Animation */}
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.07,
            boxShadow: "0px 0px 20px rgba(255, 0, 150, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
        >
          View My Work 🚀
        </motion.a>
      </motion.div>
    </section>
  );
}
