"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Backend Engineer",
  "API Architect",
  "Open Source Contributor",
  "Available for Freelance",
];

export function AnimatedText() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((current) => (current + 1) % roles.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-8 overflow-hidden text-base text-muted">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={reduceMotion ? false : { y: 10, opacity: 0 }}
          animate={reduceMotion ? {} : { y: 0, opacity: 1 }}
          exit={reduceMotion ? {} : { y: -10, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
