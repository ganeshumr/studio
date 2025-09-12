'use client';

import {useState, useMemo} from 'react';
import {BlogPostCard} from '@/components/blog/blog-post-card';
import {posts as initialPosts, categories} from '@/lib/data';
import {Input} from '@/components/ui/input';
import {Search, Trash2} from 'lucide-react';
import type {Post} from '@/lib/types';
import React from 'react';
import { Button } from '@/components/ui/button';

// Helper function to extract text from React nodes
function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join('');
  if (React.isValidElement(node) && node.props.children) {
    return getNodeText(node.props.children);
  }
  return '';
}

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) {
      return posts;
    }
    return posts.filter(post => {
      const searchTerm = searchQuery.toLowerCase();
      const titleMatch = post.title.toLowerCase().includes(searchTerm);
      const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm);
      const contentMatch = getNodeText(post.content).toLowerCase().includes(searchTerm);
      return titleMatch || excerptMatch || contentMatch;
    });
  }, [searchQuery, posts]);

  const handleDelete = (postId: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };


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
          <div key={post.id} className="flex flex-col gap-2">
            <BlogPostCard post={post} />
            <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)} className="w-full">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
