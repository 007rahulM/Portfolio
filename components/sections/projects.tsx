"use client";

import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { allProjects } from "contentlayer/generated";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const featured = allProjects.filter((project) => project.featured);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Link href="/projects" className="text-sm text-accent hover:underline">
          View all
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((project) => (
          <motion.article
            key={project._id}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -6, boxShadow: "0 0 24px rgba(45,212,191,0.2)" }
            }
            className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/60"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.featured ? (
                <span className="rounded-full bg-accent/20 px-2 py-1 text-xs text-accent">
                  Featured
                </span>
              ) : null}
            </div>
            <p className="text-sm text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <Link
                href={project.github}
                target="_blank"
                aria-label={`${project.title} Github`}
                className="rounded-full border border-border p-2 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github size={16} />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                aria-label={`${project.title} live link`}
                className="rounded-full border border-border p-2 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Link2 size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
