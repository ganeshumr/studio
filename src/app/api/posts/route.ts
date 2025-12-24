
import { getPosts } from "@/lib/server/data";

export async function GET(request: Request) {
  const posts = getPosts();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
