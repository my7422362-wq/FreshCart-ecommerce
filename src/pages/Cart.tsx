import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import type { RootState } from '../redux/store'

export default function CartPage() {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 4.99 : 0
  const total = subtotal + shipping

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Cart</p>
            <h2 className="text-2xl font-semibold text-slate-900">Your items</h2>
          </div>
          {items.length > 0 && (
            <button onClick={() => dispatch(clearCart())} className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
            Your cart is empty. Add some fresh picks to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-emerald-50">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-600">${item.price.toFixed(2)} each</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <div className="flex items-center rounded-full border border-slate-200">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-3 py-1 text-lg text-slate-600">
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-3 py-1 text-lg text-slate-600">
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="text-sm text-rose-500 hover:text-rose-600">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Summary</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">Order summary</h3>

        <div className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="mt-8 w-full rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Proceed to checkout
        </button>
      </aside>
    </div>
  )
}
