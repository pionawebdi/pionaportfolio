"use client";
import { Reveal } from "./Reveal";
import {
  LayoutGrid, Workflow, Palette, Component,
  MonitorSmartphone, Sparkles, Cpu, PenLine,
} from "lucide-react";

const items = [
  { icon: LayoutGrid, title: "UI Design", desc: "명확한 시각 위계와 일관된 컴포넌트로 한눈에 이해되는 화면을 만듭니다." },
  { icon: Workflow, title: "UX Structure", desc: "사용자 흐름과 정보 구조를 설계해 자연스러운 경험을 빌드합니다." },
  { icon: Palette, title: "Visual Direction", desc: "브랜드와 무드에 맞는 톤, 컬러, 타이포그래피 방향을 잡습니다." },
  { icon: Component, title: "Design Systems", desc: "재사용 가능한 토큰과 컴포넌트로 확장 가능한 시스템을 구축합니다." },
  { icon: MonitorSmartphone, title: "Landing Page Design", desc: "전환을 이끄는 임팩트 있고 모션감 있는 랜딩페이지를 디자인합니다." },
  { icon: Sparkles, title: "Generative AI Workflow", desc: "AI 도구를 디자인 프로세스에 통합해 작업 속도와 다양성을 끌어올립니다." },
  { icon: Cpu, title: "AI-assisted Prototyping", desc: "AI로 빠른 컨셉과 실제 동작하는 프로토타입을 동시에 만듭니다." },
  { icon: PenLine, title: "UX Writing", desc: "사용자가 이해하기 쉬운 마이크로카피와 톤 앤 보이스를 작성합니다." },
];

export function Strengths() {
  return (
    <section id="strengths" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">02 — Core Strengths</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight mb-16"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            What I bring <br /> to every project.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="glass p-6 h-full group hover:border-[#E7F064]/70 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#E7F064] transition-all duration-500 group-hover:w-full" />
                <div className="relative">
                  <div className="inline-flex w-11 h-11 rounded-lg items-center justify-center mb-5 bg-white text-black transition-transform duration-500 group-hover:rotate-6">
                    <it.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{it.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
