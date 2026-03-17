'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchModal from './SearchModal'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-[rgba(10,22,40,0.97)] backdrop-blur-md border-b border-[rgba(201,151,58,0.2)] px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="logo-hex w-[38px] h-[38px] bg-[var(--gold)] flex items-center justify-center font-serif font-black text-[var(--navy)] text-lg">W</div>
          <div>
            <span className="font-serif text-white font-bold text-[1.2rem] block">Westbrook Academy</span>
            <span className="text-[var(--gold)] text-[0.65rem] tracking-[0.15em] uppercase block">Est. 1948</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 rounded transition-all duration-200 no-underline ${
                pathname === link.href
                  ? 'text-[var(--gold)] bg-[rgba(201,151,58,0.1)]'
                  : 'text-white/75 hover:text-[var(--gold-light)] hover:bg-[rgba(201,151,58,0.08)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/portal" className="ml-1 px-4 py-2 bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm rounded transition-all hover:bg-[var(--gold-light)] no-underline">
            Student Portal
          </Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="ml-1 px-3 py-2 text-white/60 hover:text-[var(--gold)] transition-colors text-base"
            title="Search (⌘K)"
          >
            🔍
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-[22px] h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[68px] left-0 right-0 bottom-0 bg-[var(--navy)] z-40 flex flex-col p-8 gap-2 overflow-y-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 no-underline text-[1.1rem] py-4 border-b border-white/10 hover:text-[var(--gold)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/portal" className="text-white/85 no-underline text-[1.1rem] py-4 border-b border-white/10 hover:text-[var(--gold)] transition-colors">
            Student Portal
          </Link>
          <button onClick={() => { setSearchOpen(true); setMenuOpen(false) }} className="text-white/85 text-[1.1rem] py-4 text-left border-b border-white/10 hover:text-[var(--gold)] transition-colors bg-transparent border-x-0 border-t-0 cursor-pointer">
            🔍 Search
          </button>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
