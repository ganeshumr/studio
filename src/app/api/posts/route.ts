
import { getPosts, savePosts } from "@/lib/server/data";
import type { Post } from "@/lib/types";
import { z } from "zod";

export async function GET(request: Request) {
  const posts = getPosts();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Schema for validating incoming post data from the webhook
const postSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters."),
    slug: z
      .string()
      .regex(
        /^[a-z0-9-]+$/,
        "Slug can only contain lowercase letters, numbers, and hyphens."
      )
      .optional(),
    excerpt: z
      .string()
      .min(20, "Excerpt must be at least 20 characters.")
      .max(200, "Excerpt cannot be more than 200 characters."),
    content: z.string().min(100, "Content must be at least 100 characters."),
    category: z.string(),
    tags: z.union([z.string(), z.array(z.string())]),
    featuredImage: z
      .string()
      .url("Please provide a valid URL for the featured image."),
    metaTitle: z.string().min(5, "Meta title must be at least 5 characters."),
    metaDescription: z
      .string()
      .min(20, "Meta description must be at least 20 characters."),
    keywords: z.string().min(3, "Please provide at least one keyword."),
  });
  
function generateSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export async function POST(request: Request) {
    try {
      const body = await request.json();
      const validation = postSchema.safeParse(body);
  
      if (!validation.success) {
        return new Response(JSON.stringify({ error: "Invalid input", details: validation.error.flatten() }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const { data } = validation;
      
      const slug = data.slug || generateSlug(data.title);
      
      const tagsArray = typeof data.tags === 'string' 
        ? data.tags.split(",").map((tag) => tag.trim())
        : data.tags;
  
      const newPost: Post = {
        id: Date.now(),
        title: data.title,
        slug: slug,
        excerpt: data.excerpt,
        content: data.content,
        category: data.category,
        tags: tagsArray,
        featuredImage: data.featuredImage,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        keywords: data.keywords,
      };
  
      const posts = getPosts();
      posts.push(newPost);
      savePosts(posts);
  
      return new Response(JSON.stringify(newPost), {
        status: 201, // 201 Created
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
        let errorMessage = "An internal server error occurred.";
        if (error instanceof SyntaxError) {
            errorMessage = "Invalid JSON in request body.";
            return new Response(JSON.stringify({ error: errorMessage }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        console.error("Webhook error:", error);
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
