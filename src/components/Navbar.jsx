import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Modules', href: '#modules' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames(
      'fixed top-0 inset-x-0 z-40 transition-all duration-300',
      scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 shadow ring-1 ring-white/40" />
            <span className="text-xl font-semibold tracking-tight">Syclo ERP</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-rose-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="inline-flex items-center gap-1 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-lg transition-colors">
              Request demo
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="px-2 py-3 rounded-lg hover:bg-slate-100 text-slate-700">
                  {item.label}
                </a>
              ))}
              <a href="#demo" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg bg-rose-600 text-white text-center">
                Request demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
