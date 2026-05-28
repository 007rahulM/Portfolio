import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allPosts.find((item) => item.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: ["/og-default.svg"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto max-w-3xl py-12">
      <Link href="/blog" className="text-sm text-accent hover:underline">
        ← Back to blog
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-muted">
        {formatDate(post.date)} · {post.readingTime}
      </p>
      <div className="prose-custom mt-8">
        <MDXContent />
      </div>
    </article>
  );
}
