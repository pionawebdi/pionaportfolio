"use client";
import { Reveal } from "./Reveal";
import { Zap, Eye, Rocket, FileText, Repeat } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Faster Idea Exploration", desc: "수십 가지 컨셉을 짧은 시간 안에 시각화하고 비교합니다." },
  { icon: Eye, title: "Diverse Visual Directions", desc: "한정된 시간 안에도 폭넓은 비주얼 옵션을 시도할 수 있습니다." },
  { icon: Rocket, title: "Quick Landing Drafts", desc: "초안 랜딩페이지를 빠르게 만들고 즉시 피드백을 받습니다." },
  { icon: FileText, title: "Better Content Structure", desc: "카피와 정보 구조를 함께 다듬어 완성도를 끌어올립니다." },
  { icon: Repeat, title: "Faster Prototype Iteration", desc: "프로토타입을 반복적으로 개선하며 최적의 경험을 찾습니다." },
];

export function WhyAI() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">06 — Why Generative AI</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight mb-4"
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Why I work <br /> with generative AI.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/55 max-w-2xl mb-16 text-[16px] leading-relaxed">
            AI는 디자이너의 자리를 대체하지 않습니다. 다만 디자인을 더 넓게, 더 빠르게,
            더 유연하게 만들어줍니다.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="glass p-7 h-full hover:border-[#8EA7FF]/70 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#8EA7FF] transition-all duration-500 group-hover:w-full" />
                <div className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center bg-white text-black transition-transform duration-500 group-hover:-translate-y-1">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
