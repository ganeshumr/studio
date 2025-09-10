'use client';

import Link from 'next/link';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Search} from 'lucide-react';
import {categories, posts} from '@/lib/data';
import Image from 'next/image';
import {Separator} from '../ui/separator';

export function PostSidebar() {
  const recentPosts = posts.slice(0, 3);

  return (
    <aside className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-headline text-xl font-semibold">Search</h3>
        <form className="flex gap-2">
          <Input placeholder="Find an article..." />
          <Button type="submit" size="icon" variant="secondary">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </div>

      <div className="space-y-3">
        <h3 className="font-headline text-xl font-semibold">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className="flex justify-between items-center p-2 rounded-md hover:bg-accent/20 transition-colors text-muted-foreground hover:text-primary"
              >
                <span>{category.name}</span>
                <span>
                  ({posts.filter(p => p.category === category.slug).length})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-headline text-xl font-semibold">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="flex items-center gap-4 group">
                {post.featuredImage && (
                  <div className="relative h-16 w-16 rounded-md overflow-hidden shrink-0">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
