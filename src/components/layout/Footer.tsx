import { Link } from 'react-router-dom'

const shopLinks = [
  { label: 'Shoes', category: 'shoes' },
  { label: 'Tech', category: 'tech' },
  { label: 'Accessories', category: 'accessories' },
  { label: 'Clothing', category: 'clothing' },
  { label: 'Home', category: 'home' },
  { label: 'Beauty', category: 'beauty' },
  { label: 'Electronics', category: 'electronics' },
  { label: 'Kitchen', category: 'kitchen' },
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'All Products', to: '/products' },
  { label: 'Cart', to: '/cart' },
  { label: 'Wishlist', to: '/wishlist' },
]

const socials = [
  { label: 'Facebook', path: 'M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.2V12H8v3h2v6h3v-6h2.2l.5-3H13v-1.4c0-.6.3-1 .9-1Z' },
  { label: 'Instagram', path: 'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5ZM17.25 6.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z' },
  { label: 'X', path: 'M4 4l16 16M20 4 4 20' },
]

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">

          <div>
            <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-emerald-700">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-xl text-white shadow-lg shadow-emerald-200">
                🛒
              </span>
              <div className="leading-tight">
                <p className="text-[1rem] font-black tracking-tight">FershCart</p>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-slate-500">Fresh picks</p>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Everyday essentials and premium favorites, delivered fast across Egypt with a clean, seamless checkout.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((social) => (
                <span
                  key={social.label}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {shopLinks.map((link) => (
                <li key={link.category}>
                  <Link
                    to={`/products?category=${link.category}`}
                    className="text-slate-600 transition hover:text-emerald-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-600 transition hover:text-emerald-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Cairo, Egypt</li>
              <li>support@fershcart.example</li>
              <li>+20 100 123 4567</li>
            </ul>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              Support available daily, 9 AM – 10 PM (Cairo time).
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FershCart. All rights reserved.</p>
          <p>Prices shown in Egyptian Pounds (EGP).</p>
        </div>
      </div>
    </footer>
  )
}
