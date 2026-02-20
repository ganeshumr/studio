
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://blog.jaaga.ai/blogs/${post.slug}`,
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
  const breadcrumbItems = [
    {label: 'Home', href: '/'},
    {label: 'Blogs', href: '/blogs'},
    {label: post.title, href: `/blogs/${post.slug}`},
  ];

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.featuredImage,
    "author": {
      "@type": "Organization",
      "name": "JaaGa Team",
      "url": "https://www.jaaga.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JaaGa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ik.imagekit.io/jaaga/Untitled%20design%20(2).jpg"
      }
    },
    "datePublished": new Date(post.id).toISOString(),
    "url": `https://blog.jaaga.ai/blogs/${post.slug}`
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://blog.jaaga.ai${item.href}`
    }))
  };

  // FAQ Schema Logic
  let faqSchema: any = null;

  if (post.slug === 'what-is-sale-deed-and-what-is-sale-agreement') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Sale Deed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Sale Deed is a legally binding document that confirms the transfer of property ownership from the seller to the buyer. It serves as proof of sale and ownership."
          }
        },
        {
          "@type": "Question",
          "name": "Is this Sale Deed legally valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Sale Deed displayed here is for informational purposes only. For legal or official use, a registered and certified Sale Deed must be obtained from the Sub-Registrar Office."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Sale Deed mandatory for property ownership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a registered Sale Deed is mandatory to legally establish property ownership. Ownership transfer is not legally complete without registration."
          }
        }
      ]
    };
  } else if (post.slug === 'adangal-ror-1b-land-records-guide') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Adangal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adangal is a village-level land record that contains details about land usage, crop information, land classification, and the name of the landholder, primarily for agricultural land."
          }
        },
        {
          "@type": "Question",
          "name": "What is ROR (Record of Rights)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Record of Rights (ROR) is an official document that records land ownership details such as owner name, survey number, land type, and extent of land."
          }
        }
      ]
    };
  } else if (post.slug === 'fmb-sketch-in-tamil-nadu-how-to-view-download-check-fmb-map-online-complete-guide-2026') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an FMB Sketch in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An FMB (Field Measurement Book) Sketch is an official land record map in Tamil Nadu that shows the exact boundaries, measurements, and subdivisions of a land parcel based on government survey records."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the FMB Sketch important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The FMB Sketch is important for verifying land boundaries, preventing encroachments, resolving land disputes, and during property registration or legal verification."
          }
        }
      ]
    };
  } else if (post.slug === 'bhu-aadhaar-ulpin-guide') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Bhu-Aadhaar (ULPIN)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bhu-Aadhaar, also known as ULPIN (Unique Land Parcel Identification Number), is a 14-digit unique identification number assigned to each land parcel in India, functioning as a digital Aadhaar for land."
          }
        }
      ]
    };
  } else if (post.slug === 'how-to-download-certified-encumbrance-certificate-ec-in-telangana-step-by-step-guide') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an Encumbrance Certificate (EC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An Encumbrance Certificate (EC) is an official document that lists all registered transactions related to a property, including sales, mortgages, and gifts. It helps verify whether a property has a clear title or any legal or financial encumbrances."
          }
        },
        {
          "@type": "Question",
          "name": "Is this Encumbrance Certificate legally valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The EC shown here is for informational purposes only. For legal or official use, you should obtain a certified Encumbrance Certificate through JaaGa."
          }
        }
      ]
    };
  }

  const faqEntities = faqSchema?.mainEntity || [];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
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
          
          {faqEntities.length > 0 && (
            <section className="mt-12 space-y-6">
              <h2 className="font-headline text-2xl font-bold">FAQs</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqEntities.map((faq: any, index: number) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border rounded-lg px-4 bg-card shadow-sm border-b-0 transition-all hover:border-primary/20"
                  >
                    <AccordionTrigger className="hover:no-underline text-left font-semibold py-4">
                      {faq.name}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.acceptedAnswer.text}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

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
