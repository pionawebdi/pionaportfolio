"use client";
import { Reveal } from "./Reveal";
import {
  Building2,
  LayoutDashboard,
  Smartphone,
  MonitorSmartphone,
  Sparkles,
  Blocks,
  BadgeCheck,
  Megaphone,
} from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Enterprise Platform",
    desc: "복잡한 업무 구조와 권한 체계를 고려한 B2B·관리자 플랫폼 UX/UI 설계",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboard",
    desc: "데이터 시각화와 사용 흐름을 최적화한 SaaS 대시보드 및 어드민 화면 설계",
  },
  {
    icon: Smartphone,
    title: "Mobile Web/App",
    desc: "모바일 환경에 최적화된 Web/App UX 구조 설계 및 UI 제작",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web",
    desc: "다양한 디바이스와 해상도에 유연하게 대응하는 반응형 웹 구축",
  },
  {
    icon: Sparkles,
    title: "Generative AI Design",
    desc: "생성형 AI를 활용한 리서치, 아이디어 발굴, UX/UI 설계 및 디자인 고도화",
  },
  {
    icon: Blocks,
    title: "Design System",
    desc: "일관된 브랜드 경험과 효율적인 협업을 위한 컴포넌트·가이드 구축",
  },
  {
    icon: BadgeCheck,
    title: "Brand & Logo",
    desc: "서비스 아이덴티티를 명확하게 전달하는 로고 및 브랜드 그래픽 작업",
  },
  {
    icon: Megaphone,
    title: "Marketing Graphic",
    desc: "프로모션, 배너, SNS, 랜딩페이지 등 목적에 맞는 시각 디자인 작업",
  },
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
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
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
