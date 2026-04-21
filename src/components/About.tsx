export default function About() {
  return (
    <section id="boutique" style={{ background: '#faf6f1', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: -20,
              left: -20,
              right: 20,
              bottom: 20,
              background: 'linear-gradient(135deg, #d4a5a5 0%, #8fad88 100%)',
              opacity: 0.15,
              borderRadius: 2,
            }} />
            <img
              src="/images/boutique.jpg"
              alt="Boutique Fleuriste POUR VOUS"
              style={{
                width: '100%',
                height: 500,
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1,
              }}
            />
            {/* Badge */}
            <div style={{
              position: 'absolute',
              bottom: -24,
              right: -24,
              background: '#c97d5a',
              color: '#fff',
              padding: '1.5rem',
              zIndex: 2,
              textAlign: 'center',
              minWidth: 110,
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.2rem',
                fontWeight: 500,
                lineHeight: 1,
              }}>15+</div>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: 4,
                opacity: 0.9,
              }}>ans d'expérience</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-tag">Notre histoire</p>
            <div className="floral-divider" style={{ justifyContent: 'flex-start', margin: '0.75rem 0 1.5rem' }}>
              <span style={{ fontSize: '1rem', color: '#8fad88' }}>✦</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              Un commerce de cœur,<br />
              <em>au cœur de Roanne</em>
            </h2>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#6b6460',
              marginBottom: '1.25rem',
            }}>
              Bienvenue chez <strong style={{ fontWeight: 500, color: '#2d2d2d' }}>POUR VOUS</strong>, votre fleuriste de proximité à Roanne.
              Depuis plus de 15 ans, nous créons avec passion des compositions florales qui racontent vos émotions
              et subliment vos instants de vie.
            </p>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#6b6460',
              marginBottom: '2rem',
            }}>
              Chaque bouquet est pensé, conçu et assemblé à la main avec des fleurs fraîches soigneusement
              sélectionnées auprès de producteurs locaux et de marchés aux fleurs de qualité.
              Ici, l'artisanat floral est un art de vivre.
            </p>

            {/* Values */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '🌿', label: 'Fleurs de saison' },
                { icon: '✂️', label: 'Créations sur mesure' },
                { icon: '🎁', label: 'Emballage soigné' },
                { icon: '💚', label: 'Commerce local' },
              ].map(v => (
                <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{v.icon}</span>
                  <span style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 400,
                    color: '#2d2d2d',
                    letterSpacing: '0.04em',
                  }}>{v.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Prendre contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
