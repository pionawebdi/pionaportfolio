"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "./data";
import { LiveProjectButton } from "./LiveProjectButton";

export function ProjectsSection() {
  return (
    <section
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div className="max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.num}
            index={i}
            total={projects.length}
            project={p}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.div
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8"
        style={{
          scale,
          top: `calc(6rem + ${index * 28}px)`,
          backgroundColor: "#0C0C0C",
          borderColor: "#D7E2EA",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className="font-black"
              style={{ color: "#D7E2EA", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {project.num}
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="font-light uppercase tracking-widest"
                style={{ color: "#D7E2EA", opacity: 0.6, fontSize: "clamp(0.7rem, 1vw, 1rem)" }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase"
                style={{ color: "#D7E2EA", fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-10 gap-3 sm:gap-4 md:gap-6">
          <div className="sm:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.col1a}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1b}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="sm:col-span-6">
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ minHeight: "clamp(300px, 40vw, 590px)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
