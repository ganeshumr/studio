export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  author: {
    name: string;
  };
  date: string;
  category: Category['slug'];
  tags: string[];
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  relatedService?: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
};
