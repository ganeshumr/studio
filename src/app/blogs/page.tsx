
import BlogListClient from "@/components/blog/blog-list-client";
import { getPosts } from "@/lib/server/data";
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

const pageTitle = 'JaaGa Blog – Property Documents, Legal Guides & Real Estate Knowledge';
const pageDescription = 'Your source for expert analysis and practical advice on Indian real estate, property law, and digital ownership. Find articles on patta, chitta, EC, land records, and more.';
const pageKeywords = [
    'real estate blog India',
    'property law India',
    'digital ownership',
    'land records Telangana',
    'patta chitta Tamil Nadu',
    'Encumbrance Certificate AP',
    'property verification',
    'JaaGa insights',
    'property documents online',
    'legal heir certificate',
    'sale deed',
    'Telangana EC',
    'Encumbrance Certificate Telangana',
    'Certified EC Telangana',
    'ROR 1B Telangana',
    'Pahani Telangana',
    'Dharani land record',
    'Telangana sale deed copy',
    'Telangana mutation',
    'PTIN search Telangana',
    'GHMC property tax receipt',
    'Telangana market value certificate',
    'Telangana survey number check',
    'Telangana land ownership check',
    'AP EC online',
    'Encumbrance Certificate AP',
    '1B record AP',
    'Adangal AP',
    'AP sale deed copy',
    'MeeBhoomi document download',
    'AP mutation online',
    'AP land records search',
    'AP property tax receipt',
    'AP survey number check',
    'AP property title check',
    'Patta Chitta online',
    'Tamil Nadu EC',
    'TSLR extract Tamil Nadu',
    'Tamil Nadu sale deed copy',
    'Patta transfer TN',
    'FMB sketch Tamil Nadu',
    'Tamil Nadu property tax receipt',
    'Tamil Nadu survey number search',
    'TN land ownership verification',
    '7/12 extract online',
    'Satbara Utara',
    '8A extract Maharashtra',
    'Maharashtra EC download',
    'Property Card Maharashtra',
    'Maharashtra sale deed copy',
    'mutation 7/12 online',
    'Mahabhulekh land record',
    'Maharashtra property tax receipt',
    'survey number Maharashtra',
    'RTC Karnataka online',
    'Pahani Karnataka',
    'Mutation extract Karnataka',
    'EC Karnataka download',
    'Survey Tippani Karnataka',
    'eKhata Karnataka',
    'BBMP property tax receipt',
    'Karnataka land record online',
    'Karnataka sale deed copy',
    'download property documents online',
    'certified encumbrance certificate',
    'mutation name transfer online',
    'land record search app',
    'sale deed copy download',
    'property tax receipt online',
    'survey number check',
    'property title verification',
    'legal property documents online',
    'igrs telangana',
    'telangana registration',
    'telangana ec search',
    'dharani telangana',
    'lrs telangana',
    'village map with survey numbers in telangana',
    'telangana land registration',
    'prohibited properties telangana',
    'ec download telangana',
    'igrs telangana ec',
    'telangana land details',
    'sro telangana',
    'encumbrance certificate online telangana',
    'ccla telangana',
    'telangana market value'
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: 'https://ik.imagekit.io/jaaga/ChatGPT%20Image%20Jan%205,%202026,%2011_05_39%20AM.png',
        width: 1200,
        height: 630,
        alt: 'JaaGa Insights - Blog on Indian Real Estate',
      },
    ],
  },
};

export default function BlogListPage() {
  const posts = getPosts();
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  return (
    <div className="container mx-auto px-4 py-12 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          JaaGa Insights
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your source for expert analysis and practical advice on Indian real estate, property law,
          and digital ownership.
        </p>
      </div>
      <BlogListClient posts={sortedPosts} />
    </div>
  );
}
