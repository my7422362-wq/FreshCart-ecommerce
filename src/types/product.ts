export interface Product {
  id: string
  title: string
  price: number
  description: string
  image: string
  badge?: string
  category: 'shoes' | 'tech' | 'accessories' | 'clothing' | 'home' | 'beauty'
}
