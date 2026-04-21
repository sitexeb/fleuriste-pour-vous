const items = [
  { src: '/images/g1.jpg', label: 'Pivoine & Romantisme', cat: 'Bouquet' },
  { src: '/images/g2.jpg', label: 'Élégance Nuptiale', cat: 'Mariage' },
  { src: '/images/g3.jpg', label: 'Pampas & Terracotta', cat: 'Décoration' },
  { src: '/images/g4.jpg', label: 'Table de Cérémonie', cat: 'Événement' },
  { src: '/images/g5.jpg', label: 'Fleurs Sauvages', cat: 'Saison' },
  { src: '/images/g6.jpg', label: 'Vitrine Florale', cat: 'Boutique' },
]

export default function Gallery() {
  return (
    <section id="galerie" style={{ background: '#1a1a1a', padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,169,110,0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(122,158,115,0.05) 0%, transparent 50%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p className="label" style={{ color: '#c9a96e' }}>Notre univers floral</p>
            <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
              <div className="diamond" />
              <div className="line" style={{ background: 'linear-gradient(to right, #c9a96e, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.1,
            }}>Galerie de<br /><em style={{ color: '#c9a96e' }}>créations</em></h2>
          </div>
          <p style={{
            fontFamily: 'Cormorant, serif',
            fontStyle: 'italic',
            fontSize: '1.15rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 320,
            lineHeight: 1.7,
          }}>Un aperçu de nos compositions, réalisées avec soin au fil des saisons.</p>
        </div>

        {/* Masonry grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }}>
          {items.map((item, i) => (
            <div
              key={item.src}
              className="gal-item"
              style={{
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                gridRow: i === 0 ? 'span 2' : 'span 1',
                height: i === 0 ? 560 : 270,
              }}
            >
              <img src={item.src} alt={item.label} />
              <div className="gal-overlay">
                <div>
                  <div style={{
                    fontFamily: 'Didact Gothic',
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#c9a96e',
                    marginBottom: 6,
                  }}>{item.cat}</div>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    fontSize: i === 0 ? '1.6rem' : '1.1rem',
                    fontWeight: 400,
                    color: '#fff',
                  }}>{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#contact" className="btn-gold">Commander un bouquet sur mesure</a>
        </div>
      </div>
    </section>
  )
}
