
import type {Metadata} from 'next';
import './globals.css';
import 'react-quill/dist/quill.snow.css';
import {Header} from '@/components/common/header';
import {Footer} from '@/components/common/footer';
import {Toaster} from '@/components/ui/toaster';
import {AuthProvider} from '@/context/auth-context';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Instant Property Documents & Audit Reports Online | JaaGa.ai',
    template: '%s | Jaaga Insights',
  },
  description:
    'Search, verify & download property documents like EC, 7/12, Patta, Khata, ROR, and get Property Audit & Legal Reports instantly with JaaGa.ai — Fast & Verified.',
  keywords: [
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
    'mypatta',
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
  ],
  icons: {
    icon: 'https://res.cloudinary.com/dnuayl071/image/upload/v1758188919/Lightning_Corporate_Logo__1_-removebg-preview_cl0twj.png?v=2',
  },
  openGraph: {
    title: 'Instant Property Documents & Audit Reports Online | JaaGa.ai',
    description: 'Search, verify & download property documents like EC, 7/12, Patta, Khata, ROR, and get Property Audit & Legal Reports instantly with JaaGa.ai — Fast & Verified.',
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
    title: 'Instant Property Documents & Audit Reports Online | JaaGa.ai',
    description: 'Search, verify & download property documents like EC, 7/12, Patta, Khata, ROR, and get Property Audit & Legal Reports instantly with JaaGa.ai — Fast & Verified.',
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
