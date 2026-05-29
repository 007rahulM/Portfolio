import type { NavItem, SkillGroup } from "@/types";

export const siteConfig = {
  name: "Rahul M",
  title:
    "Backend engineer who architects APIs, integrates AI, and is becoming a full-stack developer one component at a time.",
  location: "Bengaluru, India",
  email: "rk096327945@gmail.com",
  github: "https://github.com/007rahulM",
} as const;

export const navItems: NavItem[] = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/007rahulM" },
  { label: "Email", href: "mailto:rk096327945@gmail.com" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Auth & RBAC"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Product Tools",
    items: ["Cloudinary", "Vercel", "Tailwind CSS"],
  },
  {
    title: "Applied AI",
    items: ["Workflow automation", "AI-assisted features", "Prompt design"],
  },
];
