"use client";
import { Reveal } from "./Reveal";
import { Mail, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-[#080A0F] overflow-hidden border-t border-white/10">
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
            <a href="mailto:hello@example.com" className="btn-neon">
              <Mail className="w-4 h-4" /> hello@example.com <ArrowUpRight className="w-4 h-4" />
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
          <div>© 2026 UI × AI Portfolio. Designed with insight, built with AI.</div>
          <div className="font-mono">v1.0 · Seoul, KR</div>
        </div>
      </footer>
    </section>
  );
}
