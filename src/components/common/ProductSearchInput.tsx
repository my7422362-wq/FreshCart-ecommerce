import type { ChangeEvent } from 'react'

interface ProductSearchInputProps {
  value: string
  onChange: (nextValue: string) => void
  placeholder?: string
  autoFocus?: boolean
}

export default function ProductSearchInput({
  value,
  onChange,
  placeholder = 'Search products...',
  autoFocus,
}: ProductSearchInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="product-search">
        Search products
      </label>
      <div className="relative">
        <input
          id="product-search"
          type="search"
          value={value}
          autoFocus={autoFocus}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-full border border-slate-200 bg-white/90 px-4 py-3 pr-12 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
        />
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden>
          🔎
        </div>
      </div>
    </div>
  )
}

