import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

export default function WishlistPage() {
  const items = useSelector((state: RootState) => state.wishlist.items)

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Wishlist</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Your favorite picks</h2>
        <p className="mt-2 text-slate-600">Everything you’ve liked will appear here.</p>
      </section>

      {items.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
          No items saved yet.
        </div>
      ) : (
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-lime-50 to-white">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">${item.price.toFixed(2)}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Loved
                </span>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  )
}
