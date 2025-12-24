
'use client';

import Link from 'next/link';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Search} from 'lucide-react';
import {categories} from '@/lib/data';
import Image from 'next/image';
import {Separator} from '../ui/separator';
import { Post } from '@/lib/types';
import { useEffect, useState } from 'react';

export function PostSidebar() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setAllPosts(data as Post[]));
  }, []);

  const recentPosts = allPosts.slice(0, 3);
  
  const getCategoryCount = (slug: string) => {
    return allPosts.filter(p => p.category === slug).length;
  };

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
                <span>({getCategoryCount(category.slug)})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-headline text-xl font-semibold">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.length > 0 ? recentPosts.map(post => (
            <li key={post.id}>
              <Link href={`/blogs/${post.slug}`} className="flex items-center gap-4 group">
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
                </div>
              </Link>
            </li>
          )) : (
            <p className="text-sm text-muted-foreground">Loading posts...</p>
          )}
        </ul>
      </div>
    </aside>
  );
}
