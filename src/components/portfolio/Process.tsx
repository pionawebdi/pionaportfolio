"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import img01 from "@/assets/img01.png";
import img02 from "@/assets/img02.png";
import img03 from "@/assets/img03.jpg";
import img04 from "@/assets/img04.png";
import img05 from "@/assets/img05.png";
import img06 from "@/assets/img06.png";
import img07 from "@/assets/img07.png";
import img08 from "@/assets/img08.jpg";
import img09 from "@/assets/img09.png";
import img10 from "@/assets/img10.png";
import img11 from "@/assets/img11.png";
import img12 from "@/assets/img12.png";
import img13 from "@/assets/img13.png";
import img14 from "@/assets/img14.png";
import img15 from "@/assets/img15.png";
import img16 from "@/assets/img16.png";
import img17 from "@/assets/img17.png";
import img18 from "@/assets/img18.png";
import img19 from "@/assets/img19.png";
import img20 from "@/assets/img20.png";

const marqueeImages = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
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
