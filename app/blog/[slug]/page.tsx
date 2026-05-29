import type { Metadata } from "next";

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { MDXContent } from "@/components/shared/mdx";
import { Tag } from "@/components/ui/tag";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: { slug: string };
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export function generateMetadata({ params }: PageProps): Metadata {
  const post = allPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Rahul M`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = allPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-24 pt-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {formatDate(post.date)}
        </p>
        <h1 className="text-4xl font-display font-semibold">{post.title}</h1>
        <p className="text-lg text-muted">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {(post.tags ?? []).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>
      <article className="space-y-8">
        <MDXContent code={post.body.code} />
      </article>
    </main>
  );
}
