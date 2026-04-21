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
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      transition:'all .55s cubic-bezier(.22,1,.36,1)',
      background: scrolled ? 'rgba(253,246,238,.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,169,106,.18)' : 'none',
      padding: scrolled ? '.9rem 0' : '1.6rem 0',
    }}>
      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

        {/* LOGO */}
        <a href="#accueil" style={{ display:'flex', alignItems:'center', gap:'.8rem', textDecoration:'none' }}>
          <img src="/images/logo-final.png" alt="logo" style={{ width:46, height:46, objectFit:'contain', filter: scrolled ? 'none' : 'brightness(0) invert(1)' }} />
          <div>
            <div style={{
              fontFamily:'Playfair Display, serif', fontSize:'1.2rem', fontWeight:500,
              letterSpacing:'.14em', lineHeight:1,
              color: scrolled ? '#1c1c1c' : '#fff',
              transition:'color .4s',
            }}>POUR VOUS</div>
            <div style={{
              fontFamily:'Jost, sans-serif', fontSize:'.52rem',
              letterSpacing:'.28em', textTransform:'uppercase',
              color:'#c8a96a', marginTop:3,
            }}>Fleuriste · Roanne</div>
          </div>
        </a>

        {/* NAV DESKTOP */}
        <nav style={{ display:'flex', gap:'2.2rem' }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily:'Jost, sans-serif', fontSize:'.68rem',
              letterSpacing:'.16em', textTransform:'uppercase',
              color: scrolled ? '#1c1c1c' : 'rgba(255,255,255,.88)',
              textDecoration:'none', transition:'color .3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c8a96a')}
            onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#1c1c1c' : 'rgba(255,255,255,.88)')}
            >{l.label}</a>
          ))}
        </nav>

        {/* MOBILE */}
        <button onClick={() => setOpen(!open)} style={{ background:'none', border:'none', cursor:'pointer', color: scrolled ? '#1c1c1c' : '#fff' }} className="md:hidden">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {open && (
        <div style={{ background:'#fdf6ee', borderTop:'1px solid rgba(200,169,106,.2)', padding:'1rem 2rem 2rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display:'block', padding:'.8rem 0',
              fontFamily:'Jost, sans-serif', fontSize:'.78rem',
              letterSpacing:'.16em', textTransform:'uppercase',
              color:'#1c1c1c', textDecoration:'none',
              borderBottom:'1px solid rgba(200,169,106,.12)',
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
