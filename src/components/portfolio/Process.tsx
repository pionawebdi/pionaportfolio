"use client";
import { Reveal } from "./Reveal";
import { Search, LayoutDashboard, Palette, Brain, Layers, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Search, label: "Research", desc: "문제 정의, 사용자 이해, 레퍼런스 수집" },
  { icon: LayoutDashboard, label: "UI Structure", desc: "정보 구조, 와이어프레임, 플로우 설계" },
  { icon: Palette, label: "Visual Direction", desc: "톤, 컬러, 타이포그래피 방향 정립" },
  { icon: Brain, label: "AI Ideation", desc: "Midjourney·ChatGPT로 빠른 시각 탐색" },
  { icon: Layers, label: "Prototype", desc: "Figma·Lovable로 실제 인터랙션 구현" },
  { icon: CheckCircle2, label: "Refine", desc: "디테일 다듬기, 피드백 반영, 출시" },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">03 — Process</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            AI-enhanced <br /> design process.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/55 max-w-2xl mb-20 text-[16px] leading-relaxed">
            전통적인 UI 디자인 사고를 기반으로, 생성형 AI 도구를 워크플로우 곳곳에 결합해
            더 빠르고 유연한 결과물을 만듭니다.
          </p>
        </Reveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,92,255,0.5), rgba(0,209,255,0.5), rgba(255,89,199,0.5), transparent)" }} />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="relative text-center">
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                      style={{ background: `linear-gradient(135deg, hsl(${250 + i * 20}, 80%, 60%), hsl(${200 + i * 25}, 80%, 60%))` }} />
                    <div className="glass-strong relative w-full h-full rounded-2xl flex items-center justify-center">
                      <s.icon className="w-7 h-7 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full glass-strong text-[10px] flex items-center justify-center text-white/70 font-mono">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{s.label}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
