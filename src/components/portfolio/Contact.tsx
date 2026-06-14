"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Mail, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

const auroraBlobs = [
  {
    className: "left-[6%] top-[8%] h-72 w-72 sm:h-[30rem] sm:w-[30rem]",
    gradient:
      "radial-gradient(circle, rgba(168,85,247,0.72) 0%, rgba(168,85,247,0.26) 28%, rgba(59,130,246,0.1) 54%, transparent 76%)",
    animate: { x: [0, 58, -26, 0], y: [0, -22, 16, 0], scale: [1, 1.12, 1.03, 1] },
    transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "right-[0%] top-[0%] h-96 w-96 sm:h-[38rem] sm:w-[38rem]",
    gradient:
      "radial-gradient(circle, rgba(34,211,238,0.66) 0%, rgba(59,130,246,0.26) 34%, rgba(99,102,241,0.1) 58%, transparent 76%)",
    animate: { x: [0, -66, 30, 0], y: [0, 22, -18, 0], scale: [1, 1.1, 1.03, 1] },
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "left-1/2 top-[46%] h-[30rem] w-[30rem] -translate-x-1/2 sm:h-[42rem] sm:w-[42rem]",
    gradient:
      "radial-gradient(circle, rgba(99,102,241,0.54) 0%, rgba(168,85,247,0.22) 36%, rgba(59,130,246,0.12) 58%, transparent 76%)",
    animate: { x: [0, 30, -30, 0], y: [0, -14, 18, 0], scale: [1, 1.08, 1.04, 1] },
    transition: { duration: 7.5, repeat: Infinity, ease: "easeInOut" as const },
  },
];

