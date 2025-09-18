
import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/common/header';
import {Footer} from '@/components/common/footer';
import {Toaster} from '@/components/ui/toaster';
import {AuthProvider} from '@/context/auth-context';

export const metadata: Metadata = {
  title: {
    default: 'Jaaga Insights: Digital Property Solutions in India',
    template: '%s | Jaaga Insights',
  },
  description:
    'Expert insights on property audit, legal verification, loan services, land survey, and digital ownership in India. Your guide to safe property ownership.',
  keywords: [
    'property audit report India',
    'legal property verification',
    'digital land survey booking',
    'electricity bill name change process',
    'property documents for loan',
    'safe property ownership India',
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
      </body>
    </html>
  );
}
