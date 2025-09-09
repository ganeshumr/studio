import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Logo} from './logo';
import {categories} from '@/lib/data';
import {Twitter, Linkedin, Facebook} from 'lucide-react';

const socialLinks = [
  {name: 'Twitter', icon: Twitter, href: '#'},
  {name: 'LinkedIn', icon: Linkedin, href: '#'},
  {name: 'Facebook', icon: Facebook, href: '#'},
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Your trusted partner in navigating India's property landscape with clarity and
              confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map(category => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Subscribe to our newsletter for the latest insights.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" variant="default">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jaaga.ai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
