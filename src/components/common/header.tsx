'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, ChevronDown, Search} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Logo} from './logo';
import {categories} from '@/lib/data';
import {cn} from '@/lib/utils';
import {useState} from 'react';

const mainNavLinks = [
  {href: '/', label: 'Home'},
  {href: '/services', label: 'Services'},
  {href: '/blog', label: 'Blog'},
];

const otherLinks = [
  {href: '/about', label: 'About'},
  {href: '/contact', label: 'Contact'},
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({href, children}: {href: string; children: React.ReactNode}) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'transition-colors hover:text-primary',
          isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
        )}
      >
        {children}
      </Link>
    );
  };

  const MobileNavLink = ({href, children}: {href: string; children: React.ReactNode}) => (
    <SheetClose asChild>
      <Link href={href} className="block px-4 py-2 text-lg hover:bg-muted rounded-md">
        {children}
      </Link>
    </SheetClose>
  );

  const navItems = (
    <>
      {mainNavLinks.map(link => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'flex items-center gap-1 transition-colors hover:text-primary',
              pathname.startsWith('/category')
                ? 'text-primary font-semibold'
                : 'text-muted-foreground'
            )}
          >
            Categories
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {categories.map(category => (
            <DropdownMenuItem key={category.slug} asChild>
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {otherLinks.map(link => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[320px]">
              <div className="p-4">
                <Logo className="mb-8" />
                <nav className="flex flex-col gap-4">
                  {mainNavLinks.map(link => (
                    <MobileNavLink key={link.href} href={link.href}>
                      {link.label}
                    </MobileNavLink>
                  ))}
                  <h3 className="px-4 text-muted-foreground font-semibold">Categories</h3>
                  {categories.map(category => (
                    <SheetClose key={category.slug} asChild>
                      <Link
                        href={`/category/${category.slug}`}
                        className="block px-8 py-2 text-lg hover:bg-muted rounded-md"
                      >
                        {category.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <hr className="my-4" />
                  {otherLinks.map(link => (
                    <MobileNavLink key={link.href} href={link.href}>
                      {link.label}
                    </MobileNavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
