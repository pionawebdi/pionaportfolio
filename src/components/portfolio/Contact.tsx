"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Mail, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

const auroraBlobs = [
  {
    className: "left-[8%] top-[12%] h-72 w-72 sm:h-[28rem] sm:w-[28rem]",
    gradient: "radial-gradient(circle, rgba(139,92,246,0.38) 0%, rgba(139,92,246,0.12) 35%, transparent 72%)",
    animate: { x: [0, 34, -8, 0], y: [0, -14, 18, 0], scale: [1, 1.05, 0.98, 1] },
    transition: { duration: 28, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "right-[4%] top-[8%] h-80 w-80 sm:h-[34rem] sm:w-[34rem]",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.34) 0%, rgba(59,130,246,0.10) 38%, transparent 72%)",
    animate: { x: [0, -40, 18, 0], y: [0, 16, -12, 0], scale: [1, 1.08, 1, 1] },
    transition: { duration: 34, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "left-1/2 top-[52%] h-[26rem] w-[26rem] -translate-x-1/2 sm:h-[38rem] sm:w-[38rem]",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(96,165,250,0.10) 42%, transparent 74%)",
    animate: { x: [0, 18, -22, 0], y: [0, -10, 16, 0], scale: [1, 1.04, 1.01, 1] },
    transition: { duration: 38, repeat: Infinity, ease: "easeInOut" as const },
  },
];

const networkLines = [
  { x1: "6%", y1: "20%", x2: "22%", y2: "28%" },
  { x1: "22%", y1: "28%", x2: "38%", y2: "18%" },
  { x1: "38%", y1: "18%", x2: "54%", y2: "30%" },
  { x1: "54%", y1: "30%", x2: "68%", y2: "20%" },
  { x1: "68%", y1: "20%", x2: "86%", y2: "28%" },
  { x1: "18%", y1: "52%", x2: "34%", y2: "44%" },
  { x1: "34%", y1: "44%", x2: "50%", y2: "58%" },
  { x1: "50%", y1: "58%", x2: "68%", y2: "48%" },
  { x1: "68%", y1: "48%", x2: "82%", y2: "60%" },
];

const particles = [
  { left: "12%", top: "18%", size: "0.45rem", delay: 0 },
  { left: "24%", top: "62%", size: "0.36rem", delay: 1.2 },
  { left: "36%", top: "30%", size: "0.34rem", delay: 2.1 },
  { left: "50%", top: "20%", size: "0.5rem", delay: 0.8 },
  { left: "62%", top: "66%", size: "0.38rem", delay: 1.6 },
  { left: "74%", top: "36%", size: "0.42rem", delay: 2.4 },
  { left: "84%", top: "58%", size: "0.34rem", delay: 1.1 },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0C0C0C] overflow-hidden border-t border-white/10 isolate">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_56%)] opacity-60" />
        {auroraBlobs.map((blob, index) => (
          <motion.div
            key={index}
            aria-hidden="true"
            className={`absolute rounded-full blur-3xl ${blob.className} opacity-60 sm:opacity-70`}
            style={{ background: blob.gradient }}
            animate={blob.animate}
            transition={blob.transition}
          />
        ))}

        <div className="absolute inset-0 hidden sm:block opacity-[0.12]">
          <svg className="h-full w-full" viewBox="0 0 1000 900" preserveAspectRatio="none">
            {networkLines.map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(191,219,254,0.45)"
                strokeWidth="1"
                strokeLinecap="round"
                animate={{ opacity: [0.18, 0.42, 0.18] }}
                transition={{ duration: 9 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
            {networkLines.flatMap((line, index) => [
              <motion.circle
                key={`a-${index}`}
                cx={line.x1}
                cy={line.y1}
                r="2"
                fill="rgba(232,240,255,0.55)"
                animate={{ opacity: [0.25, 0.75, 0.25] }}
                transition={{ duration: 6.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />,
              <motion.circle
                key={`b-${index}`}
                cx={line.x2}
                cy={line.y2}
                r="2"
                fill="rgba(167,139,250,0.55)"
                animate={{ opacity: [0.18, 0.62, 0.18] }}
                transition={{ duration: 7.5 + index * 0.45, repeat: Infinity, ease: "easeInOut" }}
              />,
            ])}
          </svg>
        </div>

        <div className="absolute inset-0 sm:hidden opacity-[0.08]">
          <svg className="h-full w-full" viewBox="0 0 1000 900" preserveAspectRatio="none">
            <motion.line
              x1="10%"
              y1="26%"
              x2="34%"
              y2="20%"
              stroke="rgba(191,219,254,0.35)"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ opacity: [0.12, 0.3, 0.12] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="54%"
              y1="38%"
              x2="82%"
              y2="30%"
              stroke="rgba(167,139,250,0.3)"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ opacity: [0.1, 0.24, 0.1] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-white shadow-[0_0_18px_rgba(168,85,247,0.55)] hidden sm:block"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: 0.18,
              }}
              animate={{
                y: [0, -14, 0],
                x: [0, 8, 0],
                opacity: [0.12, 0.3, 0.12],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10 + index * 0.7,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.span
            className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(96,165,250,0.6)] sm:hidden"
            style={{ left: "20%", top: "24%", width: "0.3rem", height: "0.3rem", opacity: 0.12 }}
            animate={{ y: [0, -8, 0], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(167,139,250,0.6)] sm:hidden"
            style={{ right: "18%", top: "30%", width: "0.32rem", height: "0.32rem", opacity: 0.1 }}
            animate={{ y: [0, 10, 0], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
