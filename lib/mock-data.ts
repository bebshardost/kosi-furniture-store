import { Product } from '@/types'

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Premium Sport Jacket",
    price: 30,
    oldPrice: 45,
    image: "/images/product-3.png",
    category: "Sportswear",
    badgeText: "-33%",
    className: "bg-red-500 text-white",
    rating: 4.8,
    reviews: 156,
    isBestSeller: true
  },
  {
    id: 2,
    title: "Luxury Travel Backpack",
    price: 25,
    oldPrice: 35,
    image: "/images/product-4.png",
    category: "Accessories",
    badgeText: "-29%",
    className: "bg-orange-500 text-white",
    rating: 4.6,
    reviews: 89,
    isNew: true
  },
  // Add more mock products as needed
]

export const galleryItems = [
  {
    id: 1,
    src: "/images/footerItem1.png",
    title: "Modern Living Space",
    category: "Living Room",
    description: "Elegant furniture arrangement showcasing our premium collection in a contemporary setting.",
    tags: ["Modern", "Minimalist", "Luxury"]
  },
  // Add more gallery items
]