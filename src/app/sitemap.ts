// app/sitemap.ts
import { supabase } from '@/config/client'
import { MetadataRoute } from 'next'

// Define your product type
interface Product {
  id: string
  slug: string
  title: string
  created_at: string
}

// Function to get all products (implement based on your data source)
async function getAllProducts(): Promise<Product[]> {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('id, slug, title, created_at')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching products for sitemap:', error)
      return []
    }

    return products || []
  } catch (error) {
    console.error('Error fetching products for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://shoprsv.uk'
  const currentDate = new Date()

  // Get all products for dynamic routes
  const products = await getAllProducts()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic product pages
const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...productPages]
}
