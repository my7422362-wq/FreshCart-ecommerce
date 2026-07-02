import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/common/ProductCard";
import ProductSearchInput from "../components/common/ProductSearchInput";
import { useDebouncedValue } from "../hooks/useDebouncedValue";


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
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebouncedValue(searchQuery, 300);

  const filtered = useMemo(() => {
    const normalizedQuery = debouncedQuery.trim().toLowerCase();

    return products.filter((p) => {
      const categoryMatch =
        selected === 'All'
          ? true
          : p.category.toLowerCase() === selected.toLowerCase();

      const bestSellerMatch = onlyBestSellers ? p.isBestSeller : true;
      const newArrivalMatch = onlyNewArrivals ? p.isNew : true;

      const nameMatch = normalizedQuery.length === 0 ? true : p.title.toLowerCase().includes(normalizedQuery);

      return categoryMatch && bestSellerMatch && newArrivalMatch && nameMatch;
    });
  }, [debouncedQuery, onlyBestSellers, onlyNewArrivals, selected]);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6">

        {/* CATEGORIES + BADGE FILTERS (mobile safe) */}
        <div className="flex flex-col gap-3">
          <ProductSearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search by product name..." />

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
          {filtered.length === 0 ? (
            <div className="flex flex-1 items-center justify-center rounded-[2rem] border border-slate-200 bg-white p-10">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">No results found</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Try a different search</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {debouncedQuery.trim().length === 0
                    ? 'Adjust filters to see more products.'
                    : 'We couldn’t find any products matching your search.'}
                </p>
                {debouncedQuery.trim().length > 0 && (
                  <button
                    type="button"
                    className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>
          ) : (
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
          )}

        </div>
      </div>
    </div>
  );
}
