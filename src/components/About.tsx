export default function About() {
  return (
    <section id="boutique" style={{ background: '#fdf8f3', padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,158,115,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '6rem',
          alignItems: 'center',
        }}>

          {/* Images composition */}
          <div style={{ position: 'relative', minHeight: 560 }}>
            {/* Main image */}
            <div className="parallax-card" style={{
              position: 'absolute', top: 0, left: 0,
              width: '78%', height: 480,
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
            }}>
              <img src="/images/boutique2.jpg" alt="Boutique" style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.8s ease',
              }} />
            </div>
            {/* Secondary image */}
            <div className="parallax-card" style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '52%', height: 320,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              border: '6px solid #fdf8f3',
            }}>
              <img src="/images/about2.jpg" alt="Fleuriste" style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
            </div>
            {/* Gold badge */}
            <div style={{
              position: 'absolute', top: '38%', right: '-2%',
              width: 100, height: 100,
              background: 'linear-gradient(135deg, #c9a96e, #a07840)',
              borderRadius: '50%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(201,169,110,0.4)',
              zIndex: 10,
            }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 500, color: '#fff', lineHeight: 1 }}>15</span>
              <span style={{ fontFamily: 'Didact Gothic', fontSize: '0.5rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>ans</span>
            </div>
            {/* Decorative line */}
            <div style={{
              position: 'absolute', top: -40, left: -40,
              width: 120, height: 120,
              border: '1px solid rgba(201,169,110,0.25)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Text */}
          <div>
            <p className="label">Notre histoire</p>
            <div className="luxury-divider" style={{ justifyContent: 'flex-start', marginBottom: '1.75rem' }}>
              <div className="diamond" />
              <div className="line" style={{ background: 'linear-gradient(to right, #c9a96e, transparent)' }} />
            </div>

            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#1a1a1a',
              marginBottom: '1.75rem',
            }}>
              Un commerce de cœur,<br />
              <em style={{ color: '#7a9e73' }}>au cœur de Roanne</em>
            </h2>

            <p style={{
              fontFamily: 'Cormorant, serif',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#5c4f47',
              marginBottom: '1.5rem',
              borderLeft: '3px solid #c9a96e',
              paddingLeft: '1.25rem',
            }}>
              « Chaque bouquet est une lettre d'amour adressée à celui qui le reçoit. »
            </p>

            <p style={{
              fontFamily: 'Didact Gothic, sans-serif',
              fontSize: '0.92rem',
              lineHeight: 1.9,
              color: '#5c4f47',
              marginBottom: '1.25rem',
            }}>
              Bienvenue chez <strong style={{ color: '#1a1a1a' }}>POUR VOUS</strong>, votre fleuriste de proximité à Roanne.
              Depuis plus de 15 ans, nous créons avec passion des compositions florales qui racontent vos émotions
              et subliment vos instants de vie.
            </p>
            <p style={{
              fontFamily: 'Didact Gothic, sans-serif',
              fontSize: '0.92rem',
              lineHeight: 1.9,
              color: '#5c4f47',
              marginBottom: '2.5rem',
            }}>
              Chaque fleur est soigneusement sélectionnée auprès de producteurs locaux et de marchés aux fleurs
              de qualité. Ici, l'artisanat floral est un art de vivre.
            </p>

            {/* Values grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1rem', marginBottom: '2.5rem',
            }}>
              {[
                { icon: '🌿', t: 'Fleurs de saison', s: 'Sélection locale' },
                { icon: '✂️', t: 'Sur mesure', s: 'Créations uniques' },
                { icon: '🎁', t: 'Emballage raffiné', s: 'Présentation soignée' },
                { icon: '💚', t: 'Commerce local', s: 'Ancré à Roanne' },
              ].map(v => (
                <div key={v.t} style={{
                  padding: '1.25rem',
                  background: 'linear-gradient(135deg, rgba(201,169,110,0.06), rgba(122,158,115,0.04))',
                  border: '1px solid rgba(201,169,110,0.15)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#c9a96e'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.15)'}
                >
                  <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: 6 }}>{v.icon}</span>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#1a1a1a', marginBottom: 2 }}>{v.t}</div>
                  <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.72rem', color: '#9a8a7a', letterSpacing: '0.05em' }}>{v.s}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold">Nous rencontrer</a>
          </div>
        </div>
      </div>
    </section>
  )
}
