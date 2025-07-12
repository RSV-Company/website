import { Product } from "@/types/products";

export const products = [
  {
    title: "Comfort Cushion",
    category: "Furniture",
    image:
      "https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$45.99",
    originalPrice: "$59.99",
  },
  {
    title: "Kitchen Basket",
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$29.99",
    badge: "New arrival",
  },
  {
    title: "Ceramic Plate",
    category: "Dinnerware",
    image:
      "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$19.99",
  },
  {
    title: "Luxury Bath Towel",
    category: "Bathroom",
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$34.99",
    originalPrice: "$44.99",
  },
];

export const featuredCategories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const initialCartItems = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 1,
    color: "Black",
    size: "One Size",
    inStock: true,
    rating: 4.8,
    reviews: 2847,
  },
  {
    id: "2",
    title: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 2,
    color: "Silver",
    size: "42mm",
    inStock: true,
    rating: 4.6,
    reviews: 1923,
  },
  {
    id: "3",
    title: "Laptop Stand Ergonomic",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 1,
    color: "Space Gray",
    inStock: false,
    rating: 4.4,
    reviews: 856,
  },
];

export const allMockProducts: any = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphones",
    price: 99.99,
    originalPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    brand: "TechBrand",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    tags: ["wireless", "bluetooth", "audio"],
    colors: ["black", "white", "blue"],
    sizes: ["S", "M", "L"],
    description: "High-quality wireless headphones with noise cancellation",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Wearables",
    brand: "FitTech",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    tags: ["fitness", "smart", "health"],
    colors: ["black", "silver", "rose-gold"],
    description: "Advanced fitness tracking with heart rate monitoring",
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Clothing",
    brand: "EcoWear",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    tags: ["organic", "cotton", "sustainable"],
    colors: ["white", "black", "gray", "navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "100% organic cotton t-shirt with premium comfort",
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "4",
    title: "Smart Home Speaker",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    brand: "HomeTech",
    rating: 4.4,
    reviews: 156,
    inStock: false,
    tags: ["smart-home", "speaker", "voice-control"],
    colors: ["white", "charcoal"],
    description: "Voice-controlled smart speaker with premium sound",
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "5",
    title: "Ceramic Coffee Mug Set",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Home",
    brand: "KitchenPro",
    rating: 4.6,
    reviews: 78,
    inStock: true,
    tags: ["ceramic", "coffee", "kitchen"],
    colors: ["white", "blue", "green"],
    description: "Set of 4 premium ceramic coffee mugs",
    createdAt: new Date("2024-02-28"),
  },
  {
    id: "6",
    title: "Yoga Mat Pro",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fitness",
    brand: "YogaLife",
    rating: 4.8,
    reviews: 345,
    inStock: true,
    tags: ["yoga", "fitness", "exercise"],
    colors: ["purple", "pink", "teal", "gray"],
    description: "Professional-grade yoga mat with excellent grip",
    createdAt: new Date("2024-03-12"),
  },
];

export interface Category {
  imageUrl: string;
  title: string;
  itemCount: number;
  items: string; // now a string instead of string[]
}

export const categories: Category[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Summer Collection",
    itemCount: 25,
    items: "Sunglasses, Flip Flops, Beach Hat, Sunscreen",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Winter Wear",
    itemCount: 18,
    items: "Jackets, Scarves, Gloves, Boots",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sports Gear",
    itemCount: 30,
    items: "Running Shoes, Yoga Mat, Water Bottle, Fitness Band",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1614859233060-1ac2b801125c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Home Essentials",
    itemCount: 40,
    items: "Cushions, Candles, Rugs, Lamps",
  },
];
