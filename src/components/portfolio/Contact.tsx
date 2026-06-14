"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Mail, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

const auroraBlobs = [
  {
    className: "left-[6%] top-[8%] h-72 w-72 sm:h-[30rem] sm:w-[30rem]",
    gradient:
      "radial-gradient(circle, rgba(168,85,247,0.52) 0%, rgba(168,85,247,0.18) 30%, rgba(59,130,246,0.06) 54%, transparent 74%)",
    animate: { x: [0, 26, -12, 0], y: [0, -14, 10, 0], scale: [1, 1.08, 1.01, 1] },
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "right-[0%] top-[0%] h-96 w-96 sm:h-[38rem] sm:w-[38rem]",
    gradient:
      "radial-gradient(circle, rgba(34,211,238,0.46) 0%, rgba(59,130,246,0.18) 34%, rgba(99,102,241,0.06) 58%, transparent 76%)",
    animate: { x: [0, -36, 18, 0], y: [0, 14, -12, 0], scale: [1, 1.06, 1.02, 1] },
    transition: { duration: 22, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "left-1/2 top-[46%] h-[30rem] w-[30rem] -translate-x-1/2 sm:h-[42rem] sm:w-[42rem]",
    gradient:
      "radial-gradient(circle, rgba(99,102,241,0.34) 0%, rgba(168,85,247,0.14) 36%, rgba(59,130,246,0.08) 58%, transparent 76%)",
    animate: { x: [0, 18, -20, 0], y: [0, -10, 14, 0], scale: [1, 1.06, 1.02, 1] },
    transition: { duration: 26, repeat: Infinity, ease: "easeInOut" as const },
  },
];

const particles = [
  { left: "8%", top: "16%", size: "0.2rem", delay: 0, glow: "rgba(255,255,255,0.78)" },
  { left: "14%", top: "30%", size: "0.14rem", delay: 1.1, glow: "rgba(191,219,254,0.76)" },
  { left: "22%", top: "58%", size: "0.16rem", delay: 0.6, glow: "rgba(196,181,253,0.76)" },
  { left: "30%", top: "22%", size: "0.13rem", delay: 2.2, glow: "rgba(255,255,255,0.78)" },
  { left: "42%", top: "38%", size: "0.18rem", delay: 0.9, glow: "rgba(147,197,253,0.84)" },
  { left: "50%", top: "18%", size: "0.15rem", delay: 1.7, glow: "rgba(255,255,255,0.82)" },
  { left: "58%", top: "64%", size: "0.18rem", delay: 0.4, glow: "rgba(191,219,254,0.78)" },
  { left: "66%", top: "28%", size: "0.14rem", delay: 1.5, glow: "rgba(196,181,253,0.78)" },
  { left: "74%", top: "50%", size: "0.2rem", delay: 2.1, glow: "rgba(255,255,255,0.82)" },
  { left: "84%", top: "20%", size: "0.15rem", delay: 0.8, glow: "rgba(147,197,253,0.82)" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0C0C0C] overflow-hidden border-t border-white/10 isolate">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_50%_58%,rgba(168,85,247,0.08),transparent_36%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_58%)] opacity-70" />
        {auroraBlobs.map((blob, index) => (
          <motion.div
            key={index}
            aria-hidden="true"
            className={`absolute rounded-full blur-2xl ${blob.className} opacity-80 sm:opacity-90`}
            style={{ background: blob.gradient }}
            animate={blob.animate}
            transition={blob.transition}
          />
        ))}

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-white hidden sm:block"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: 0.24,
                boxShadow: `0 0 12px ${particle.glow}, 0 0 24px ${particle.glow}`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 8, 0],
                opacity: [0.12, 0.52, 0.12],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5.8 + index * 0.28,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.span
            className="absolute rounded-full bg-white sm:hidden"
              style={{
                left: "18%",
                top: "24%",
                width: "0.24rem",
                height: "0.24rem",
                opacity: 0.14,
                boxShadow: "0 0 10px rgba(191,219,254,0.5)",
              }}
            animate={{ y: [0, -12, 0], opacity: [0.08, 0.24, 0.08], scale: [1, 1.22, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute rounded-full bg-white sm:hidden"
            style={{
              right: "16%",
              top: "30%",
              width: "0.26rem",
              height: "0.26rem",
              opacity: 0.12,
              boxShadow: "0 0 10px rgba(196,181,253,0.5)",
            }}
            animate={{ y: [0, 14, 0], opacity: [0.06, 0.2, 0.06], scale: [1, 1.18, 1] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">07 — Contact</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.05] tracking-tight"
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2.2rem, 6.5vw, 5.5rem)" }}>
            Designing better interfaces <br />
            with <span className="text-gradient-neon">human insight</span> <br />
            and <span className="text-gradient-neon">AI speed</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="text-white/60 mt-8 max-w-xl mx-auto leading-relaxed">
            함께 만들고 싶은 프로젝트가 있다면 언제든 편하게 연락 주세요.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="mailto:webdibi@naver.com" className="btn-neon">
              <Mail className="w-4 h-4" /> webdibi@naver.com <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" className="btn-ghost">Download CV</a>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-16 flex justify-center gap-3">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "Github" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="glass w-11 h-11 rounded-md flex items-center justify-center hover:border-[#E7F064]/70 hover:-translate-y-1 transition-all">
                <s.icon className="w-4 h-4 text-white/80" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="relative z-10 mt-24 pt-8 border-t border-white/10 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>© 2026 UIUX Portfolio. Designed with insight, built with AI.</div>
          <div className="font-mono">UIUX · Seoul, KR</div>
        </div>
      </footer>
    </section>
  );
}
