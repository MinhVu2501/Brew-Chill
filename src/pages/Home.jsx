import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop"
            alt="Coffee background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-40 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Brew & Chill</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-100">Your neighborhood spot for ethically sourced beans, artisan espresso, and warm hospitality.</p>
          <div className="mt-8 flex items-center gap-3">
            <Link to="/contact" className="px-5 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-neutral-100">Visit Us</Link>
            <Link to="/order" className="px-5 py-3 rounded-md bg-amber-700 text-white font-medium hover:bg-amber-800">Order Now</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=2069&auto=format&fit=crop"
            alt="Cafe interior"
            className="w-full h-72 md:h-96 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Story</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              We started Brew & Chill with a simple idea: create a cozy space where the community can gather over great coffee. Our beans are ethically sourced and roasted locally, and our baristas craft every cup with care.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Whether you are meeting friends, getting work done, or just need a quiet moment, we are here for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Gallery</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1974&auto=format&fit=crop',
            ].map((src) => (
              <img key={src} src={src} alt="Cafe" className="h-36 md:h-48 w-full object-cover rounded-md" />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What our guests say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Best latte in town and such a cozy vibe. My go-to spot!',
                name: 'Ava M.',
              },
              {
                quote: 'Friendly staff and the pastries are always fresh and delicious.',
                name: 'Jacob R.',
              },
              {
                quote: 'I love working from here — fast Wi‑Fi and amazing cold brew.',
                name: 'Priya S.',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-lg border p-6 bg-white shadow-sm">
                <div className="text-amber-700">★★★★★</div>
                <p className="mt-3 text-neutral-700 italic">“{t.quote}”</p>
                <p className="mt-4 font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


