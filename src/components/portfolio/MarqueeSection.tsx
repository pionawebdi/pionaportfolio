"use client";
import { useEffect, useRef } from "react";
import { marqueeImages } from "./data";

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1 = marqueeImages.slice(0, 11);
  const row2 = marqueeImages.slice(11);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      const v = offset - 200;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${v}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-v}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tripled1 = [...row1, ...row1, ...row1];
  const tripled2 = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}
    >
      <div ref={row1Ref} className="flex gap-3" style={{ willChange: "transform" }}>
        {tripled1.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: "transform" }}>
        {tripled2.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </section>
  );
}
