import { posts } from "@/lib/data";

export async function GET(request: Request) {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
