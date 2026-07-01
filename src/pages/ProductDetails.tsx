import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../redux/cartSlice'
import { products } from '../data/products'
import type { RootState } from '../redux/store'
import { toggleWishlist } from '../redux/wishlistSlice'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const isWishlisted = useSelector((state: RootState) => state.wishlist.items.some((item) => item.id === id))

  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Not found</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Product not available</h2>
      </section>
    )
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3)

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
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-br from-emerald-50 via-lime-50 to-white p-0 shadow-inner sm:min-h-[420px]">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Product overview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{product.title}</h2>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {product.badge && (
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {product.badge}
                </span>
              )}
              <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {displayCategory}
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Price</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600">{product.description}</p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Premium quality, modern design, and everyday practicality in one carefully selected product.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleToggleWishlist}
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                  isWishlisted ? 'border-rose-200 bg-rose-50 text-rose-500' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">Related products</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((item) => (
            <article key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-lime-50 to-white">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-slate-900">${item.price.toFixed(2)}</span>
                <a href={`/product/${item.id}`} className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  View details
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
