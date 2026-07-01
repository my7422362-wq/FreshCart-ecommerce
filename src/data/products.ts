import type { Product } from '../types/product'

const baseDescription = (topic: string) =>
  `Premium quality ${topic} with modern design, reliable performance, and everyday comfort—made for real-life use.`



const categories = [
  'shoes',
  'tech',
  'accessories',
  'clothing',
  'home',
  'beauty',
  'electronics',
  'kitchen',
] as const satisfies readonly Product['category'][]

export const products: Product[] = [
  {
    id: 'p001',
    title: 'AeroStride Running Shoes',
    price: 89.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight trainers built for comfort and long-distance pace.',
    rating: 4.6,
    isNew: true,
    isBestSeller: false,
    discountPercentage: 12,
  },
  {
    id: 'p002',
    title: 'Nova Smartwatch',
    price: 159.5,
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    description: 'A sleek fitness watch with health tracking and daily insights.',
    rating: 4.8,
    isNew: false,
    isBestSeller: true,
    discountPercentage: 8,
  },
  {
    id: 'p003',
    title: 'Linen Travel Tote',
    price: 49.0,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'A minimalist tote that keeps your essentials organized on the go.',
    rating: 4.3,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 'p004',
    title: 'Cloud Knit Hoodie',
    price: 64.0,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Soft, breathable layering for relaxed weekends and cool mornings.',
    rating: 4.5,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 'p005',
    title: 'Sage Ceramic Vase',
    price: 38.5,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant ceramic decor that adds warmth to any living space.',
    rating: 4.2,
    isNew: true,
    isBestSeller: false,
    discountPercentage: 5,
  },
  {
    id: 'p006',
    title: 'Glow Dew Serum',
    price: 42.75,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
    description: 'Hydrating serum that leaves skin looking radiant and smooth.',
    rating: 4.7,
    isNew: false,
    isBestSeller: true,
    discountPercentage: 15,
  },
  {
    id: 'p007',
    title: 'Summit Trail Sneakers',
    price: 94.0,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
    description: 'Durable sneakers designed for city walks and weekend hikes.',
    rating: 4.6,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 'p008',
    title: 'Aura Wireless Earbuds',
    price: 119.0,
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1605449479668-7d5f1f5d5d2b?auto=format&fit=crop&w=900&q=80',
    description: 'Immersive sound and long battery life in a compact design.',
    rating: 4.4,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 'p009',
    title: 'Studio Crossbody Bag',
    price: 56.25,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
    description: 'A polished crossbody bag made for everyday essentials.',
    rating: 4.1,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 'p010',
    title: 'Riverline Overshirt',
    price: 72.0,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    description: 'Relaxed structure and premium cotton for versatile styling.',
    rating: 4.3,
    isNew: true,
    isBestSeller: false,
    discountPercentage: 10,
  },
  ...Array.from({ length: 90 }, (_, i) => {
    const n = 11 + i
    const id = `p${String(n).padStart(3, '0')}`

    const category = categories[n % categories.length]
    const rating = Math.round((3.8 + ((n * 17) % 10) / 10) * 10) / 10
    const isNew = n % 7 === 0 || n % 11 === 0
    const isBestSeller = n % 5 === 0 || rating >= 4.7
    const discountPercentage = n % 8 === 0 ? ((n % 25) + 5) : undefined

    const images = [
      'photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
      'photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
      'photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
      'photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    ]

    const image = `https://images.unsplash.com/${images[n % images.length]}`

    const title = `${category.charAt(0).toUpperCase() + category.slice(1)} Essentials #${n}`
    const price = Math.round((20 + (n % 90) + (rating % 1)) * 100) / 100

    const p: Product = {
      id,
      title,
      price,
      category,
      image,
      description: baseDescription(`${category} for everyday use`),
      rating,
      isNew,
      isBestSeller,
      ...(discountPercentage ? { discountPercentage } : {}),
    }

    return p
  }),
]

export const featuredProducts: Product[] = products.slice(0, 12)

