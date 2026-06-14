"use client";
import { Reveal } from "./Reveal";

const tools = [
  { name: "Figma", cat: "Design", domain: "figma.com" },
  { name: "Photoshop", cat: "Design", domain: "adobe.com" },
  { name: "Illustrator", cat: "Design", domain: "adobe.com" },
  { name: "ChatGPT", cat: "AI", domain: "openai.com" },
  { name: "Lovable", cat: "AI Build", domain: "lovable.dev" },
  { name: "Midjourney", cat: "AI Visual", domain: "midjourney.com" },
  { name: "Notion", cat: "Docs", domain: "notion.so" },
  { name: "Framer", cat: "Motion", domain: "framer.com" },
  { name: "GitHub", cat: "Dev", domain: "github.com" },
  { name: "Claude Code", cat: "AI Code", domain: "anthropic.com" },
  { name: "Codex", cat: "AI Code", domain: "openai.com" },
  { name: "v0", cat: "AI Build", domain: "vercel.com" },
];

function ToolBadge({ name, domain }: { name: string; domain: string }) {
  const shortName = name.replace(/\s+/g, "");

  return (
    <div className="w-8 h-8 rounded-md border border-white/10 bg-white/95 text-black flex items-center justify-center overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={`${name} favicon`}
        className="w-5 h-5 object-contain"
        loading="lazy"
        onError={(event) => {
          const target = event.currentTarget;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent && !parent.querySelector("[data-tool-fallback]")) {
            const fallback = document.createElement("span");
            fallback.setAttribute("data-tool-fallback", "true");
            fallback.className = "text-[10px] font-semibold tracking-tight text-black";
            fallback.textContent = shortName.slice(0, 2).toUpperCase();
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
}

export function Tools() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">04 — Tools</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-gradient font-bold leading-[1.1] tracking-tight mb-14"
            style={{ fontFamily: "Wanted Sans Variable, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            My toolkit.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="glass px-5 py-4 flex items-center gap-3 hover:border-[#E7F064]/70 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div className="transition-transform duration-500 group-hover:rotate-6">
                  <ToolBadge name={t.name} domain={t.domain} />
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
