export default function Footer() {
  return (
    <footer style={{
      background: '#1e1e1e',
      color: 'rgba(255,255,255,0.6)',
      padding: '4rem 0 2rem',
    }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/images/logo-emblem.png" alt="" style={{ width: 32, height: 32, objectFit: 'contain', opacity: 0.9 }} />
              <div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: '#fff',
                  letterSpacing: '0.08em',
                }}>POUR VOUS</div>
                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  color: '#8fad88',
                  textTransform: 'uppercase',
                }}>Fleuriste · Roanne</div>
              </div>
            </div>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 260,
            }}>
              Votre fleuriste artisanal de proximité à Roanne. Des fleurs fraîches, des compositions uniques, un service du cœur.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#8fad88',
              marginBottom: '1.25rem',
            }}>Navigation</div>
            {['Accueil', 'La Boutique', 'Services', 'Galerie', 'Horaires', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item === 'Accueil' ? 'accueil' : item === 'La Boutique' ? 'boutique' : item.toLowerCase()}`}
                style={{
                  display: 'block',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  padding: '0.3rem 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >{item}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#8fad88',
              marginBottom: '1.25rem',
            }}>Nos services</div>
            {['Bouquets du quotidien', 'Mariage & événements', 'Deuil & recueillement', 'Décoration entreprise', 'Livraison à domicile'].map(s => (
              <div key={s} style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.55)',
                padding: '0.3rem 0',
              }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#8fad88',
              marginBottom: '1.25rem',
            }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 300 }}>📍 Roanne, Loire (42)</div>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 300 }}>📞 04 XX XX XX XX</div>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 300 }}>✉️ contact@fleuriste-pourvous.fr</div>
              <a
                href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 400,
                  color: '#6b9fff',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b9fff')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                <span>Pourvousfleuriste</span>
              </a>
            </div>

            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'rgba(143,173,136,0.1)',
              border: '1px solid rgba(143,173,136,0.2)',
            }}>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8fad88',
                marginBottom: '0.4rem',
              }}>Aujourd'hui</div>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 400,
                color: '#fff',
              }}>09h00 – 12h30 · 14h30 – 19h00</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.35)',
          }}>
            © {new Date().getFullYear()} Fleuriste POUR VOUS — Roanne. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8fad88', display: 'inline-block' }} />
            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.1em',
            }}>Fait avec ❤️ pour vous</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
