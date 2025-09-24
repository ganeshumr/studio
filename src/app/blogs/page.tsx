import { headers } from "next/headers";
import { posts as initialPosts, categories } from "@/lib/data";
import BlogListClient from "@/components/blog/blog-list-client";

export default async function BlogListPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);

  if (!baseUrl) {
    throw new Error(
      "Base URL not defined. Set NEXT_PUBLIC_SITE_URL or check VERCEL_URL."
    );
  }

  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch posts from API");
  }

  const posts = await res.json();
  console.log(posts);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          JaaGa Insights
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your source for expert analysis and practical advice on Indian real
          estate, property law, and digital ownership.
        </p>
      </div>
      <BlogListClient posts={posts} />
    </div>
  );
}
