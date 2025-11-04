import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Web Developer",
      company: "Nithra Apps India Pvt Ltd",
      period: "Sep 2025 - Present · 3 months",
      location: "On-site",
      description:
        "Currently working on modern web applications focusing on responsive UI, backend integration, and optimizing full-stack solutions.",
    },
    {
      role: "MERN Stack Developer",
      company: "Revamp Academy",
      period: "Apr 2025 - Jun 2025 · 3 months",
      location: "Madurai, Tamil Nadu, India · On-site",
      description:
        "Developed MERN-based full-stack projects, implemented RESTful APIs, handled authentication, and built real-time web apps with React and Node.js.",
    },
    {
      role: "Web Developer",
      company: "Nithra Apps India Pvt Ltd",
      period: "Feb 2025 - Mar 2025 · 2 months",
      location: "Tiruchengode, Tamil Nadu · On-site",
      description:
        "Contributed to live product development and UI improvements using React, Tailwind CSS, and JavaScript for scalable web applications.",
    },
    {
      role: "Front End Developer",
      company: "Techvolt Software Pvt Ltd",
      period: "Jan 2025 - Feb 2025 · 15 days",
      location: "Coimbatore, Tamil Nadu, India · On-site",
      description:
        "Built and maintained dynamic MERN stack applications, ensuring clean architecture and optimized database interactions.",
    },
    {
      role: "Web Developer Intern",
      company: "OctaNet Services Pvt Ltd",
      period: "Mar 2024 - Apr 2024 · 2 months",
      location: "Virtual Internship",
      description:
        "Developed web pages and interactive features, focusing on clean and efficient front-end design and JavaScript logic.",
    },
    {
      role: "Web Developer Intern",
      company: "TechnoHacks EduTech Official",
      period: "Feb 2024 - Mar 2024 · 2 months",
      location: "Virtual Internship",
      description:
        "Created educational platform pages and dashboards using HTML, CSS, and JavaScript while collaborating remotely with the team.",
    },
    {
      role: "Web Developer Intern",
      company: "CodSoft",
      period: "Feb 2024 - Mar 2024 · 2 months",
      location: "Virtual Internship",
      description:
        "Worked on portfolio and landing page design, practiced responsive web development, and gained real-time project exposure.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 text-gray-100 overflow-hidden"
    >
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/ex.mp4" type="video/mp4" />
      </video>

      {/* 🩵 Dark Overlay for Readability */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* 🌟 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          Experience 💼
        </motion.h2>

        {/* 📍 Timeline Layout */}
        <div className="relative border-l-4 border-pink-500/40 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-gray-900/70 p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 backdrop-blur-md"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] sm:-left-[36px] top-6 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                <Briefcase className="text-white w-3.5 h-3.5" />
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-400">
                {exp.role}
              </h3>
              <p className="text-indigo-300 text-sm sm:text-base">
                {exp.company}
              </p>
              <span className="block text-gray-400 text-xs sm:text-sm italic mt-1">
                {exp.period} • {exp.location}
              </span>

              {/* Description */}
              <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
