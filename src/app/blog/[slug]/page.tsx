

import React from 'react';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import type {Metadata} from 'next';
import {posts, categories, services} from '@/lib/data';
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
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);

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
      url: `https://www.jaaga.ai/blog/${post.slug}`,
      images: images,
    },
  };
}

export default function BlogPostPage({params}: Props) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const category = categories.find(c => c.slug === post.category);
  const relatedService = services.find(s => s.categorySlug === post.category);

  const breadcrumbItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: post.title, href: `/blog/${post.slug}`},
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
            {relatedService && (
              <Card className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <h3 className="font-headline text-2xl font-bold mb-2">{relatedService.title}</h3>
                  <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
                     <Image 
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      className="object-contain"
                      data-ai-hint="document"
                     />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {relatedService.description}
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link href={relatedService.link} target="_blank" rel="noopener noreferrer">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
            <PostSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
