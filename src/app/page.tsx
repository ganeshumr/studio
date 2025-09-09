
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {categories, posts} from '@/lib/data';
import {ArrowRight, FileCheck} from 'lucide-react';
import {CategoryIcon} from '@/components/icons/category-icon';
import {BlogPostCard} from '@/components/blog/blog-post-card';
import {Badge} from '@/components/ui/badge';

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Secure your property rights</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-6xl max-w-lg tracking-tighter text-left font-bold text-primary">
                Secure Your Digital Property Rights in India.
              </h1>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left pt-4">
                Jaaga.ai provides expert insights and comprehensive services for property audits,
                legal verification, and digital ownership. Navigate the complexities of Indian real
                estate with confidence.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline" asChild>
                <Link href="/category/property-audit">
                  Property Audit Report <FileCheck className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" className="gap-4" asChild>
                <Link href="/blog">
                  Read Insights <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="https://picsum.photos/400/400?random=1"
                alt="Property document"
                fill
                className="object-cover"
                data-ai-hint="document analysis"
              />
            </div>
            <div className="relative row-span-2 rounded-md overflow-hidden">
              <Image
                src="https://picsum.photos/400/816?random=2"
                alt="Modern architecture"
                fill
                className="object-cover"
                data-ai-hint="modern architecture"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="https://picsum.photos/400/400?random=3"
                alt="Digital land survey"
                fill
                className="object-cover"
                data-ai-hint="land survey"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="bg-background">
        <Hero />
      </section>

      <section id="categories" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial checks to final documentation, we cover every aspect of property
              management in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-md">
                      <CategoryIcon categorySlug={category.slug} className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-posts" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Insights</h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest trends and advice from our experts.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary hidden md:flex">
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-16 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Property?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Don't leave your property to chance. Our digital solutions provide the clarity and
              security you need.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold bg-background text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact">Get Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
