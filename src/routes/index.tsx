import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Strengths } from "@/components/portfolio/Strengths";
import { Process } from "@/components/portfolio/Process";
import { Tools } from "@/components/portfolio/Tools";
import { Projects } from "@/components/portfolio/Projects";
import { WhyAI } from "@/components/portfolio/WhyAI";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UI Designer × Generative AI — Portfolio" },
      { name: "description", content: "사용자 경험을 설계하고, 생성형 AI로 더 빠르게 시각화하는 UI 디자이너의 포트폴리오." },
      { property: "og:title", content: "UI Designer × Generative AI" },
      { property: "og:description", content: "사용자 경험을 설계하고, 생성형 AI로 더 빠르게 시각화하는 디자이너." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ overflowX: "clip", backgroundColor: "#05060A" }}>
      <Nav />
      <Hero />
      <About />
      <Strengths />
      <Process />
      <Tools />
      <Projects />
      <WhyAI />
      <Contact />
    </main>
  );
}
