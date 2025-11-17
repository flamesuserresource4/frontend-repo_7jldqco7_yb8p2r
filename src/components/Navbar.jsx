import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#features', label: 'Funktionen' },
    { href: '#how', label: 'Ablauf' },
    { href: '#pricing', label: 'Preise' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 glow" />
            <span className="font-semibold text-white">MPU KI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-white px-4 py-2 text-sm font-medium shadow hover:opacity-95 transition glow"
            >
              Jetzt starten
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 text-center glow"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
