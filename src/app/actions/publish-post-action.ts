"use server";
import {  posts } from "@/lib/data";
import { getPosts, savePosts } from "@/lib/server/data";
import type { Post } from "@/lib/types";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  slug: z
    .string()
    .min(5, "Slug must be at least 5 characters.")
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
  category: z.string({ required_error: "Please select a category." }),
  tags: z.string().min(3, "Please provide at least one tag."),
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
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export async function publishPostAction(values: unknown) {
  try {
    const validatedValues = formSchema.parse(values);

    const slug = validatedValues.slug || generateSlug(validatedValues.title);
    const posts = getPosts();

    const newPost: Post = {
      id: Date.now(),
      ...validatedValues,
      slug,
      tags: validatedValues.tags.split(",").map((tag) => tag.trim()),
      content: validatedValues.content,
    };
    console.log("New Post:", newPost);

    posts.push(newPost);
    savePosts(posts);
    return { success: true, data: newPost };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error:
          "Invalid input: " + error.errors.map((e) => e.message).join(", "),
      };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
