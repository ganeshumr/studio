import {categories} from '@/lib/data';
import Link from 'next/link';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {CategoryIcon} from '@/components/icons/category-icon';

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of services to ensure your property transactions are
            secure, transparent, and efficient. Explore our areas of expertise below.
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
    </div>
  );
}
