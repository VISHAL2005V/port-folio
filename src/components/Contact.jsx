import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Collect form values manually
    const user_name = form.current.user_name.value;
    const user_email = form.current.user_email.value;
    const message = form.current.message.value;

    emailjs
      .send(
        "service_iwvf8zd", // ✅ Your Service ID
        "template_n6z1knn", // ✅ Your Template ID
        {
          user_name,
          user_email,
          message,
        },
        "07Qi4700J_TqlRBnA" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setStatusMessage("✅ Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("❌ Email send failed:", error.text);
          setStatusMessage("❌ Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/pa.mp4" type="video/mp4" />
      </video>

      {/* 🩶 Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* 🌈 Animated Glow Orbs */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-20 left-10 z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* ✨ Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center z-10"
      >
        Get In{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Touch
        </span>
      </motion.h2>

      {/* 💌 Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-gray-900/70 p-8 rounded-2xl shadow-xl border border-gray-800 space-y-5 backdrop-blur-lg relative z-10"
      >
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800/70 text-gray-200 outline-none border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800/70 text-gray-200 outline-none border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
        </div>

        {/* Message Box */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800/70 text-gray-200 outline-none border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all resize-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSending}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-purple-500/30 transition-all ${
            isSending ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isSending ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
        </motion.button>

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center text-sm text-gray-300 mt-2">{statusMessage}</p>
        )}
      </motion.form>

      {/* 🌐 Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 text-gray-400 text-sm text-center z-10"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-pink-400 font-medium">Vishal</span>. All rights reserved.
      </motion.p>
    </section>
  );
}
