export default function Hero() {
  return (
    <section id="accueil" style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {/* Background image */}
      <img
        src="/images/hero.jpg"
        alt="Compositions florales POUR VOUS"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(45,45,45,0.55) 0%, rgba(143,173,136,0.2) 60%, rgba(201,125,90,0.15) 100%)',
      }} />

      {/* Decorative top-right corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(212,165,165,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 6vw',
        maxWidth: 900,
      }}>
        <div className="animate-fade-up" style={{ opacity: 0 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: 32, height: 1, background: '#d4a5a5', display: 'block' }} />
            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#e8cece',
            }}>Fleuriste artisanal · Roanne</span>
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}>
            Des fleurs<br />
            <em style={{ fontStyle: 'italic', color: '#e8cece' }}>pour vous</em> émouvoir
          </h1>

          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 480,
            marginBottom: '2.5rem',
          }}>
            Compositions florales sur mesure, bouquets de saison, créations pour vos moments précieux.
            Un savoir-faire artisanal au cœur de Roanne.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#galerie" className="btn-primary">Voir nos créations</a>
            <a href="#contact" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>Nous contacter</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 10,
      }} className="animate-float">
        <span style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.62rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
        }}>Découvrir</span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
        }} />
      </div>
    </section>
  )
}
