"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rk096327945@gmail.com");
      setStatus("Email copied to clipboard");
      setTimeout(() => setStatus(null), 2200);
    } catch {
      setStatus("Unable to copy email");
      setTimeout(() => setStatus(null), 2200);
    }
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
      <p className="max-w-2xl text-text/85">
        I&apos;m currently open to full-time roles and freelance projects. If
        you have something interesting, let&apos;s talk.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Mail size={16} /> rk096327945@gmail.com
        </button>
        <Link
          href="https://github.com/007rahulM"
          target="_blank"
          aria-label="Github profile"
          className="rounded-full border border-border p-2 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Github size={18} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rahulmofficial/"
          target="_blank"
          aria-label="LinkedIn profile"
          className="rounded-full border border-border p-2 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Linkedin size={18} />
        </Link>
      </div>
      {status ? (
        <div className="mt-4 inline-flex rounded-md border border-border bg-surface px-3 py-2 text-sm">
          {status}
        </div>
      ) : null}
    </section>
  );
}
