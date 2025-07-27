import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/landingPage/Footer";
import CartProviderWrapper from "@/providers/CartProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RSV - Creating Beautiful Spaces That Feel Just Like Home",
    template: "%s | RSV"
  },
  description: "Transform your home with RSV's curated collection of premium furniture, decor, and home accessories. Creating beautiful spaces that feel just like home.",
  keywords: ["home decor", "furniture", "interior design", "home accessories", "RSV", "home furnishing"],
  authors: [{ name: "RSV" }],
  creator: "RSV",
  publisher: "RSV",
  metadataBase: new URL('https://shoprsv.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://shoprsv.uk',
    title: 'RSV - Creating Beautiful Spaces That Feel Just Like Home',
    description: 'Transform your home with RSV\'s curated collection of premium furniture, decor, and home accessories.',
    siteName: 'RSV',
    images: [
      {
        url: '/fav.svg',
        width: 1200,
        height: 630,
        alt: 'RSV - Home Decor & Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RSV - Creating Beautiful Spaces That Feel Just Like Home',
    description: 'Transform your home with RSV\'s curated collection of premium furniture, decor, and home accessories.',
    images: ['/fav.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProviderWrapper>
          <Navbar />
          {children}
        </CartProviderWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
