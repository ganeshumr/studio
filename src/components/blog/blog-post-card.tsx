import Link from 'next/link';
import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import type {Post} from '@/lib/types';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import {categories} from '@/lib/data';

type BlogPostCardProps = {
  post: Post;
};

export function BlogPostCard({post}: BlogPostCardProps) {
  const category = categories.find(c => c.slug === post.category);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {post.featuredImage && (
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-video">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="document real estate"
            />
          </div>
        </Link>
      )}
      <CardHeader>
        {category && (
          <Badge variant="outline" className="w-fit">
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </Badge>
        )}
        <h3 className="font-headline text-xl font-bold leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary hover:underline flex items-center gap-1 text-sm"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
