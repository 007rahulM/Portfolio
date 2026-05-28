import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "Notes on backend systems, APIs, and frontend learning",
};

export default function BlogPage() {
  const posts = [...allPosts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  return (
    <section className="py-14">
      <h1 className="mb-8 text-3xl font-bold">Writing</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="block rounded-xl border border-border bg-surface p-5 transition hover:border-accent"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-1 text-sm text-muted">
              {formatDate(post.date)} · {post.readingTime}
            </p>
            <p className="mt-3 text-sm text-text/85">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
