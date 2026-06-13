"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((ch, i) => (
        <Char key={i} progress={scrollYProgress} i={i} total={total}>
          {ch}
        </Char>
      ))}
    </p>
  );
}

function Char({
  children,
  progress,
  i,
  total,
}: {
  children: string;
  progress: any;
  i: number;
  total: number;
}) {
  const start = i / total;
  const end = (i + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span style={{ opacity: 0 }}>{children}</span>
      <motion.span
        style={{ opacity, position: "absolute", left: 0, top: 0 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
