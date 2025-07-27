import React from "react";
import ProductDetailsComponent from "./ProductDetails";
import { Metadata } from "next";
import { createClient } from '@supabase/supabase-js'
import { supabase } from "@/config/client";

// Product interface based on your Supabase schema
interface Product {
  id: string
  title: string
  slug: string
  description: string | null
  specification: string | null
  price: number
  discount_price: number | null
  stock_quantity: number | null
  is_featured: boolean
  is_best_selling: boolean
  category_id: string | null
  brand_id: string | null
  rating: number
  total_reviews: number
  created_at: string
  // Related data
  categories?: {
    id: string
    name: string
  } | null
  brands?: {
    id: string
    name: string
  } | null
}

async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const { data: product, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name
        ),
        brands (
          id,
          name
        )
      `)
      .eq('slug', slug)
      .single()

    if (error || !product) {
      console.error('Error fetching product:', error)
      return null
    }

    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Await params before using its properties
  const { slug } = await params
  
  // Fetch product data based on slug
  const product = await getProductBySlug(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found - RSV',
      description: 'The product you are looking for could not be found.',
    }
  }

  const categoryName = product.categories?.name || 'Home Decor'
  const brandName = product.brands?.name || 'RSV'
  const productDescription = product.description || product.specification || `Discover the ${product.title} from RSV's premium collection.`

  return {
    title: `${product.title} - Premium ${categoryName}`,
    description: `${productDescription} Shop this beautiful ${categoryName.toLowerCase()} at RSV. Premium quality, exceptional design.`,
    keywords: [product.title, categoryName, brandName, "premium furniture", "home decor", "RSV"],
    openGraph: {
      title: `${product.title} | RSV`,
      description: productDescription,
      url: `https://shoprsv.uk/products/${slug}`,
      images: [
        {
          url: `/products/${product.slug}/main.jpg` || "/fav.svg",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | RSV`,
      description: productDescription,
      images: [`/products/${product.slug}/main.jpg` || "/fav.svg"],
    },
    alternates: {
      canonical: `https://shoprsv.uk/products/${slug}`,
    },
  }
}

// Also update the page component to handle awaited params
interface PageProps {
  params: Promise<{ slug: string }>
}

const ProductDetails = async () => {
  return <ProductDetailsComponent />;
};

export default ProductDetails;