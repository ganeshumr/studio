
import type { MetadataRoute } from 'next'
import { posts } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrl = 'https://blog.jaaga.ai';

  const postUrls = posts.map(post => ({
    url: `${blogUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  const staticUrls = [
    {
      url: blogUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${blogUrl}/blogs`,
      lastModified: new Date(),
      priority: 0.95,
    },
    {
      url: `${blogUrl}/contact-us`,
      lastModified: new Date(),
      priority: 0.85,
    },
  ];

  // The provided XML has some blog URLs that are not in the `posts` data.
  // I will add them manually to ensure the sitemap is complete.
  const additionalBlogUrls = [
    {
      url: 'https://blog.jaaga.ai/blogs/tamil-nadu-patta-chitta-documents-a-complete-guide',
      priority: 0.95,
    },
     {
      url: 'https://blog.jaaga.ai/blogs/why-update-owner-name-on-property-tax-and-electricity-bills',
      priority: 0.95,
    },
  ].map(item => ({
    ...item,
    lastModified: new Date()
  }));

  const allPostUrls = [...postUrls, ...additionalBlogUrls];

  // Remove duplicates that might exist between dynamic and manual URLs
  const uniquePostUrls = allPostUrls.filter((post, index, self) => 
    index === self.findIndex((p) => p.url === post.url)
  );

  return [
    ...staticUrls,
    ...uniquePostUrls
  ];
}
