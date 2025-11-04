import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🧠 Emojis representing sections
  const links = [
    { name: "Home", icon: "🏠" },
    { name: "About", icon: "👤" },
    { name: "Projects", icon: "💻" },
    { name: "Skills", icon: "⚡" },
    { name: "Experience", icon: "🧩" },
    { name: "Certifications", icon: "📜" },
    { name: "Contact", icon: "📞" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-900/30 border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Vishal.dev
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-2xl">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.name.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-300"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer text-gray-300 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-900/95 p-4 space-y-4 text-center border-t border-gray-700 text-3xl">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.name.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white transition duration-300"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
