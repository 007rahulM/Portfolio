"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-16">
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-2xl font-semibold"
      >
        About
      </motion.h2>
      <p className="max-w-3xl text-text/85">
        I started with Node.js because I wanted to understand what happens under
        the hood: routing, auth, databases, and the hard trade-offs behind
        scale. That curiosity turned into a craft. Now I&apos;m applying the
        same systems thinking to the frontend so I can ship complete products,
        not half-built ideas.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge>Learning Next.js + TypeScript</Badge>
        <Badge>Open to Full-time Roles</Badge>
        <Badge>Available for Freelance</Badge>
      </div>
    </section>
  );
}
