import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jack — 3D Creator" },
      { name: "description", content: "Jack — a 3D creator driven by crafting striking and unforgettable projects." },
      { property: "og:title", content: "Jack — 3D Creator" },
      { property: "og:description", content: "Jack — a 3D creator driven by crafting striking and unforgettable projects." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
