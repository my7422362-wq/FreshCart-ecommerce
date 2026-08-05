import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProductCard from '../components/common/ProductCard'
import { featuredProducts } from '../data/products'
import ProductSearchInput from '../components/common/ProductSearchInput'
import { useDebouncedValue } from '../hooks/useDebouncedValue'

const categoryTiles = [
  { label: 'Shoes', category: 'shoes', image: 'photo-1600185365926-3a2ce3cdb9eb' },
  { label: 'Tech', category: 'tech', image: 'photo-1566036653839-c66930877168' },
  { label: 'Accessories', category: 'accessories', image: 'photo-1570993492887-02f5bf2aff21' },
  { label: 'Clothing', category: 'clothing', image: 'photo-1573662073208-1f58a071c756' },
  { label: 'Home', category: 'home', image: 'photo-1592195985871-2d326ada5d51' },
  { label: 'Beauty', category: 'beauty', image: 'photo-1596462502278-27bfdc403348' },
  { label: 'Electronics', category: 'electronics', image: 'photo-1589979034086-5885b60c8f59' },
  { label: 'Kitchen', category: 'kitchen', image: 'photo-1693875161648-913e8680886c' },
]

const stats = [
  { label: 'Products', value: '96+' },
  { label: 'Categories', value: '8' },
  { label: 'Average rating', value: '4.4★' },
  { label: 'Dispatch time', value: '24h' },
]

const features = [
  {
    title: 'Fast delivery',
    body: 'Most orders dispatch within 24 hours and arrive across Egypt in 1–3 days.',
    icon: (
      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    ),
  },
  {
    title: 'Secure checkout',
    body: 'Every order is protected with encrypted, secure payment processing.',
    icon: (
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3ZM9.5 12.5l1.8 1.8L15 10.6" />
    ),
  },
  {
    title: 'Easy returns',
    body: 'Changed your mind? Return eligible items within 30 days, hassle-free.',
    icon: (
      <path d="M4 4v6h6M4.5 10A8 8 0 1 1 6 16.5" />
    ),
  },
  {
    title: 'Real support',
    body: 'Our team is available daily to help with orders, sizing, or returns.',
    icon: (
      <path d="M4 12a8 8 0 1 1 3 6.2L4 19l1-3.2A7.96 7.96 0 0 1 4 12Z" />
    ),
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const debouncedQuery = useDebouncedValue(searchQuery, 300)

  const results = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase()
    const source = featuredProducts
    if (!q) return source
    return source.filter((p) => p.title.toLowerCase().includes(q))
  }, [debouncedQuery])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    toast.success('You’re subscribed! Watch your inbox for fresh deals.')
    setNewsletterEmail('')
  }

  return (
    <div className="space-y-16 sm:space-y-20">

      {/* HERO */}
      <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-500 p-6 text-white shadow-[0_20px_60px_-25px_rgba(16,185,129,0.55)] sm:p-8 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">Fresh picks</p>
            <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Shop smarter with a cleaner, faster storefront.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
              Discover everyday essentials, premium favorites, and limited-time offers in one polished shopping experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Shop now
              </Link>
              <Link
                to="/wishlist"
                className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View wishlist
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-emerald-50">
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">Free delivery over 1,500 EGP</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">Fast 24h dispatch</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.35rem]">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                  alt="Featured product"
                  className="h-72 w-full object-cover sm:h-80"
                />
              </div>
            </div>

            <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-slate-900 shadow-lg sm:-left-8">
              <span className="text-lg">★</span>
              <div className="leading-tight">
                <p className="text-sm font-bold">4.6/5</p>
                <p className="text-[0.65rem] text-slate-500">1.2k reviews</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-lg sm:-right-6">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-emerald-300">Today's deal</p>
              <p className="text-lg font-bold">−20% off</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-2xl font-black text-emerald-600 sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* SHOP BY CATEGORY */}
      <section>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Browse</p>
            <h2 className="text-2xl font-semibold text-slate-900">Shop by category</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700">
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.category}
              to={`/products?category=${tile.category}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={`https://images.unsplash.com/${tile.image}?auto=format&fit=crop&w=500&q=70`}
                alt={tile.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
              <span className="absolute bottom-3 left-4 text-sm font-semibold text-white sm:text-base">
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <div className="mb-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Featured products</p>
              <h2 className="text-2xl font-semibold text-slate-900">Popular this week</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700">
              See all
            </Link>
          </div>

          <ProductSearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search featured products..."
          />
        </div>

        {results.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">No results found</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Try a different search</h2>
            <button
              type="button"
              className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* WHY SHOP WITH US */}
      <section>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Why FershCart</p>
          <h2 className="text-2xl font-semibold text-slate-900">Shopping made simple</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white sm:p-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Stay in the loop</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Get fresh deals in your inbox</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            New arrivals, best sellers, and limited-time offers — no spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
