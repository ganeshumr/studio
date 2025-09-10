
'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Logo} from './logo';
import {categories} from '@/lib/data';
import React, {useState} from 'react';

export function Footer() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGetACall = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      const message = `Hi, I would like to get a call. My number is ${phoneNumber}.`;
      const whatsappUrl = `https://wa.me/918885133990?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

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
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-muted-foreground hover:text-primary">
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
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-headline font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Enter your phone number to get a call from us.
            </p>
            <form onSubmit={handleGetACall} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="flex-1"
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setPhoneNumber(value);
                }}
              />
              <Button type="submit" variant="default" className="w-full sm:w-auto">
                Get a Call
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
