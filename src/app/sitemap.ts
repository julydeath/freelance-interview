/* eslint-disable @typescript-eslint/no-explicit-any */
import { getModules } from '@/api'
import type { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const modules = await getModules()

  const sitemapObject: MetadataRoute.Sitemap = modules.map((module : any) => ({
    url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/${module.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }))
  return [
    {
        url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/about`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/contact`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_PUBLIC_URL}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      ...sitemapObject
  ]
}