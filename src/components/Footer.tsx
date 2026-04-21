export default function Footer() {
  return (
    <footer style={{
      background: '#111',
      color: 'rgba(255,255,255,0.5)',
      padding: '5rem 0 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gold line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(to right, transparent, #c9a96e 30%, #7a9e73 70%, transparent)',
      }} />

      {/* Background */}
      <div style={{
        position: 'absolute', top: -300, right: -300,
        width: 700, height: 700, borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.06)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3.5rem',
          marginBottom: '4rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <img src="/images/logo2.png" alt="" style={{ width: 38, height: 38, objectFit: 'contain', opacity: 0.85 }} />
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500, color: '#fff', letterSpacing: '0.12em' }}>POUR VOUS</div>
                <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.55rem', letterSpacing: '0.25em', color: '#c9a96e', textTransform: 'uppercase', marginTop: 3 }}>Fleuriste · Roanne</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Didact Gothic', fontSize: '0.82rem', lineHeight: 1.8, maxWidth: 240, marginBottom: '1.5rem' }}>
              Votre fleuriste artisanal de proximité à Roanne. Des fleurs fraîches, des compositions uniques, un service du cœur.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{
                width: 36, height: 36,
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem', cursor: 'default',
                transition: 'all 0.3s',
              }}>📸</div>
              <a
                href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank" rel="noopener noreferrer"
                style={{
                  width: 36, height: 36,
                  border: '1px solid rgba(24,119,242,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6b9fff',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#1877f2'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#1877f2'
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(24,119,242,0.4)'
                  ;(e.currentTarget as HTMLElement).style.color = '#6b9fff'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '1.5rem' }}>Navigation</div>
            {['Accueil', 'La Boutique', 'Services', 'Galerie', 'Horaires', 'Contact'].map(item => (
              <a key={item} href={`#${item === 'Accueil' ? 'accueil' : item === 'La Boutique' ? 'boutique' : item.toLowerCase()}`}
                style={{ display: 'block', fontFamily: 'Didact Gothic', fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', padding: '0.35rem 0', transition: 'color 0.2s, padding 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.paddingLeft = '8px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0' }}
              >{item}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '1.5rem' }}>Services</div>
            {['Bouquets du quotidien', 'Mariage & événements', 'Deuil & recueillement', 'Décoration entreprise', 'Livraison à domicile'].map(s => (
              <div key={s} style={{ fontFamily: 'Didact Gothic', fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', padding: '0.35rem 0' }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '1.5rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.83rem' }}>📍 Roanne, Loire (42)</div>
              <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.83rem' }}>📞 04 XX XX XX XX</div>
              <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.83rem' }}>✉️ contact@fleuriste-pourvous.fr</div>
              <a
                href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'Didact Gothic', fontSize: '0.83rem',
                  color: '#6b9fff', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b9fff')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                <span>Pourvousfleuriste</span>
              </a>
            </div>
            {/* Hours today */}
            <div style={{
              padding: '1rem 1.25rem',
              background: 'rgba(201,169,110,0.07)',
              border: '1px solid rgba(201,169,110,0.2)',
            }}>
              <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 6 }}>Aujourd'hui</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9rem', fontStyle: 'italic', color: '#fff' }}>09h00 – 12h30 · 14h30 – 19h00</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontFamily: 'Didact Gothic', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Fleuriste POUR VOUS — Roanne. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: 20, height: 1, background: 'linear-gradient(to right, transparent, #c9a96e)' }} />
            <span style={{ fontFamily: 'Cormorant, serif', fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>Fait avec amour à Roanne</span>
            <div style={{ width: 20, height: 1, background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}
