import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      title: "MERN Stack Developer",
      issuer: "Revamp Academy",
      year: "2025",
    },
    {
      title: "Frontend Developer",
      issuer: "DP Codes",
      year: "2025",
    },
    {
      title: "Java Programming",
      issuer: "Great Learning",
      year: "2024",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative min-h-screen flex flex-col justify-center py-20 text-gray-100 overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/co.mp4" type="video/mp4" />
      </video>

      {/* 🌌 Dark Gradient Overlay */}
      <div className="absolute inset-0 "></div>

      {/* ✨ Animated Glow Orbs */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-20 left-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* 🏅 Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
        >
          My <span className="text-white">Certifications</span> 🏅
        </motion.h2>

        {/* 🧾 Certificates Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(236,72,153,0.5)",
              }}
              className="relative group p-6 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-pink-500/40 transition-all text-center backdrop-blur-lg shadow-xl"
            >
              {/* Neon Border Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-md"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-base">{cert.issuer}</p>
                <span className="text-gray-400 text-sm block mt-2">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✨ Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 mt-12 text-sm"
        >
          📜 Continuously learning and upgrading my skills to stay ahead in tech.
        </motion.p>
      </div>
    </section>
  );
}
