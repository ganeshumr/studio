import BlogListClient from "@/components/blog/blog-list-client";
import { posts } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JaaGa Insights Blog',
  description: 'Your source for expert analysis and practical advice on Indian real estate, property law, and digital ownership. Find articles on patta, chitta, EC, land records, and more.',
  keywords: [
    'real estate blog India',
    'property law India',
    'digital ownership',
    'land records Telangana',
    'patta chitta Tamil Nadu',
    'Encumbrance Certificate AP',
    'property verification',
    'JaaGa insights',
    'property documents online',
    'legal heir certificate',
    'sale deed'
  ],
};

export default function BlogListPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          JaaGa Insights
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your source for expert analysis and practical advice on Indian real estate, property law,
          and digital ownership.
        </p>
      </div>
      <BlogListClient posts={posts} />
    </div>
  );
}
