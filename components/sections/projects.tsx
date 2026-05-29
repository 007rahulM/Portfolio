import Link from "next/link";

import { allProjects } from "contentlayer/generated";

import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({
  title,
  description,
  stack,
  repo,
  year,
}: {
  title: string;
  description: string;
  stack: string[];
  repo: string;
  year?: string;
}) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {year ? <span className="text-xs text-muted">{year}</span> : null}
      </div>
      <p className="text-sm text-muted">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
      <Link
        href={repo}
        className="text-sm font-medium text-accent hover:underline"
      >
        View repository
      </Link>
    </Card>
  );
}

export function ProjectsSection() {
  const featured = allProjects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Selected Work
        </p>
        <h2 className="text-3xl font-display font-semibold">Projects</h2>
        <p className="max-w-2xl text-muted">
          A focused set of products and experiments that highlight API
          architecture, automation, and full-stack delivery.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            stack={project.stack ?? []}
            repo={project.repo}
            year={project.year}
          />
        ))}
      </div>
      <Link href="/projects" className="text-sm text-accent hover:underline">
        View all projects →
      </Link>
    </section>
  );
}
