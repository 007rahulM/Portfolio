import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { skillGroups } from "@/lib/site";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Stack</p>
        <h2 className="text-3xl font-display font-semibold">Skills</h2>
        <p className="max-w-2xl text-muted">
          Focused on backend architecture, with a growing toolkit for design and
          UI engineering.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title} className="space-y-4">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
