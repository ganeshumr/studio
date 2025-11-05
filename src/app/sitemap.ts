
import type { MetadataRoute } from 'next'
import { posts, categories } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.jaaga.ai';
  const blogUrl = 'https://blog.jaaga.ai';

  const postUrls = posts.map(post => ({
    url: `${blogUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  const categoryUrls = categories.map(category => ({
    url: `${siteUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  const serviceUrls = [
    { url: `${siteUrl}/mortgage-report`, priority: 0.9 },
    { url: `${siteUrl}/mutation-creation`, priority: 0.9 },
    { url: `${siteUrl}/electricity-name-change`, priority: 0.9 },
    { url: `${siteUrl}/ptin`, priority: 1.0 },
    { url: `${siteUrl}/property-valuation-service`, priority: 0.8 },
    { url: `${siteUrl}/vlt-creation`, priority: 0.8 },
    { url: `${siteUrl}/rectification-deed`, priority: 0.8 },
    { url: `${siteUrl}/find-ancestor-property`, priority: 0.8 },
    { url: `${siteUrl}/property-alert-service`, priority: 0.8 },
    { url: `${siteUrl}/title-verification-report`, priority: 0.8 },
    { url: `${siteUrl}/digital-land-survey`, priority: 0.9 },
    { url: `${siteUrl}/court-cases-dispute-check`, priority: 0.8 },
    { url: `${siteUrl}/property-tax`, priority: 0.9 },
    { url: `${siteUrl}/electricity-bill`, priority: 0.8 },
    { url: `${siteUrl}/water-bill`, priority: 0.8 },
    { url: `${siteUrl}/vacant-land-tax`, priority: 0.8 },
  ].map(item => ({
    url: item.url,
    lastModified: new Date(),
    priority: item.priority,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as 'daily',
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
    ...serviceUrls,
    ...postUrls,
    ...categoryUrls,
  ];
}
