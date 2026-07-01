import ProductCard from '../components/common/ProductCard'
import { featuredProducts } from '../data/products'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-500 p-6 text-white shadow-[0_20px_60px_-25px_rgba(16,185,129,0.55)] sm:p-8 lg:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">Fresh picks</p>
            <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Shop smarter with a cleaner, faster storefront.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
              Discover everyday essentials, premium favorites, and limited-time offers in one polished shopping experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/products"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Shop now
              </a>
              <a
                href="/wishlist"
                className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View wishlist
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-emerald-50">
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">Free delivery over $35</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">Fast 24h dispatch</span>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/20 bg-white/15 p-4 backdrop-blur-sm sm:p-6">
            <div className="rounded-[1.25rem] border border-white/20 bg-white/90 p-6 text-slate-800 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Today’s deal</p>
              <h2 className="mt-2 text-2xl font-bold">Save 20% on fresh essentials</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enjoy premium quality items and curated favorites with fast, seamless checkout-ready browsing.
              </p>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3">
                <span className="text-sm font-medium text-emerald-700">Free return window</span>
                <span className="text-xl font-bold text-emerald-700">30d</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Featured products</p>
            <h2 className="text-2xl font-semibold text-slate-900">Popular this week</h2>
          </div>
          <a href="/products" className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700">
            See all
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
