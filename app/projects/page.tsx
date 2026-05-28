import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
  description: "Selected backend and full-stack projects by Rahul M",
};

export default function ProjectsPage() {
  return (
    <section className="py-14">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {allProjects.map((project) => (
          <article
            key={project._id}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm text-accent">
              <Link href={project.github} target="_blank">
                GitHub
              </Link>
              <Link href={project.live} target="_blank">
                Live
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
