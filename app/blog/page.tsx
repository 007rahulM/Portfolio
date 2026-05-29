import Link from "next/link";

import { allPosts } from "contentlayer/generated";

import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Learning Journal
        </p>
        <h1 className="text-4xl font-display font-semibold">Blog</h1>
        <p className="max-w-2xl text-muted">
          Short notes on building in public, from API design to UI craft.
        </p>
      </header>
      <section className="grid gap-6">
        {posts.map((post) => (
          <Card key={post._id} className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {formatDate(post.date)}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl font-display font-semibold transition hover:text-accent"
              >
                {post.title}
              </Link>
              <p className="text-muted">{post.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(post.tags ?? []).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
