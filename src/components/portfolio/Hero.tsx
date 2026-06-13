"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Layers, Wand2, Frame } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="aurora-bg noise relative overflow-hidden min-h-[100svh] flex items-center pt-28 pb-24">
      {/* Floating UI panels */}
      <motion.div style={{ y: y1 }} className="hidden md:block absolute top-[18%] left-[6%] z-10 float-y">
        <div className="glass-strong w-[220px] p-4 -rotate-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          </div>
          <div className="h-2 w-3/4 rounded-full bg-white/15 mb-2" />
          <div className="h-2 w-1/2 rounded-full bg-white/10 mb-4" />
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md"
                style={{ background: `linear-gradient(135deg, rgba(124,92,255,${0.2 + i * 0.08}), rgba(0,209,255,${0.15 + i * 0.05}))` }} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="hidden md:block absolute top-[14%] right-[5%] z-10 float-y-slow">
        <div className="glass-strong w-[260px] p-4 rotate-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-white/60">AI Prompt</span>
            <Wand2 className="w-3.5 h-3.5 text-white/60" />
          </div>
          <div className="text-sm text-white/90 leading-relaxed mb-3">
            "Futuristic 3D dashboard, soft neon glow, glassmorphism"
          </div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">UI</span>
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">3D</span>
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">Neon</span>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: y3 }} className="hidden lg:block absolute bottom-[12%] left-[10%] z-10 float-y">
        <div className="glass w-[180px] p-3 rotate-3">
          <Frame className="w-4 h-4 text-cyan-300 mb-2" />
          <div className="h-1.5 w-full rounded-full bg-white/10 mb-1.5" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
        </div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="hidden lg:block absolute bottom-[18%] right-[12%] z-10 float-y-slow">
        <div className="glass w-[200px] p-3 -rotate-3">
          <Layers className="w-4 h-4 text-fuchsia-300 mb-2" />
          <div className="flex items-end gap-1 h-12">
            {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm"
                style={{ height: `${h * 100}%`, background: `linear-gradient(180deg, #7C5CFF, #00D1FF)` }} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Central orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity }}
      >
        <div className="relative w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]">
          <div className="absolute inset-0 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #7C5CFF 0%, #00D1FF 50%, transparent 70%)" }} />
          <div className="absolute inset-[8%] rounded-full border border-white/10 spin-slow" />
          <div className="absolute inset-[20%] rounded-full border border-white/10 spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
          <div className="absolute inset-[32%] rounded-full border border-white/15" />
        </div>
      </motion.div>

      {/* Center content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 mb-8 text-xs sm:text-sm text-white/80"
        >
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for new projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-bold tracking-tight leading-[1.05]"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
        >
          UI Designer <span className="text-gradient-neon">×</span> Generative AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-white/85 font-medium"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
        >
          사용자 경험을 설계하고, 생성형 AI로 더 빠르게 시각화하는 디자이너
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-4 text-white/55 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
        >
          I design intuitive digital experiences and use generative AI to accelerate
          ideation, visual exploration, prototyping, and landing page creation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a href="#projects" className="btn-neon">
            <Sparkles className="w-4 h-4" /> View Portfolio
          </a>
          <a href="#contact" className="btn-ghost">
            <Mail className="w-4 h-4" /> Contact Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
