export type ProductCategory =
  | 'shoes'
  | 'tech'
  | 'accessories'
  | 'clothing'
  | 'home'
  | 'beauty'
  | 'electronics'
  | 'kitchen'

export interface Product {
  id: string
  title: string
  price: number
  category: ProductCategory
  image: string
  description: string

  rating: number
  isNew: boolean
  isBestSeller: boolean

  discountPercentage?: number
}