const lightColumns = [
  {
    left: "9%",
    width: "11rem",
    height: "86%",
    gradient:
      "linear-gradient(180deg, rgba(168,85,247,0) 0%, rgba(168,85,247,0.18) 18%, rgba(168,85,247,0.46) 50%, rgba(59,130,246,0.22) 78%, rgba(59,130,246,0) 100%)",
    animate: { x: [0, 58, -24, 0], y: [0, -12, 14, 0], opacity: [0.46, 0.82, 0.48] },
    transition: { duration: 6.1, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    left: "36%",
    width: "13rem",
    height: "92%",
    gradient:
      "linear-gradient(180deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.16) 16%, rgba(59,130,246,0.4) 48%, rgba(168,85,247,0.22) 74%, rgba(168,85,247,0) 100%)",
    animate: { x: [0, -62, 26, 0], y: [0, 12, -12, 0], opacity: [0.4, 0.72, 0.42] },
    transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    left: "66%",
    width: "12rem",
    height: "88%",
    gradient:
      "linear-gradient(180deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.2) 20%, rgba(34,211,238,0.46) 48%, rgba(99,102,241,0.22) 74%, rgba(99,102,241,0) 100%)",
    animate: { x: [0, 54, -28, 0], y: [0, -12, 14, 0], opacity: [0.38, 0.7, 0.4] },
    transition: { duration: 5.9, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    left: "82%",
    width: "10rem",
    height: "82%",
    gradient:
      "linear-gradient(180deg, rgba(168,85,247,0) 0%, rgba(34,211,238,0.18) 22%, rgba(59,130,246,0.38) 52%, rgba(99,102,241,0.18) 76%, rgba(99,102,241,0) 100%)",
    animate: { x: [0, -48, 20, 0], y: [0, 10, -14, 0], opacity: [0.34, 0.62, 0.36] },
    transition: { duration: 6.8, repeat: Infinity, ease: "easeInOut" as const },
  },
];

const particles = [
  { left: "6%", top: "14%", size: "0.24rem", delay: 0, glow: "rgba(255,255,255,0.9)", driftX: 14, driftY: -22, mobile: false, sparkle: "cross" },
  { left: "10%", top: "28%", size: "0.16rem", delay: 0.8, glow: "rgba(191,219,254,0.88)", driftX: 10, driftY: 18, mobile: false, sparkle: "point" },
  { left: "14%", top: "52%", size: "0.18rem", delay: 1.4, glow: "rgba(196,181,253,0.88)", driftX: 16, driftY: -16, mobile: false, sparkle: "cross" },
  { left: "18%", top: "20%", size: "0.14rem", delay: 2.2, glow: "rgba(255,255,255,0.85)", driftX: -12, driftY: 20, mobile: false, sparkle: "point" },
  { left: "24%", top: "40%", size: "0.2rem", delay: 0.5, glow: "rgba(147,197,253,0.9)", driftX: 12, driftY: -18, mobile: false, sparkle: "cross" },
  { left: "30%", top: "16%", size: "0.16rem", delay: 1.8, glow: "rgba(255,255,255,0.88)", driftX: -10, driftY: 14, mobile: false, sparkle: "point" },
  { left: "34%", top: "62%", size: "0.22rem", delay: 0.9, glow: "rgba(191,219,254,0.86)", driftX: 12, driftY: -20, mobile: false, sparkle: "cross" },
  { left: "38%", top: "30%", size: "0.15rem", delay: 1.1, glow: "rgba(196,181,253,0.84)", driftX: 10, driftY: 16, mobile: false, sparkle: "point" },
  { left: "44%", top: "48%", size: "0.24rem", delay: 0.3, glow: "rgba(255,255,255,0.92)", driftX: -14, driftY: -18, mobile: false, sparkle: "cross" },
  { left: "50%", top: "22%", size: "0.16rem", delay: 2.0, glow: "rgba(147,197,253,0.86)", driftX: 8, driftY: 14, mobile: false, sparkle: "point" },
  { left: "56%", top: "60%", size: "0.18rem", delay: 0.7, glow: "rgba(191,219,254,0.88)", driftX: 14, driftY: -16, mobile: false, sparkle: "cross" },
  { left: "62%", top: "18%", size: "0.14rem", delay: 1.6, glow: "rgba(255,255,255,0.84)", driftX: -10, driftY: 18, mobile: false, sparkle: "point" },
  { left: "68%", top: "36%", size: "0.2rem", delay: 0.4, glow: "rgba(196,181,253,0.9)", driftX: 12, driftY: -20, mobile: false, sparkle: "cross" },
  { left: "74%", top: "56%", size: "0.16rem", delay: 1.3, glow: "rgba(147,197,253,0.88)", driftX: -12, driftY: 16, mobile: false, sparkle: "point" },
  { left: "78%", top: "24%", size: "0.22rem", delay: 2.1, glow: "rgba(255,255,255,0.9)", driftX: 14, driftY: -14, mobile: false, sparkle: "cross" },
  { left: "84%", top: "44%", size: "0.15rem", delay: 0.6, glow: "rgba(191,219,254,0.86)", driftX: 10, driftY: 12, mobile: false, sparkle: "point" },
  { left: "88%", top: "18%", size: "0.18rem", delay: 1.7, glow: "rgba(196,181,253,0.86)", driftX: -10, driftY: 18, mobile: false, sparkle: "cross" },
  { left: "92%", top: "62%", size: "0.14rem", delay: 0.2, glow: "rgba(255,255,255,0.84)", driftX: -8, driftY: -12, mobile: false, sparkle: "point" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0C0C0C] overflow-hidden border-t border-white/10 isolate">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_50%_54%,rgba(168,85,247,0.11),transparent_30%),radial-gradient(circle_at_50%_62%,rgba(59,130,246,0.1),transparent_34%),radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_58%)] opacity-85" />
        {auroraBlobs.map((blob, index) => (
          <motion.div
            key={index}
            aria-hidden="true"
            className={`absolute rounded-full blur-2xl ${blob.className} opacity-85 sm:opacity-95`}
            style={{ background: blob.gradient }}
            animate={blob.animate}
            transition={blob.transition}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(12,12,12,0.1),rgba(12,12,12,0.45)_44%,rgba(12,12,12,0.82)_72%,rgba(12,12,12,0.96)_100%)]" />

        <div className="absolute inset-0">
          {lightColumns.map((column, index) => (
            <motion.div
              key={index}
              aria-hidden="true"
              className={`absolute bottom-[-10%] rounded-full blur-3xl ${index === 1 ? "hidden sm:block" : ""} ${index === 3 ? "hidden lg:block" : ""}`}
              style={{
                left: column.left,
                width: column.width,
                height: column.height,
                background: column.gradient,
                opacity: 0.52,
                filter: "blur(44px)",
                transform: "translateX(-50%)",
              }}
              animate={column.animate}
              transition={column.transition}
            />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className={`absolute ${particle.mobile ? "sm:hidden" : "hidden sm:block"}`}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: 0.34,
              }}
              animate={{
                y: [0, particle.driftY, 0],
                x: [0, particle.driftX, 0],
                opacity: [0.18, 0.74, 0.18],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 3.2 + index * 0.12,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                className="absolute left-1/2 top-1/2 block rounded-full"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate(-50%, -50%)",
                  background: `radial-gradient(circle, ${particle.glow} 0%, rgba(255,255,255,0.3) 34%, transparent 72%)`,
                  boxShadow: `0 0 10px ${particle.glow}, 0 0 24px ${particle.glow}`,
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                style={{
                  width: "28%",
                  height: "28%",
                  opacity: 0.95,
                  boxShadow: `0 0 8px ${particle.glow}`,
                }}
              />
              {particle.sparkle === "cross" ? (
                <>
                  <span
                    className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: "240%",
                      height: "1px",
                      background: `linear-gradient(90deg, transparent, ${particle.glow}, transparent)`,
                      boxShadow: `0 0 12px ${particle.glow}`,
                    }}
                  />
                  <span
                    className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rotate-90"
                    style={{
                      width: "240%",
                      height: "1px",
                      background: `linear-gradient(90deg, transparent, ${particle.glow}, transparent)`,
                      boxShadow: `0 0 12px ${particle.glow}`,
                    }}
                  />
                </>
              ) : null}
            </motion.span>
          ))}

          <motion.span
            className="absolute rounded-full bg-white sm:hidden"
              style={{
                left: "18%",
                top: "24%",
                width: "0.24rem",
                height: "0.24rem",
                opacity: 0.12,
                boxShadow: "0 0 10px rgba(191,219,254,0.44)",
              }}
            animate={{ y: [0, -10, 0], opacity: [0.06, 0.18, 0.06], scale: [1, 1.18, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute rounded-full bg-white sm:hidden"
            style={{
              right: "16%",
              top: "30%",
              width: "0.26rem",
              height: "0.26rem",
              opacity: 0.1,
              boxShadow: "0 0 10px rgba(196,181,253,0.44)",
            }}
            animate={{ y: [0, 12, 0], opacity: [0.05, 0.16, 0.05], scale: [1, 1.14, 1] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">06 — Contact</div>
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
            <a href="#" className="btn-ghost">View More</a>
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
