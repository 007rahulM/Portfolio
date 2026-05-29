import { allProjects } from "contentlayer/generated";

import { ProjectCard } from "@/components/sections/projects";

export default function ProjectsPage() {
  const projects = [...allProjects].sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title),
  );

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Pinned Repositories
        </p>
        <h1 className="text-4xl font-display font-semibold">Projects</h1>
        <p className="max-w-2xl text-muted">
          A curated list of pinned repositories from GitHub that highlight
          backend systems, automation, and the move toward full-stack craft.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            stack={project.stack ?? []}
            repo={project.repo}
            live={project.live ?? undefined}
            year={project.year}
          />
        ))}
      </section>
    </main>
  );
}
