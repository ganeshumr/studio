

import React from 'react';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import type {Metadata} from 'next';
import {categories, services} from '@/lib/data';
import {getPosts} from '@/lib/server/data';
import {Badge} from '@/components/ui/badge';
import Link from 'next/link';
import {PostSidebar} from '@/components/blog/post-sidebar';
import {Breadcrumb} from '@/components/common/breadcrumb';
import {Separator} from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';



export const dynamic = 'force-dynamic';

type Props = {
  params: {slug: string};
};

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const posts = getPosts();
  const awaitedParams = await params;
  const post = posts.find(p => p.slug === awaitedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const images = post.featuredImage
    ? [
        {
          url: post.featuredImage,
          width: 800,
          height: 450,
          alt: post.title,
        },
      ]
    : [];

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://www.jaaga.ai/blogs/${post.slug}`,
      images: images,
    },
  };
}

export default async function BlogPostPage({params}: Props) {
  const posts = getPosts();
  const awaitedParams = await params;
  const post = posts.find(p => p.slug === awaitedParams.slug);

  if (!post) {
    notFound();
  }

  const category = categories.find(c => c.slug === post.category);
  const relatedService = services.find(s => s.categorySlug === post.category);

  const breadcrumbItems = [
    {label: 'Home', href: '/'},
    {label: 'Blogs', href: '/blogs'},
    {label: post.title, href: `/blogs/${post.slug}`},
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <article className="lg:col-span-2 bg-background p-4 sm:p-8 rounded-xl shadow-md">
          <header className="space-y-4 mb-8">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex justify-between items-center">
              <div>
                {category && (
                  <Link href={`/category/${category.slug}`}>
                    <Badge variant="default">{category.name}</Badge>
                  </Link>
                )}
                <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter mt-2">
                  {post.title}
                </h1>
              </div>
            </div>
          </header>

          <div
              className="prose prose-lg max-w-none text-foreground prose-h2:font-headline prose-h2:font-bold prose-h3:font-headline prose-h3:font-bold prose-a:text-primary hover:prose-a:underline prose-headings:font-headline prose-headings:font-bold prose-p:text-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          
          <div className="mt-8">
             <Button asChild>
                <Link href="https://www.jaaga.ai/" target="_blank" rel="noopener noreferrer">
                  Visit Our Website
                </Link>
              </Button>
          </div>

          <Separator className="my-8" />

          <div className="space-y-2">
            <h3 className="font-headline font-bold text-lg">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <PostSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
