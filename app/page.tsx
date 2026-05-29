import { ContactSection } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
