"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Avatar } from "@/components/shared/avatar";
import { AnimatedText } from "@/components/shared/animated-text";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="home"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
      }}
      className="grid gap-10 pb-20 pt-14 md:grid-cols-2 md:items-center"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Rahul M
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          I build backends that scale. I&apos;m learning frontends that sing.
        </h1>
        <div className="mt-4">
          <AnimatedText />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#projects">View my work</LinkButton>
          <LinkButton
            href="/resume.pdf"
            variant="ghost"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </LinkButton>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex justify-center"
      >
        <Avatar />
      </motion.div>
    </motion.section>
  );
}
