import { headers } from "next/headers";
import { posts as initialPosts, categories } from "@/lib/data";
import BlogListClient from "@/components/blog/blog-list-client";

export default async function BlogListPage() {

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  const posts = await res.json();


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
