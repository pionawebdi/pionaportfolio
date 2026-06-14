"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
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
      className="relative pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">03 — Concept Work</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="text-gradient font-bold leading-[1.05] tracking-tight mb-4"
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Design Experiments
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/55 max-w-2xl mb-12 text-[16px] leading-relaxed">
            UI 디자인 사고를 기반으로,
            <br />
            생성형 AI 도구를 워크플로우 곳곳에 결합해
            <br />
            더 빠르고 유연한 결과물을 만듭니다.
          </p>
        </Reveal>
      </div>

      <div className="space-y-3">
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
