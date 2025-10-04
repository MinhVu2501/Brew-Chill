import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-neutral-900' : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
    }`

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">Brew & Chill</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/menu" className={linkClass}>
              Menu
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <NavLink to="/order" className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 transition-colors">
              Order Pickup
            </NavLink>
          </nav>
          <button aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <NavLink to="/" className={linkClass} onClick={() => setOpen(false)} end>
                Home
              </NavLink>
              <NavLink to="/menu" className={linkClass} onClick={() => setOpen(false)}>
                Menu
              </NavLink>
              <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
              <NavLink to="/order" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 transition-colors" onClick={() => setOpen(false)}>
                Order Pickup
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar


