import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import CartPage from '../pages/Cart'
import HomePage from '../pages/Home'
import ProductDetailsPage from '../pages/ProductDetails'
import ProductsPage from '../pages/Products'
import WishlistPage from '../pages/Wishlist'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
