"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    name: "GitHub",
    href: "https://github.com/Rauftaha757",
    svg: (
      <svg viewBox="0 0 24 24" fill="black" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.04 24 17.575 24 12.297 24 5.67 18.627 0.297 12 0.297z"/>
      </svg>
    ),
    bg: "hover:shadow-black/40",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pixelsolve-inc",
    svg: (
      <svg viewBox="0 0 24 24" fill="#0077B5" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 01-2.06-2.06c0-1.138.923-2.061 2.06-2.061 1.138 0 2.061.923 2.061 2.06 0 1.138-.923 2.061-2.06 2.061zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.222 0z"/>
      </svg>
    ),
    bg: "hover:shadow-blue-500/40",
  },
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=connect@pixelsolve.co",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#EA4335"/>
        <path d="M19.6 7.2v9.6c0 .66-.54 1.2-1.2 1.2H5.6c-.66 0-1.2-.54-1.2-1.2V7.2c0-.66.54-1.2 1.2-1.2h12.8c.66 0 1.2.54 1.2 1.2z" fill="#fff"/>
        <path d="M19.6 7.2l-7.6 5.6-7.6-5.6" stroke="#EA4335" strokeWidth="1.5"/>
      </svg>
    ),
    bg: "hover:shadow-red-500/40",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pixelsolve.co/",
    svg: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f58529" />
            <stop offset="50%" stopColor="#dd2a7b" />
            <stop offset="100%" stopColor="#515bd4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)" />
        <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none" />
        <circle cx="17" cy="7" r="1.2" fill="#fff" />
      </svg>
    ),
    bg: "hover:shadow-pink-500/40",
  },
];

export default function Contact() {
  const [modal, setModal] = useState<null | { name: string; href: string }>(null);

  const handleContactClick = (contact: { name: string; href: string }) => {
    setModal(contact);
  };

  const handleContinue = () => {
    if (modal) {
      window.open(modal.href, "_blank", "noopener,noreferrer");
      setModal(null);
    }
  };

  const handleCancel = () => setModal(null);

  return (
    <section id="contact" className="py-20 bg-[#0b0f19] text-white relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      {/* Modal Popup */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="bg-white/10 border border-blue-500/30 rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center glass-card"
            style={{ boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)" }}
          >
            <div className="mb-4 text-lg font-semibold text-white text-center">
              You're about to visit <span className="text-blue-400">{modal.name}</span>.<br />Continue?
            </div>
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleContinue}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cool-blue to-accent-blue text-white font-semibold shadow hover:scale-105 transition"
                autoFocus
              >
                Continue
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg bg-[#22273a]/80 text-gray-200 font-medium border border-blue-500/20 hover:bg-[#22273a] transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg text-gray-300 max-w-xl mx-auto mb-2"
          >
            Let's connect on the platforms we actually use.
          </motion.p>
        </motion.div>

        {/* Contact Icons */}
        <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory max-w-full md:justify-center md:overflow-x-visible md:gap-8 md:max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.button
              key={contact.name}
              onClick={() => handleContactClick(contact)}
              whileHover={{ 
                scale: 1.1, 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className={`flex flex-col items-center justify-center bg-white/10 rounded-xl p-6 min-w-[160px] snap-center transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm border border-white/10 ${contact.bg} hover:border-blue-500/30`}
              aria-label={contact.name}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="mb-3"
              >
                {contact.svg}
              </motion.div>
              <span className="text-base font-medium text-white opacity-90 select-none">
                {contact.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mt-8"
        >
          <p className="text-gray-400 text-sm italic">
            "Let's build something amazing together"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
