function Section({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.name} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">{i.name}</p>
              {i.description && <p className="text-sm text-neutral-600">{i.description}</p>}
            </div>
            <p className="text-neutral-800">{i.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const coffee = [
  { name: 'Espresso', price: '$3.00' },
  { name: 'Americano', price: '$3.50' },
  { name: 'Latte', price: '$4.50', description: 'House-made syrup options' },
  { name: 'Cappuccino', price: '$4.50' },
  { name: 'Mocha', price: '$4.95' },
]

const cold = [
  { name: 'Cold Brew', price: '$4.25' },
  { name: 'Iced Latte', price: '$4.75' },
  { name: 'Iced Mocha', price: '$5.25' },
]

const food = [
  { name: 'Croissant', price: '$3.25' },
  { name: 'Avocado Toast', price: '$6.50' },
  { name: 'Blueberry Muffin', price: '$3.00' },
]

function Menu() {
  return (
    <div>
      <section className="bg-neutral-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Menu</h1>
          <p className="mt-2 text-neutral-700">Prices and availability may vary. Ask about seasonal specials.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-10">
        <Section title="Hot Coffee" items={coffee} />
        <Section title="Cold Coffee" items={cold} />
        <Section title="Bites" items={food} />
      </section>
    </div>
  )
}

export default Menu


