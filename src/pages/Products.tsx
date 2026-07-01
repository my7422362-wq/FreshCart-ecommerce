import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/common/ProductCard";

const categories = [
  "All",
  "Shoes",
  "Tech",
  "Accessories",
  "Clothing",
  "Home",
  "Beauty",
  "Electronics",
  "Kitchen",
] as const

type CategoryFilter = (typeof categories)[number]


export default function Products() {
  const [selected, setSelected] = useState<CategoryFilter>("All");
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);
  const [onlyNewArrivals, setOnlyNewArrivals] = useState(false);

  const filtered = products.filter((p) => {
    const categoryMatch =
      selected === 'All'
        ? true
        : p.category.toLowerCase() === selected.toLowerCase()

    const bestSellerMatch = onlyBestSellers ? p.isBestSeller : true
    const newArrivalMatch = onlyNewArrivals ? p.isNew : true



    return categoryMatch && bestSellerMatch && newArrivalMatch
  })


  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6">

        {/* CATEGORIES + BADGE FILTERS (mobile safe) */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap py-2 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
                  selected === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setOnlyNewArrivals((v) => !v)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition border ${
                onlyNewArrivals
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              New Arrivals
            </button>

            <button
              type="button"
              onClick={() => setOnlyBestSellers((v) => !v)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition border ${
                onlyBestSellers
                  ? 'border-amber-200 bg-amber-50 text-amber-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              Best Sellers
            </button>

            {(onlyBestSellers || onlyNewArrivals) && (
              <button
                type="button"
                onClick={() => {
                  setOnlyBestSellers(false)
                  setOnlyNewArrivals(false)
                  setSelected('All')
                }}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>
            )}
          </div>
        </div>


        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* SIDEBAR (desktop only) */}
          <div className="hidden lg:flex flex-col w-60">
            <h2 className="font-bold mb-3">Filters</h2>

            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-sm font-semibold text-slate-600">Categories</h3>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`text-left px-3 py-2 rounded transition ${
                    selected === cat
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setOnlyNewArrivals((v) => !v)}
                className={`text-left px-3 py-2 rounded border transition ${
                  onlyNewArrivals
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                New Arrivals
              </button>

              <button
                type="button"
                onClick={() => setOnlyBestSellers((v) => !v)}
                className={`text-left px-3 py-2 rounded border transition ${
                  onlyBestSellers
                    ? 'border-amber-200 bg-amber-50 text-amber-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                Best Sellers
              </button>
            </div>
          </div>


          {/* PRODUCTS GRID (FIXED RESPONSIVE ONLY) */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-3 sm:gap-5
              flex-1
              w-full
            "
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}