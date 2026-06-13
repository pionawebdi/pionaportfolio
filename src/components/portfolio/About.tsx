"use client";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">01 — About</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            디자인의 직관, <br /> AI의 속도로 확장하다.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <Reveal delay={0.15}>
            <p className="text-white/75 leading-[1.9] text-[17px]">
              레이아웃, 사용성, 시각적 위계, 사용자 흐름을 기반으로 인터페이스를 설계하는
              <span className="text-white font-semibold"> UI/UX 디자이너</span>입니다.
              아름다운 화면을 넘어, 사용자가 직관적으로 이해하고 자연스럽게 목적에 도달하는 경험을 만드는 데 집중합니다.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-white/65 leading-[1.9] text-[17px]">
              생성형 AI는 디자인을 대체하는 기술이 아니라, 디자이너의 가능성을 확장하는 새로운 협업 방식입니다. 
		아이디어를 신속하게 탐색하고, 시각적 방향성을 폭넓게 실험하며, 
		프로토타입을 즉각적으로 구체화할 수 있도록 돕는
		<span className="text-white font-semibold"> 확장된 디자인 파트너</span>입니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "20", l: "Years in UIUX" },
            { v: "50+", l: "Projects" },
            { v: "10+", l: "AI Tools" },
            { v: "∞", l: "Iterations" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={0.1 * i}>
              <div className="glass p-6 text-center group hover:border-[#E7F064]/70 transition-all duration-500">
                <div className="text-gradient-neon font-bold text-4xl mb-1"
                  style={{ fontFamily: "Wanted Sans Variable, sans-serif" }}>{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
