import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {categories, posts} from '@/lib/data';
import {ArrowRight, CheckCircle} from 'lucide-react';
import {CategoryIcon} from '@/components/icons/category-icon';
import {BlogPostCard} from '@/components/blog/blog-post-card';

export default function Home() {
  const featuredPosts = posts.slice(0, 3);

  const services = [
    'Property Audit Reports',
    'Legal Verification',
    'Digital Land Surveys',
    'Loan Assistance',
    'Bill & Name Updates',
    'Safe Ownership',
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
                Secure Your Digital Property Rights in India.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Jaaga.ai provides expert insights and comprehensive services for property audits,
                legal verification, and digital ownership. Navigate the complexities of Indian real
                estate with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="outline">
                  <Link href="/blog">Read Latest Insights</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/800/600"
                alt="Digital property solutions in India"
                fill
                className="object-cover"
                data-ai-hint="digital abstract"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
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
              className="font-bold bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">Get Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
