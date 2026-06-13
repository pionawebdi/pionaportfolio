"use client";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "3D Motion Portfolio Landing Page",
    desc: "다크 에디토리얼 레이아웃과 스크롤 모션을 결합한 크리에이터용 포트폴리오 랜딩페이지 컨셉.",
    role: "UI Design · Visual Direction",
    tools: ["Figma", "Lovable", "Midjourney"],
    tags: ["Landing", "3D", "Motion"],
    grad: "linear-gradient(135deg, #7C5CFF 0%, #00D1FF 100%)",
  },
  {
    num: "02",
    title: "AI-assisted Brand Landing Page",
    desc: "브랜드 톤을 정의하고 AI로 시각 자산을 빠르게 생성해 완성한 브랜드 사이트 컨셉.",
    role: "UI Design · UX Writing · AI Workflow",
    tools: ["Figma", "ChatGPT", "Photoshop"],
    tags: ["Brand", "AI", "Web"],
    grad: "linear-gradient(135deg, #FF59C7 0%, #7C5CFF 100%)",
  },
  {
    num: "03",
    title: "UI Concept Exploration with Generative AI",
    desc: "생성형 AI로 다양한 비주얼 디렉션을 빠르게 탐색해 정리한 UI 컨셉 시리즈.",
    role: "Visual Direction · AI Ideation",
    tools: ["Midjourney", "Figma", "Lovable"],
    tags: ["Concept", "Exploration", "AI"],
    grad: "linear-gradient(135deg, #00D1FF 0%, #FF59C7 100%)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">05 — Concept Work</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Selected projects.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/55 max-w-2xl mb-16 text-[16px] leading-relaxed">
            UI 디자인 사고와 생성형 AI를 결합해 만든 컨셉 작업들입니다.
          </p>
        </Reveal>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="glass-strong group p-6 md:p-8 hover:border-[#E7F064]/70 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#E7F064] transition-all duration-700 group-hover:w-full" />
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Visual */}
                  <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden bg-[#07090D] border border-white/10">
                    <div className="absolute inset-0 noise opacity-30" />
                    <div className="absolute inset-x-0 top-0 h-1" style={{ background: p.grad }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#111722] border border-white/14 w-3/4 aspect-video group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-700 p-3 rounded-lg">
                        <div className="flex gap-1.5 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-2/3 rounded-full bg-white/30" />
                          <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
                          <div className="grid grid-cols-3 gap-1 mt-2">
                            {Array.from({ length: 3 }).map((_, k) => (
                              <div key={k} className="aspect-square rounded bg-white/15" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 text-white/80 text-xs font-mono">{p.num}</div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-white font-semibold leading-tight"
                        style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)" }}>
                        {p.title}
                      </h3>
                      <div className="shrink-0 w-10 h-10 rounded-md bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight className="w-4 h-4 text-black" />
                      </div>
                    </div>
                    <p className="text-white/65 leading-relaxed mb-5 text-[15px]">{p.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Role</div>
                        <div className="text-white/85 text-sm">{p.role}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Tools</div>
                        <div className="text-white/85 text-sm">{p.tools.join(" · ")}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] px-3 py-1 rounded-md border border-white/12 bg-white/5 text-white/70">#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
