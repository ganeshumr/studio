
import Link from 'next/link';
import type {Category, Post} from './types';

export const categories: Category[] = [
  {
    slug: 'property-audit',
    name: 'Property Audit',
    description: 'In-depth analysis and reporting on property titles and documentation.',
  },
  {
    slug: 'legal-verification',
    name: 'Legal Verification',
    description: 'Comprehensive legal checks to ensure your property is free from disputes.',
  },
  {
    slug: 'loan-services',
    name: 'Loan Services',
    description: 'Guidance and support for securing loans against your property.',
  },
  {
    slug: 'land-survey',
    name: 'Land Survey',
    description: 'Accurate digital land surveying to define and protect your boundaries.',
  },
  {
    slug: 'digital-ownership',
    name: 'Digital Ownership',
    description: 'Modern solutions for managing and securing your property ownership digitally.',
  },
  {
    slug: 'electricity-bill-updates',
    name: 'Electricity Bill Updates',
    description: 'Assistance with name changes and updates on utility documents.',
  },
];

export const posts: Post[] = [
  {
    id: 1,
    slug: 'comprehensive-guide-to-property-audit-in-india',
    title: 'A Comprehensive Guide to Property Audits in India',
    excerpt:
      'Understand the critical importance of a property audit before you invest. This guide covers everything from title verification to encumbrance checks.',
    content: (
      <div className="space-y-6">
        <p>
          Investing in property in India is a significant financial commitment. Before taking the
          plunge, conducting a thorough property audit is not just recommended—it's essential. A
          property audit is a detailed examination of property records to ensure the title is
          clear, marketable, and free from any legal disputes.
        </p>
        <h2 className="font-headline text-2xl font-bold">Why is a Property Audit Crucial?</h2>
        <p>
          A detailed audit report provides a clear picture of the property's legal standing. It
          helps in identifying potential risks such as ownership disputes, liens, mortgages, or
          other encumbrances. Neglecting this step can lead to disastrous financial losses and
          legal battles.
        </p>
        <h3 className="font-headline text-xl font-bold">Key Components of a Property Audit:</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Title Verification:</strong> Tracing the chain of property ownership to ensure
            the seller has the legal right to transfer the property.
          </li>
          <li>
            <strong>Encumbrance Certificate (EC):</strong> Checking for any claims, liens, or
            charges on the property that could affect ownership.
          </li>
          <li>
            <strong>Property Tax Records:</strong> Verifying that all property taxes are paid up
            to date.
          </li>
          <li>
            <strong>Building Plan Approval:</strong> Ensuring the property is constructed as per
            the approved plans from local authorities. For more on this, see our article on{' '}
            <Link href="/blog/navigating-legal-property-verification" className="text-primary hover:underline">
              legal property verification
            </Link>
            .
          </li>
        </ul>
        <p>
          At Jaaga.ai, we provide a complete{' '}
          <strong className="font-semibold">property audit report India</strong> that gives you peace of mind
          and secures your investment for the future.
        </p>
      </div>
    ),
    author: {name: 'Priya Sharma', avatar: 'https://picsum.photos/id/237/40/40'},
    date: '2024-07-15',
    category: 'property-audit',
    tags: ['property audit', 'investment', 'due diligence'],
    featuredImage: 'https://picsum.photos/800/450?random=1',
    metaTitle: 'Comprehensive Property Audit Guide for India | Jaaga.ai',
    metaDescription:
      'Learn why a property audit is crucial in India. Our guide covers title verification, encumbrance checks, and more for safe property investment.',
    keywords: 'property audit report India, title verification, real estate investment',
  },
  {
    id: 2,
    slug: 'navigating-legal-property-verification',
    title: 'Navigating the Maze of Legal Property Verification',
    excerpt:
      'Legal verification is a non-negotiable step in property acquisition. Learn about the essential documents and processes to ensure a clean title.',
    content: (
      <div className="space-y-6">
        <p>
          The process of legal property verification in India can be a daunting maze of paperwork
          and legal jargon. However, it is the most critical step to safeguard your investment.
          This process involves verifying a series of documents to confirm the property's
          authenticity and the seller's ownership rights.
        </p>s
        <h2 className="font-headline text-2xl font-bold">Essential Documents for Verification</h2>
        <p>
          Before finalizing any deal, ensure you have checked the following documents with the help
          of a legal expert:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Sale Deed:</strong> The primary legal document that acts as proof of sale and
            transfer of ownership.
          </li>
          <li>
            <strong>Mother Deed/Parent Document:</strong> Traces the origin and history of the
            property's ownership.
          </li>
          <li>
            <strong>Khata Certificate and Extract:</strong> Required for property registration and
            tax payment.
          </li>
          <li>
            <strong>Building Approval Plan:</strong> As sanctioned by the municipal corporation or
            local body.
          </li>
        </ul>
        <h3 className="font-headline text-xl font-bold">The Role of Digital Tools</h3>
        <p>
          Today, digital tools are simplifying this process. With services like our{' '}
          <Link href="/blog/how-digital-land-surveys-are-changing-real-estate" className="text-primary hover:underline">
            digital land survey booking
          </Link>
          , you can get accurate boundary and dimension data, which complements the legal
          verification process.
        </p>
        <p>
          Jaaga.ai specializes in thorough{' '}
          <strong className="font-semibold">legal property verification</strong> to ensure your transaction
          is secure and transparent.
        </p>
      </div>
    ),
    author: {name: 'Rohan Mehta', avatar: 'https://picsum.photos/id/238/40/40'},
    date: '2024-07-10',
    category: 'legal-verification',
    tags: ['legal verification', 'property documents', 'due diligence'],
    featuredImage: 'https://picsum.photos/800/450?random=2',
    metaTitle: 'Guide to Legal Property Verification in India | Jaaga.ai',
    metaDescription:
      'A complete guide to legal property verification in India. Learn about the essential documents like sale deed, mother deed, and Khata certificate.',
    keywords: 'legal property verification, property documents, sale deed',
  },
  {
    id: 3,
    slug: 'how-digital-land-surveys-are-changing-real-estate',
    title: 'How Digital Land Surveys Are Changing Real Estate',
    excerpt:
      'Gone are the days of manual measurements. Digital land surveys offer unparalleled accuracy and efficiency, becoming a game-changer for property owners.',
    content: (
      <div className="space-y-6">
        <p>
          The real estate industry is undergoing a technological transformation, and digital land
          surveys are at the forefront of this change. Using advanced technologies like GPS, drones,
          and LiDAR, digital surveys provide precise and detailed maps of properties, eliminating
          the inaccuracies of traditional methods.
        </p>
        <h2 className="font-headline text-2xl font-bold">Advantages of Digital Surveys</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Accuracy:</strong> Provides millimeter-level precision, crucial for boundary
            disputes and construction planning.
          </li>
          <li>
            <strong>Efficiency:</strong> Significantly reduces the time and labor required for a
            survey.
          </li>
          <li>
            <strong>Data Richness:</strong> Generates detailed 3D models and topographical data
            that can be used for various planning purposes.
          </li>
          <li>
            <strong>Safety:</strong> Allows for surveying of hazardous or inaccessible areas
            without risk to human surveyors.
          </li>
        </ul>
        <p>
          Booking a survey has also become simpler. With our{' '}
          <strong className="font-semibold">digital land survey booking</strong> platform, you can schedule
          a professional survey for your property in just a few clicks. This modern approach is a
          key part of achieving{' '}
          <Link href="/blog/securing-your-investment-with-digital-ownership" className="text-primary hover:underline">
            safe property ownership in India
          </Link>
          .
        </p>
      </div>
    ),
    author: {name: 'Priya Sharma', avatar: 'https://picsum.photos/id/237/40/40'},
    date: '2024-07-05',
    category: 'land-survey',
    tags: ['digital survey', 'land mapping', 'technology'],
    featuredImage: 'https://picsum.photos/800/450?random=3',
    metaTitle: 'The Rise of Digital Land Surveys in Indian Real Estate',
    metaDescription:
      'Discover how digital land surveys are revolutionizing property management with better accuracy and efficiency. Book your digital land survey with Jaaga.ai.',
    keywords: 'digital land survey booking, land mapping, property technology',
  },
  {
    id: 4,
    slug: 'streamlining-electricity-bill-name-change-process',
    title: 'Streamlining the Electricity Bill Name Change Process',
    excerpt:
      "Changing the name on an electricity bill is a crucial step after property transfer. This post simplifies the process, documents required, and pitfalls to avoid.",
    content: (
      <div className="space-y-6">
        <p>
          After purchasing a property, one of the essential administrative tasks is to change the
          name on the utility bills, especially the electricity bill. This is an important proof
          of possession and is often required for various other official purposes.
        </p>
        <h2 className="font-headline text-2xl font-bold">
          Step-by-Step Guide for Name Change
        </h2>
        <p>
          The <strong className="font-semibold">electricity bill name change process</strong> can vary slightly between states, but generally involves the following steps:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Gather Documents:</strong> You will typically need a copy of the sale deed,
            the latest electricity bill, a no-objection certificate (NOC) from the previous owner,
            and your identity and address proof.
          </li>
          <li>
            <strong>Application Form:</strong> Obtain and fill out the prescribed application
            form from the respective electricity board's office or website.
          </li>
          <li>
            <strong>Submission & Fees:</strong> Submit the form along with the documents and pay
            the required processing fees.
          </li>
          <li>
            <strong>Verification:</strong> The electricity board will verify the documents and may
            conduct a site inspection.
          </li>
          <li>
            <strong>Confirmation:</strong> Once approved, the name will be updated in their
            records, and future bills will be issued in your name.
          </li>
        </ol>
        <p>
          This process is a vital part of completing your{' '}
          <Link href="/blog/comprehensive-guide-to-property-audit-in-india" className="text-primary hover:underline">
            property audit
          </Link>{' '}
          and taking full control of your new asset. Jaaga.ai offers assistance to make this
          process smooth and hassle-free.
        </p>
      </div>
    ),
    author: {name: 'Anjali Desai', avatar: 'https://picsum.photos/id/239/40/40'},
    date: '2024-06-28',
    category: 'electricity-bill-updates',
    tags: ['utility bills', 'property ownership', 'documentation'],
    featuredImage: 'https://picsum.photos/800/450?random=4',
    metaTitle: 'How to Change Name on Electricity Bill in India | Jaaga.ai',
    metaDescription:
      'A simplified guide to the electricity bill name change process in India. Learn the steps, documents required, and why it is important for new property owners.',
    keywords: 'electricity bill name change process, property transfer, utility documents',
  },
  {
    id: 5,
    slug: 'essential-property-documents-for-home-loan',
    title: '5 Essential Property Documents for a Smooth Home Loan Process',
    excerpt:
      'Securing a home loan requires meticulous documentation. We list the five most critical property documents that banks and financial institutions will ask for.',
    content: (
      <div className="space-y-6">
        <p>
          Applying for a home loan is a key step in the journey of buying a house. A smooth loan
          approval process heavily depends on the completeness and correctness of your
          documentation. Financial institutions conduct rigorous due diligence to ensure the
          property is legally clear.
        </p>
        <h2 className="font-headline text-2xl font-bold">
          Must-Have Property Documents for Your Loan Application
        </h2>
        <p>
          Here are the top 5{' '}
          <strong className="font-semibold">property documents for loan</strong> applications that you must
          have in order:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Agreement for Sale:</strong> A notarized agreement detailing the terms and
            conditions of the sale, signed by both buyer and seller.
          </li>
          <li>
            <strong>Title Deeds:</strong> This includes the current Sale Deed and the entire chain
            of previous ownership documents (Mother Deed) to establish a clear title.
          </li>
          <li>
            <strong>Encumbrance Certificate (EC):</strong> A certificate from the sub-registrar's
            office stating that the property is free from any legal or monetary liabilities.
          </li>
          <li>
            <strong>Approved Building Plan:</strong> A copy of the building or layout plan
            sanctioned by the local municipal authority.
          </li>
          <li>
            <strong>Land Conversion Certificate (if applicable):</strong> If the land was
            previously agricultural, a certificate is needed to show it has been legally converted
            for non-agricultural use.
          </li>
        </ol>
        <p>
          Having these documents in order is a testament to a successful{' '}
          <Link href="/blog/navigating-legal-property-verification" className="text-primary hover:underline">
            legal verification
          </Link>
          . It not only speeds up your loan process but also ensures you are investing in a safe
          and secure property.
        </p>
      </div>
    ),
    author: {name: 'Rohan Mehta', avatar: 'https://picsum.photos/id/238/40/40'},
    date: '2024-06-20',
    category: 'loan-services',
    tags: ['home loan', 'financing', 'documentation'],
    featuredImage: 'https://picsum.photos/800/450?random=5',
    metaTitle: '5 Essential Property Documents for Home Loans in India',
    metaDescription:
      'Applying for a home loan? Ensure you have these 5 essential property documents for loan approval, including title deeds, EC, and approved plans.',
    keywords: 'property documents for loan, home loan process, bank loan',
  },
  {
    id: 6,
    slug: 'securing-your-investment-with-digital-ownership',
    title: 'Securing Your Investment with Digital Property Ownership',
    excerpt:
      'The future of real estate is digital. Explore how blockchain and digital ledgers are creating a new paradigm for safe property ownership in India.',
    content: (
      <div className="space-y-6">
        <p>
          As the world moves towards digitization, the concept of property ownership is also
          evolving. Digital property ownership utilizes modern technologies like blockchain to
          create immutable, transparent, and secure records of property titles and transactions.
        </p>
        <h2 className="font-headline text-2xl font-bold">
          What is Digital Ownership and Why Does It Matter?
        </h2>
        <p>
          Digital ownership refers to storing property records on a decentralized, cryptographic
          ledger. Unlike traditional paper-based systems that are prone to fraud, tampering, and
          loss, a digital system offers unprecedented security.
        </p>
        <h3 className="font-headline text-xl font-bold">
          Benefits for the Indian Property Market:
        </h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Fraud Prevention:</strong> Immutable records make it nearly impossible to
            create fake deeds or alter ownership information.
          </li>
          <li>
            <strong>Transparency:</strong> All stakeholders can view the history of transactions,
            reducing information asymmetry.
          </li>
          <li>
            <strong>Efficiency:</strong> Property transfers can be executed faster and with less
            paperwork.
          </li>
          <li>
            <strong>Accessibility:</strong> Property owners can access their records from anywhere
            at any time.
          </li>
        </ul>
        <p>
          Embracing this technology is the ultimate step towards{' '}
          <strong className="font-semibold">safe property ownership in India</strong>. It complements
          traditional methods like a{' '}
          <Link href="/blog/comprehensive-guide-to-property-audit-in-india" className="text-primary hover:underline">
            thorough property audit
          </Link>{' '}
          and provides a robust framework for the future of real estate.
        </p>
      </div>
    ),
    author: {name: 'Priya Sharma', avatar: 'https://picsum.photos/id/237/40/40'},
    date: '2024-06-12',
    category: 'digital-ownership',
    tags: ['blockchain', 'proptech', 'investment security'],
    featuredImage: 'https://picsum.photos/800/450?random=6',
    metaTitle: 'Digital Property Ownership: The Future of Real Estate in India',
    metaDescription:
      'Learn how digital ownership and blockchain technology are ensuring safe property ownership in India by preventing fraud and increasing transparency.',
    keywords: 'safe property ownership India, digital ownership, blockchain real estate',
  },
];
