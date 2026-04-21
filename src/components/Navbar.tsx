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
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)',
        background: scrolled ? 'rgba(253,248,243,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.2)' : 'none',
        padding: scrolled ? '1rem 0' : '1.75rem 0',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#accueil" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <img src="/images/logo2.png" alt="" style={{ width: 42, height: 42, objectFit: 'contain' }} />
            <div>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.25rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                color: scrolled ? '#1a1a1a' : '#fff',
                lineHeight: 1,
                transition: 'color 0.4s',
              }}>POUR VOUS</div>
              <div style={{
                fontFamily: 'Didact Gothic, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: '#c9a96e',
                textTransform: 'uppercase',
                marginTop: 3,
              }}>Fleuriste · Roanne</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: 'Didact Gothic, sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: scrolled ? '#1a1a1a' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                position: 'relative',
                paddingBottom: 4,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9a96e')}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#1a1a1a' : 'rgba(255,255,255,0.9)')}
              >{l.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn-gold hidden md:inline-flex" style={{ padding: '0.7rem 1.75rem', fontSize: '0.65rem' }}>
            Commander
          </a>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: scrolled ? '#1a1a1a' : '#fff',
          }} className="md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: '#fdf8f3',
            borderTop: '1px solid rgba(201,169,110,0.2)',
            padding: '1rem 2rem 2rem',
          }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'block',
                padding: '0.85rem 0',
                fontFamily: 'Didact Gothic, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201,169,110,0.15)',
              }}>{l.label}</a>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
