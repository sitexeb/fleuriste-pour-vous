import { useEffect, useRef } from 'react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="accueil" style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>

      {/* Parallax image */}
      <div ref={parallaxRef} style={{ position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <img src="/images/hero2.jpg" alt="hero" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
        }} />
      </div>

      {/* Multi-layer overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(160deg, rgba(26,26,26,0.72) 0%, rgba(90,60,50,0.4) 50%, rgba(201,169,110,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(26,26,26,0.5) 100%)',
      }} />

      {/* Decorative botanical SVG */}
      <div className="anim-rotate" style={{
        position: 'absolute', top: '8%', right: '6%', zIndex: 2,
        width: 180, height: 180, opacity: 0.12,
      }}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#c9a96e" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" stroke="#c9a96e" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" stroke="#c9a96e" strokeWidth="0.5"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
            <line key={a}
              x1="100" y1="10"
              x2="100" y2="30"
              stroke="#c9a96e" strokeWidth="0.8"
              transform={`rotate(${a} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Floating petals */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${10 + i * 12}%`,
          right: `${8 + (i % 3) * 6}%`,
          zIndex: 2,
          fontSize: '1.2rem',
          opacity: 0.3,
          animation: `float ${4 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.7}s`,
        }}>🌸</div>
      ))}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 3,
        height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: 1400, margin: '0 auto', padding: '0 3rem',
      }}>
        <div className="anim-fade-up d-0 opacity-0">
          {/* Pre-title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, transparent, #c9a96e)' }} />
            <span style={{
              fontFamily: 'Didact Gothic, sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c9a96e',
            }}>Fleuriste artisanal · Roanne, Loire</span>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
          </div>

          {/* Main title */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            color: '#fff',
            marginBottom: '0.25rem',
            letterSpacing: '-0.02em',
          }}>Des fleurs</h1>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            marginBottom: '2rem',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #e8d5a3, #c9a96e, #a07840)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>pour vous.</h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'Cormorant, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 520,
            lineHeight: 1.6,
            marginBottom: '3rem',
          }}>
            Compositions florales sur mesure, bouquets de saison &amp; créations pour vos moments précieux.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#galerie" className="btn-gold">Découvrir nos créations</a>
            <a href="#contact" className="btn-ghost">Prendre rendez-vous</a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
          }}>
            {[
              { num: '15+', label: 'Années d\'expérience' },
              { num: '∞', label: 'Créations uniques' },
              { num: '100%', label: 'Fleurs fraîches' },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 400,
                  color: '#c9a96e',
                  lineHeight: 1,
                }}>{s.num}</div>
                <div style={{
                  fontFamily: 'Didact Gothic, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 6,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-float" style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'Didact Gothic', fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
        <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, rgba(201,169,110,0.8), transparent)' }} />
      </div>
    </section>
  )
}
