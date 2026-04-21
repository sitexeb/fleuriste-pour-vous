const items = [
  { src: '/images/gallery1.jpg', label: 'Bouquet romantique', cat: 'Occasion' },
  { src: '/images/gallery2.jpg', label: 'Composition champêtre', cat: 'Saison' },
  { src: '/images/gallery3.jpg', label: 'Pivoine & douceur', cat: 'Mariage' },
  { src: '/images/gallery4.jpg', label: 'Séchées & terracotta', cat: 'Décoration' },
  { src: '/images/gallery5.jpg', label: 'Table de cérémonie', cat: 'Événement' },
  { src: '/images/gallery6.jpg', label: 'L\'art du bouquet', cat: 'Atelier' },
]

export default function Gallery() {
  return (
    <section id="galerie" style={{ background: '#faf6f1', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-tag">Notre univers floral</p>
          <div className="floral-divider" style={{ margin: '0.75rem auto 1.5rem' }}>
            <span style={{ fontSize: '1rem', color: '#8fad88' }}>✦</span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Galerie de créations
          </h2>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: '#6b6460',
            maxWidth: 460,
            margin: '1rem auto 0',
            lineHeight: 1.7,
          }}>
            Un aperçu de nos compositions florales, réalisées avec soin et passion au fil des saisons.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gridAutoRows: '280px',
          gap: '1rem',
        }}>
          {items.map((item, i) => (
            <div
              key={item.src}
              className="gallery-item"
              style={{
                gridRow: i === 0 || i === 4 ? 'span 2' : 'span 1',
                borderRadius: 0,
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className="overlay">
                <div>
                  <div style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#d4a5a5',
                    marginBottom: 4,
                  }}>{item.cat}</div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: '#fff',
                  }}>{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" className="btn-outline">Commander un bouquet</a>
        </div>
      </div>
    </section>
  )
}
