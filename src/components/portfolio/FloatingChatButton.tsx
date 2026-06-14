"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export function FloatingChatButton() {
  return (
    <motion.a
      href="#contact"
      aria-label="Open chatbot"
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#E7F064]/18 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-[#0D1017]/96 text-white shadow-[0_20px_50px_rgba(0,0,0,0.38)] backdrop-blur-md transition-all duration-300 group-hover:border-[#E7F064]/60 group-hover:bg-[#131824]">
        <Bot className="h-6 w-6" />
      </span>
      <span className="absolute -top-2 -right-1 h-3 w-3 rounded-full border border-[#05060A] bg-[#E7F064] shadow-[0_0_18px_rgba(231,240,100,0.9)]" />
    </motion.a>
  );
}
