"use client";
import { FadeIn } from "./FadeIn";
import { services } from "./data";

export function ServicesSection() {
  return (
    <section
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-0"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid rgba(12, 12, 12, 0.15)",
                ...(i === services.length - 1 ? { borderBottom: "1px solid rgba(12, 12, 12, 0.15)" } : {}),
              }}
            >
              <div
                className="font-black shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {s.num}
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                <h3
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: "#0C0C0C", fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
