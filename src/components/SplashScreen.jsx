import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 7000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 text-center">
      {/* 🌌 Animated Background Lights */}
      <motion.div
        className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-indigo-500/30 rounded-full blur-3xl top-10 left-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.4, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-pink-500/30 rounded-full blur-3xl bottom-10 right-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* ⚡ Floating Logo Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
      >
        My<span className="text-pink-400">Portfolio</span> ⚡
      </motion.h1>

      {/* ✨ Subtitle animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl font-light text-gray-200 max-w-lg mx-auto"
      >
        Crafting digital experiences with{" "}
        <span className="text-indigo-400">style</span> &{" "}
        <span className="text-pink-400">precision</span>.
      </motion.p>

      {/* 🔄 Subtle loading bar animation */}
      <div className="w-full flex justify-center mt-8 sm:mt-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"
        />
      </div>

      {/* 🪶 Floating tagline for mobile/desktop */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 text-xs sm:text-sm text-gray-400"
      >
        © 2025 Vishal | Built with 💙 React & Tailwind
      </motion.p>
    </div>
  );
}
