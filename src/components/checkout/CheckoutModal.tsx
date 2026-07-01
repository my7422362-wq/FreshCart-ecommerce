import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { clearCart } from '../../redux/cartSlice'

type CheckoutFields = {
  fullName: string
  email: string
  address: string
  phone: string
}

type CheckoutModalProps = {
  isOpen: boolean
  onClose: () => void
}

function getFirstNameError(v: string) {
  if (!v.trim()) return 'Full name is required.'
  return ''
}

function getEmailError(v: string) {
  if (!v.trim()) return 'Email is required.'
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  return ok ? '' : 'Enter a valid email address.'
}

function getAddressError(v: string) {
  if (!v.trim()) return 'Address is required.'
  return ''
}

function getPhoneError(v: string) {
  if (!v.trim()) return 'Phone number is required.'
  const ok = /^[0-9+()\-\s]{7,}$/.test(v.trim())
  return ok ? '' : 'Enter a valid phone number.'
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const dispatch = useDispatch()

  const [fields, setFields] = useState<CheckoutFields>({
    fullName: '',
    email: '',
    address: '',
    phone: '',
  })

  const [touched, setTouched] = useState<Record<keyof CheckoutFields, boolean>>({
    fullName: false,
    email: false,
    address: false,
    phone: false,
  })

  const [isClosing, setIsClosing] = useState(false)

  const errors = useMemo(() => {
    return {
      fullName: getFirstNameError(fields.fullName),
      email: getEmailError(fields.email),
      address: getAddressError(fields.address),
      phone: getPhoneError(fields.phone),
    }
  }, [fields.address, fields.email, fields.fullName, fields.phone])

  const isValid = useMemo(() => {
    return !errors.fullName && !errors.email && !errors.address && !errors.phone
  }, [errors])

  const handleClose = () => {
    setIsClosing(true)

    // Match transition duration (200ms)
    window.setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 200)
  }

  useEffect(() => {
    if (!isOpen) return

    setIsClosing(false)
    setTouched({ fullName: false, email: false, address: false, phone: false })
    setFields({ fullName: '', email: '', address: '', phone: '' })
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const onBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setTouched({ fullName: true, email: true, address: true, phone: true })
    if (!isValid) return

    toast.success('Order placed successfully 🎉')
    dispatch(clearCart())

    // If other parts store cart in localStorage in the future
    try {
      window.localStorage.removeItem('cart')
      window.localStorage.removeItem('cartItems')
    } catch {
      // ignore
    }

    handleClose()
  }

  if (!isOpen && !isClosing) return null

  const modalScale = isClosing ? 'scale-[0.98]' : 'scale-100'
  const overlayOpacity = isClosing ? 'opacity-0' : 'opacity-100'

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-opacity duration-200 ${overlayOpacity}`}
      onMouseDown={onBackdropMouseDown}
      aria-hidden={false}
    >
      <div
        className={`absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-200 ${overlayOpacity}`}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-lg transform rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:p-7 transition duration-200 ${modalScale}`}
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Checkout</h3>
            <p className="mt-1 text-sm text-slate-600">Enter your details to place the order.</p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition"
            aria-label="Close"
          >
            <span className="text-lg">×</span>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
            <input
              value={fields.fullName}
              onChange={(e) => setFields((p) => ({ ...p, fullName: e.target.value }))}
              onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              placeholder="Enter your full name"
            />
            {touched.fullName && errors.fullName && <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input
              value={fields.email}
              onChange={(e) => setFields((p) => ({ ...p, email: e.target.value }))}
              onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              placeholder="Enter your email"
              inputMode="email"
            />
            {touched.email && errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Address</label>
            <input
              value={fields.address}
              onChange={(e) => setFields((p) => ({ ...p, address: e.target.value }))}
              onBlur={() => setTouched((p) => ({ ...p, address: true }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              placeholder="Enter your adress"
            />
            {touched.address && errors.address && <p className="mt-1 text-xs text-rose-600">{errors.address}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Phone number</label>
            <input
              value={fields.phone}
              onChange={(e) => setFields((p) => ({ ...p, phone: e.target.value }))}
              onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              placeholder=" Enter your phone number "
              inputMode="tel"
            />
            {touched.phone && errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Send Order
            </button>
          </div>

          
        </form>
      </div>
    </div>
  )
}

