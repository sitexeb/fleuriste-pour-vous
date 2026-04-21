import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La Boutique', href: '#boutique' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Horaires', href: '#horaires' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(250,246,241,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(143,173,136,0.2)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 no-underline">
          <img src="/images/logo-emblem.png" alt="emblem" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.3rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#2d2d2d',
              lineHeight: 1,
            }}>POUR VOUS</div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.22em',
              color: '#8fad88',
              textTransform: 'uppercase',
              marginTop: 2,
            }}>Fleuriste · Roanne</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.72rem' }}>
          Nous contacter
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2d2d2d' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#faf6f1',
          borderTop: '1px solid rgba(143,173,136,0.2)',
          padding: '1.5rem 1.5rem',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#2d2d2d',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(143,173,136,0.15)',
              }}
            >{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
