"use client";
import { Reveal } from "./Reveal";

const tools = [
  { name: "Figma", cat: "Design" },
  { name: "Photoshop", cat: "Design" },
  { name: "Illustrator", cat: "Design" },
  { name: "ChatGPT", cat: "AI" },
  { name: "Lovable", cat: "AI Build" },
  { name: "Midjourney", cat: "AI Visual" },
  { name: "Notion", cat: "Docs" },
  { name: "Framer", cat: "Motion" },
];

export function Tools() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">04 — Tools</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight mb-14"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            My toolkit.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="glass px-5 py-4 flex items-center gap-3 hover:border-[#E7F064]/70 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold bg-white text-black transition-transform duration-500 group-hover:rotate-6">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest">{t.cat}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
