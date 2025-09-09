'use client';

import {useState} from 'react';
import {BlogPostCard} from '@/components/blog/blog-post-card';
import {posts} from '@/lib/data';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';
import type {Post} from '@/lib/types';

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const searchTerm = searchQuery.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(searchTerm);
    const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm);
    // A simple way to check content. It won't be perfect for complex ReactNodes.
    const contentMatch =
      typeof post.content === 'string'
        ? post.content.toLowerCase().includes(searchTerm)
        : false;

    return titleMatch || excerptMatch || contentMatch;
  });

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Jaaga Insights Blog
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your source for expert analysis and practical advice on Indian real estate, property law,
          and digital ownership.
        </p>
      </div>

      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search for articles..."
            className="w-full pl-10 h-12 text-base"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
