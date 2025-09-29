
import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/common/header';
import {Footer} from '@/components/common/footer';
import {Toaster} from '@/components/ui/toaster';
import {AuthProvider} from '@/context/auth-context';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Jaaga Insights: Digital Property Solutions in India',
    template: '%s | Jaaga Insights',
  },
  description:
    'Expert insights on property audit, legal verification, loan services, land survey, and digital ownership in India. Your guide to safe property ownership.',
  keywords: [
    'land records',
    'encumbrance certificate',
    'rtc online',
    'land registration',
    'ec search',
    'online ec telangana',
    'ec telangana',
    'encumbrance certificate ap',
    'telangana ec search',
    'land information',
    'encumbrance certificate telangana',
    'ec andhra pradesh',
    'online ec',
    'land record maharashtra',
    'ec search telangana',
    'land records karnataka',
    'ec download',
    'land record haryana',
    'online ec view tamilnadu',
    '1b adangal',
    'satbara utara',
    'land deed',
    'property title search',
    'property survey records',
    'deed search',
    'title search',
    'property details',
    'land registry office',
    'property search',
    'online deed search',
    'land ownership',
    'property lookup',
    'land survey records',
    'property documents',
    'title search report',
    'look up deeds online',
    'deed search by name',
    'house ownership',
    'document search',
    'property id search',
    'dharani ec search',
    'ec telangana online search',
    'certified copy',
    'telangana land records with survey numbers',
    'property application',
    'property documentation',
    'online deed lookup',
    'free online document search',
    'kaveri online ec download',
    'ap land records',
    'online ec search',
    'ec karnataka',
    'encumbrance certificate karnataka',
    'ec download karnataka',
    'encumbrance certificate karnataka online',
    'ec online bangalore',
    'telangana registration ec',
    'ap adangal',
    'adangal ap',
    'kaveri online ec',
    'property deed search',
    'property deeds',
    'land registry search',
    'land deed search',
    'house deed',
    'land registry documents',
    'land register online',
    'land registry website',
    'property records',
    'land registry check',
    'property check',
    'property ownership',
    'property data',
    'check property ownership',
    'find property',
    'copy of deeds',
    'property deed lookup',
    'property online',
    'property information',
    'property ownership search',
    'deed transfer',
    'property line',
    'land registry check online',
    'property search by name',
    'property ownership lookup',
    'property check online',
    'land registry records',
    'property number search',
    'property info',
    'deeds online',
    'house lookup',
    'land registry documents download',
    'property verification',
    'deed number lookup',
    'land registry number',
    'land registry details',
    'property lookup by address',
    'real estate documents',
    'check land ownership',
    'property lookup by name',
  ],
  icons: {
    icon: 'https://res.cloudinary.com/dnuayl071/image/upload/v1758188919/Lightning_Corporate_Logo__1_-removebg-preview_cl0twj.png?v=2',
  },
  openGraph: {
    title: 'Jaaga Insights: Digital Property Solutions in India',
    description: 'Your trusted guide for property and legal verification services in India.',
    url: 'https://www.jaaga.ai',
    siteName: 'Jaaga Insights',
    images: [
      {
        url: 'https://picsum.photos/1200/630',
        width: 1200,
        height: 630,
        alt: 'Jaaga.ai - Digital Property Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaaga Insights: Digital Property Solutions in India',
    description: 'Expert insights on property audit, legal verification, and more.',
    images: ['https://picsum.photos/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
