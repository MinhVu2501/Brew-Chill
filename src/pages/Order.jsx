import { useMemo, useState } from 'react'

const items = [
  { id: 'espresso', name: 'Espresso', price: 3 },
  { id: 'latte', name: 'Latte', price: 4.5 },
  { id: 'coldbrew', name: 'Cold Brew', price: 4.25 },
  { id: 'muffin', name: 'Blueberry Muffin', price: 3 },
]

function Order() {
  const [cart, setCart] = useState({})

  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const remove = (id) => setCart((c) => ({ ...c, [id]: Math.max((c[id] || 0) - 1, 0) }))

  const total = useMemo(() => {
    return items.reduce((sum, it) => sum + (cart[it.id] || 0) * it.price, 0)
  }, [cart])

  return (
    <div>
      <section className="bg-neutral-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Order Pickup</h1>
          <p className="mt-2 text-neutral-700">Build your order and place it at the counter.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between rounded-md border p-4">
              <div>
                <p className="font-medium">{it.name}</p>
                <p className="text-sm text-neutral-600">${it.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-md border" onClick={() => remove(it.id)}>-</button>
                <span className="w-8 text-center">{cart[it.id] || 0}</span>
                <button className="px-3 py-2 rounded-md border" onClick={() => add(it.id)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-md border p-4 h-fit">
          <h2 className="text-lg font-semibold">Your Order</h2>
          <ul className="mt-3 space-y-2">
            {items.filter((it) => (cart[it.id] || 0) > 0).map((it) => (
              <li key={it.id} className="flex justify-between text-sm">
                <span>{it.name} x {cart[it.id]}</span>
                <span>${((cart[it.id] || 0) * it.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full rounded-md bg-amber-700 px-4 py-2 text-white font-medium hover:bg-amber-800">Place Pickup Order</button>
          <p className="mt-2 text-xs text-neutral-600">Online ordering is a demo. Please pay at pickup.</p>
        </div>
      </section>
    </div>
  )
}

export default Order


