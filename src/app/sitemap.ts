
import type { MetadataRoute } from 'next'
import { posts, categories } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.jaaga.ai';

  const postUrls = posts.map(post => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.8,
  }));

  const categoryUrls = categories.map(category => ({
    url: `${siteUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.5,
    },
  ];

  return [
    ...staticUrls,
    ...postUrls,
    ...categoryUrls,
  ];
}
