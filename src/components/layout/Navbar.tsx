import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import type { RootState } from '../../redux/store'

const navItems = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/products', label: 'Products', icon: '🛍️' },
  { to: '/cart', label: 'Cart', icon: '🛒' },
  { to: '/wishlist', label: 'Wishlist', icon: '♡' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const cartCount = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length)

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-emerald-700">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-xl text-white shadow-lg shadow-emerald-200">
            🛒
          </span>
          <div className="leading-tight">
            <p className="text-[1rem] font-black tracking-tight">FershCart</p>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-slate-500">Fresh picks</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-semibold transition-all ${
                  isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/cart"
            className="relative rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            aria-label="Cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-600 px-1 text-[0.65rem] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/wishlist"
            className="relative rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
            aria-label="Wishlist"
          >
            ♡
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[0.65rem] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-emerald-200 bg-emerald-50 p-2.5 text-emerald-700 transition hover:bg-emerald-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-emerald-100 bg-white/95 px-4 py-3 shadow-sm md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
