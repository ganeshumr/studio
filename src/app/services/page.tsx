import {CategoryIcon} from '@/components/icons/category-icon';
import {categories} from '@/lib/data';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';
import {Check} from 'lucide-react';

const serviceFeatures: Record<string, string[]> = {
  'property-audit': ['Title Trace Report', 'Encumbrance Certificate Check', 'Tax Payment Verification'],
  'legal-verification': ['Sale Deed Scrutiny', 'Mother Deed Analysis', 'Dispute Check'],
  'loan-services': ['Document Preparation', 'Bank Eligibility Check', 'Application Support'],
  'land-survey': ['Drone-based Mapping', 'GPS Boundary Marking', 'Topographical Reports'],
  'digital-ownership': ['Blockchain Title Registry', 'Secure Document Vault', 'Digital Inheritance Planning'],
  'electricity-bill-updates': ['Name Change Facilitation', 'Address Correction', 'Bill Regularization'],
}

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Our Digital Property Solutions
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of services to ensure your property investments are
            secure, transparent, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <Card key={category.slug} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 text-primary p-4 rounded-lg">
                  <CategoryIcon categorySlug={category.slug} className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="mb-4">{category.description}</CardDescription>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    {serviceFeatures[category.slug]?.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    )) || (
                      <li className="flex items-center gap-2 text-muted-foreground">
                        Features coming soon.
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
