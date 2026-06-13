"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#strengths" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(960px,calc(100%-24px))]"
    >
      <div className="glass flex items-center justify-between px-4 sm:px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold text-white">
          <span className="inline-flex w-7 h-7 rounded-full items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7C5CFF, #00D1FF)" }}>
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </span>
          <span className="hidden sm:inline tracking-tight">UI × AI</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-2 rounded-full hover:text-white hover:bg-white/5 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-neon !py-2 !px-4 text-sm">
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
}
