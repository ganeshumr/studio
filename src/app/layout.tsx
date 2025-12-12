
import type {Metadata} from 'next';
import './globals.css';
import 'react-quill/dist/quill.snow.css';
import {Header} from '@/components/common/header';
import {Footer} from '@/components/common/footer';
import {Toaster} from '@/components/ui/toaster';
import {AuthProvider}from '@/context/auth-context';
import { Analytics } from '@vercel/analytics/react';

const pageTitle = 'Instant Property Documents and Services across 5+ States – JaaGa';
const pageDescription = 'Get instant access to certified property documents and land records across 5+ states with JaaGa. Download sale deed, Patta/chitta, 7/12, EC, Property Card, Mutation, and more in minutes.';
const pageKeywords = [
    'Property Documents Online',
    'Telangana Property Documents',
    'Andhra Pradesh Property Records',
    'Tamil Nadu Chitta Adangal',
    'Karnataka RTC',
    'Maharashtra 7/12 Utara',
    'Encumbrance Certificate',
    'Sale Deed Copy',
    'Khata Certificate',
    'Patta & Chitta',
    'Mutation Record',
    'Property Audit Report',
    'Legal Opinion',
    'Property Title Verification',
    'Property Ownership Check',
    'Land Record Search',
    'EC Download',
    'Property Services',
    'Property Verification Online',
    'Digital Land Records',
    'Kaveri EC',
    'Landeed',
    'EC CC documents',
    'Kaveri Documents',
    'Certified Copy',
    'patta',
    'patta download',
    'patta online',
    'ec telangana',
    'tslr extract',
    'old land records in andhra pradesh',
    'nakal copy',
    'ec for land in tamilnadu online',
    'legal heir certificate online maharashtra',
    'certified true copy of property documents online chennai',
    'pattadar passbook telangana',
    'fmb sketch download',
    'bhu bharati ec',
    'cc copy telangana',
    'a register',
    'adangal andhra pradesh',
    'e khata download',
    'encumbrance certificate ap',
    'ap ec download',
    'ec in telangana',
    'tn land survey village map'
];

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: '%s - Jaaga Insights',
  },
  description: pageDescription,
  keywords: pageKeywords,
  icons: {
    icon: 'https://ik.imagekit.io/jaaga/Untitled%20design%20(2).jpg',
  },
  openGraph: {
    title: {
      default: pageTitle,
      template: '%s - Jaaga Insights',
    },
    description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
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
        <meta name="google-site-verification" content="DXQ8v30NfhIWCK_BWdbspTx-6Jpi1TjsWvFbTytJhBI" />
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
