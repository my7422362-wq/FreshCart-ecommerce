import { useMemo, useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'Shoes', 'Tech', 'Accessories', 'Clothing', 'Home', 'Beauty'] as const

type Category = (typeof categories)[number]

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredProducts = useMemo(() => {
    const searchValue = search.toLowerCase()

    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory.toLowerCase()
      return matchesSearch && matchesCategory
    })
  }, [activeCategory, search])

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-white via-emerald-50 to-lime-50 p-5 shadow-sm sm:p-7 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Fresh collection</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Discover products made for everyday living.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
              Browse a curated selection of modern essentials designed to feel simple, premium, and easy to shop.
            </p>
          </div>

          <div className="w-full max-w-md">
            <label className="relative block">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
                className="w-full rounded-full border border-slate-200 bg-white px-11 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </label>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="flex items-center justify-between lg:block">
            <h3 className="text-lg font-semibold text-slate-900">Categories</h3>
            <p className="text-sm text-slate-500 lg:mt-1">Shop by style</p>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-2 lg:overflow-visible">
            {categories.map((item) => {
              const isActive = activeCategory === item

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveCategory(item)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </aside>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Showing {filteredProducts.length} items
            </p>
            <p className="text-sm text-slate-500">{activeCategory === 'All' ? 'All categories' : activeCategory}</p>
          </div>

          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>

          {filteredProducts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
              No products matched your search.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
