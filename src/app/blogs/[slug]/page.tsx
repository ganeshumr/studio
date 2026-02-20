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
  const relatedService = services.find(s => s.categorySlug === post.category);

  const breadcrumbItems = [
    {label: 'Home', href: '/'},
    {label: 'Blogs', href: '/blogs'},
    {label: post.title, href: `/blogs/${post.slug}`},
  ];

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
          "name": "How is this Sale Deed generated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Sale Deed information is retrieved from official government registration records based on the property details provided."
          }
        },
        {
          "@type": "Question",
          "name": "What details are included in a Sale Deed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Sale Deed includes buyer and seller names, property description, sale value, registration number, date of registration, and Sub-Registrar Office details."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get a certified copy of a Sale Deed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After viewing the Sale Deed details online, you can apply for a certified copy through authorized services, which handle documentation and delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Sale Deed mandatory for property ownership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a registered Sale Deed is mandatory to legally establish property ownership. Ownership transfer is not legally complete without registration."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a Sale Agreement and a Sale Deed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Sale Agreement outlines the intention to sell a property, while a Sale Deed confirms the actual transfer of ownership after registration."
          }
        },
        {
          "@type": "Question",
          "name": "Is this Sale Deed reliable for older property records?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For older property records, it is recommended to obtain a certified Sale Deed, as earlier registrations may not be fully digitized."
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
        },
        {
          "@type": "Question",
          "name": "What is 1B land record?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 1B land record is a computerized ownership document that provides updated information about landowners, survey numbers, land extent, and ownership status."
          }
        },
        {
          "@type": "Question",
          "name": "Are Adangal, ROR, and 1B legally valid documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "These are official government land records and are valid for reference and verification. For legal transactions, certified copies issued by the revenue department are recommended."
          }
        },
        {
          "@type": "Question",
          "name": "How are Adangal, ROR, and 1B records generated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "These records are generated and maintained by government revenue departments based on land surveys, registrations, and periodic updates."
          }
        },
        {
          "@type": "Question",
          "name": "What details are included in Adangal, ROR, and 1B?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "These records include landowner name, survey numbers, land extent, land classification, type of land, and crop details in the case of Adangal."
          }
        },
        {
          "@type": "Question",
          "name": "Why are Adangal, ROR, and 1B important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are essential for establishing land ownership, applying for loans, resolving disputes, land conversion, and property registration."
          }
        },
        {
          "@type": "Question",
          "name": "Can these records be used for older land ownership verification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, these records help verify historical ownership. For very old records, certified copies are recommended as some data may not be fully digitized."
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
          "name": "What is the full form of FMB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FMB stands for Field Measurement Book. It's a land survey record used to show the exact measurements and layout of each plot."
          }
        },
        {
          "@type": "Question",
          "name": "Can I download the FMB map for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can download your FMB Sketch online for free via the Tamil Nadu eServices website or via simplified platforms like JaaGa."
          }
        },
        {
          "@type": "Question",
          "name": "Is the FMB map legally valid for property registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it’s recognized by the Tamil Nadu Revenue Department and is often required during land registration and mutation processes."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify my survey number in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit the official portal, select your District, Taluk, and Village, and enter your Survey Number to view the results."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my FMB sketch is incorrect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact your Taluk Office or Village Administrative Officer (VAO) to file a correction request with supporting documents."
          }
        },
        {
          "@type": "Question",
          "name": "How often is the FMB map updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Updates are made periodically after resurveys, usually every few years or upon official government notification of ownership changes."
          }
        }
      ]
    };
  } else {
    // Default FAQ schema for other posts
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I securely download a verified Telangana sale deed online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Verified Telangana sale deed copies can be accessed through official government portals or through trusted document facilitation platforms that retrieve records from government databases and provide verification support."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a registered sale deed copy without visiting the sub-registrar office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If the sale deed is digitally available in Telangana registration records, it can be retrieved online using the document number, SRO, and registration year."
          }
        },
        {
          "@type": "Question",
          "name": "Is an online sale deed copy legally valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online sale deed copies reflect official registration data. Legal validity depends on the purpose, and certified copies may be required for certain legal or financial uses."
          }
        }
      ]
    };
  }

  const faqEntities = faqSchema?.mainEntity || [];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
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
