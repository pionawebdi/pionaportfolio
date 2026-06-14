import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { Process } from "@/components/portfolio/Process";
import { Strengths } from "@/components/portfolio/Strengths";
import { Tools } from "@/components/portfolio/Tools";
import { WhyAI } from "@/components/portfolio/WhyAI";
import { FloatingChatButton } from "@/components/portfolio/FloatingChatButton";
import "./styles.css";

function GithubPagesApp() {
  return (
    <main id="top" style={{ overflowX: "clip", backgroundColor: "#05060A" }}>
      <Nav />
      <Hero />
      <About />
      <Strengths />
      <Process />
      <Tools />
      <WhyAI />
      <Contact />
      <FloatingChatButton />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GithubPagesApp />
  </StrictMode>,
);
