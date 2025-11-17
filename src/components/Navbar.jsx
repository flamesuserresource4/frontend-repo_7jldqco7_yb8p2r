import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Funktionen' },
    { href: '#how', label: 'Ablauf' },
    { href: '#pricing', label: 'Preise' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400" />
            <span className="font-semibold text-gray-900">MPU KI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-4 py-2 text-sm font-medium shadow hover:opacity-95 transition"
            >
              Jetzt starten
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-center"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
