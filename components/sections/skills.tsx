import { SkillGroup } from "@/types";

const groups: SkillGroup[] = [
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "MongoDB", "MySQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "Docker (learning)"],
  },
  {
    label: "Currently",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
      <div className="space-y-5">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-surface p-4"
          >
            <p className="mb-3 text-sm uppercase tracking-wider text-muted">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
