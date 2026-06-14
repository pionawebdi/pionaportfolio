"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const baseUrl = import.meta.env.BASE_URL;

const marqueeImages = [
  `${baseUrl}concept-work/07.jpeg`,
  `${baseUrl}concept-work/13.jpeg`,
  `${baseUrl}concept-work/05.jpeg`,
  `${baseUrl}concept-work/01.jpeg`,
  `${baseUrl}concept-work/03.jpeg`,
  `${baseUrl}concept-work/13.jpeg`,
  `${baseUrl}concept-work/01.jpeg`,
  `${baseUrl}concept-work/07.jpeg`,
  `${baseUrl}concept-work/05.jpeg`,
  `${baseUrl}concept-work/03.jpeg`,
  `${baseUrl}concept-work/01.jpeg`,
  `${baseUrl}concept-work/13.jpeg`,
];

const rowOne = marqueeImages.slice(0, 11);
const rowTwo = marqueeImages.slice(11);
const repeat = [0, 1, 2];

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.offsetTop ?? 0;
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rowOneX = offset - 200;
  const rowTwoX = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative pt-28 sm:pt-36 md:pt-44 pb-10 overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">03 — Concept Work</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="text-gradient font-bold leading-[1.02] tracking-tight mb-5"
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            Design Experiments
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/55 max-w-3xl mb-16 sm:mb-20 text-[16px] leading-relaxed">
            UI 디자인 사고를 기반으로, 생성형 AI 도구를
            <br className="md:hidden" />
            워크플로우 곳곳에 결합해 더 빠르고 유연한 결과물을 만듭니다.
          </p>
        </Reveal>
      </div>

      <div className="space-y-3 mt-2 sm:mt-4">
        <div className="flex gap-3 will-change-transform" style={{ transform: `translate3d(${rowOneX}px, 0, 0)` }}>
          {repeat.map((repeatIndex) =>
            rowOne.map((src, index) => (
              <div key={`${repeatIndex}-${src}`} className="shrink-0">
                <img
                  src={src}
                  alt={`Marquee preview ${index + 1}`}
                  loading="lazy"
                  className="w-[420px] h-[270px] rounded-2xl object-cover bg-black/20"
                />
              </div>
            )),
          )}
        </div>

        <div className="flex gap-3 will-change-transform" style={{ transform: `translate3d(${rowTwoX}px, 0, 0)` }}>
          {repeat.map((repeatIndex) =>
            rowTwo.map((src, index) => (
              <div key={`${repeatIndex}-${src}`} className="shrink-0">
                <img
                  src={src}
                  alt={`Marquee preview ${index + 12}`}
                  loading="lazy"
                  className="w-[420px] h-[270px] rounded-2xl object-cover bg-black/20"
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
