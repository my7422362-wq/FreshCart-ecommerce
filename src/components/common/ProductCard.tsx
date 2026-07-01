import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import type { Product } from '../../types/product'
import { addToCart } from '../../redux/cartSlice'
import { toggleWishlist } from '../../redux/wishlistSlice'
import type { RootState } from '../../redux/store'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch()
  const isWishlisted = useSelector((state: RootState) => state.wishlist.items.some((item) => item.id === product.id))

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.title, price: product.price, image: product.image, quantity: 1 }))
    toast.success('Product added to cart successfully 🛒')
  }

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product))

    if (isWishlisted) {
      toast.info('Product removed from wishlist')
    } else {
      toast.success('Product added to wishlist successfully 💛')
    }
  }

  const displayCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1)

  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_10px_35px_-20px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)]">
      <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-emerald-50 via-lime-50 to-white sm:h-60">
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <div className="flex flex-wrap items-start gap-2">

            {product.isNew && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm">
                Best Seller
              </span>
            )}
            {typeof product.discountPercentage === 'number' && product.discountPercentage > 0 && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-700 shadow-sm">
                Sale
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleToggleWishlist}
            className={`rounded-full border p-2 text-sm shadow-sm backdrop-blur transition hover:scale-105 ${
              isWishlisted ? 'border-rose-200 bg-rose-50 text-rose-500' : 'border-white/70 bg-white/80 text-slate-500 hover:bg-white'
            }`}
            aria-label="Toggle wishlist"
          >
            {isWishlisted ? '♥' : '♡'}
          </button>
        </div>

        <Link to={`/product/${product.id}`} className="h-full w-full transition duration-300 group-hover:scale-[1.02]" aria-label={`View ${product.title}`}>
          <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-110" loading="lazy" />
        </Link>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">{displayCategory}</span>
          <span className="text-sm font-medium text-slate-500">★ 4.8</span>
        </div>

        <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-slate-900">{product.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
            <p className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</p>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
