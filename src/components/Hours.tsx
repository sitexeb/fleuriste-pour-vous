const schedule = [
  { day: 'Lundi', hours: '09h00 – 12h30  ·  14h30 – 19h00', open: true },
  { day: 'Mardi', hours: '09h00 – 12h30  ·  14h30 – 19h00', open: true },
  { day: 'Mercredi', hours: '09h00 – 12h30  ·  14h30 – 19h00', open: true },
  { day: 'Jeudi', hours: '09h00 – 12h30  ·  14h30 – 19h00', open: true },
  { day: 'Vendredi', hours: '09h00 – 12h30  ·  14h30 – 19h00', open: true },
  { day: 'Samedi', hours: '09h00 – 13h00  ·  15h00 – 19h00', open: true },
  { day: 'Dimanche', hours: 'Fermé', open: false },
]

export default function Hours() {
  const today = new Date().getDay()
  const dayIndex = today === 0 ? 6 : today - 1

  return (
    <section id="horaires" style={{ background: '#fdf8f3', padding: '9rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative large text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Playfair Display, serif',
        fontSize: '22vw',
        fontWeight: 600,
        color: 'rgba(201,169,110,0.04)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
      }}>HEURES</div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '6rem',
          alignItems: 'start',
        }}>

          {/* Hours */}
          <div>
            <p className="label">Quand nous rendre visite</p>
            <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
              <div className="diamond" />
              <div className="line" style={{ background: 'linear-gradient(to right, #c9a96e, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#1a1a1a',
              marginBottom: '3rem',
              lineHeight: 1.15,
            }}>Horaires<br /><em style={{ color: '#7a9e73' }}>d'ouverture</em></h2>

            <div style={{ borderTop: '1px solid rgba(201,169,110,0.2)' }}>
              {schedule.map((s, i) => (
                <div key={s.day} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.1rem 1rem',
                  borderBottom: '1px solid rgba(201,169,110,0.12)',
                  background: i === dayIndex
                    ? 'linear-gradient(135deg, rgba(201,169,110,0.1), rgba(122,158,115,0.06))'
                    : 'transparent',
                  transition: 'background 0.3s',
                  position: 'relative',
                }}>
                  {i === dayIndex && (
                    <div style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      width: 3,
                      background: 'linear-gradient(to bottom, #c9a96e, #7a9e73)',
                    }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {i === dayIndex && (
                      <span className="anim-pulse" style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: '#7a9e73', display: 'inline-block', flexShrink: 0,
                      }} />
                    )}
                    <span style={{
                      fontFamily: i === dayIndex ? 'Playfair Display, serif' : 'Didact Gothic, sans-serif',
                      fontStyle: i === dayIndex ? 'italic' : 'normal',
                      fontSize: i === dayIndex ? '1.05rem' : '0.88rem',
                      fontWeight: 400,
                      color: i === dayIndex ? '#1a1a1a' : '#5c4f47',
                    }}>{s.day}</span>
                    {i === dayIndex && (
                      <span style={{
                        background: '#7a9e73',
                        color: '#fff',
                        fontSize: '0.55rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        fontFamily: 'Didact Gothic',
                      }}>Aujourd'hui</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: 'Didact Gothic, sans-serif',
                    fontSize: '0.82rem',
                    color: !s.open ? '#b8694a' : i === dayIndex ? '#7a9e73' : 'rgba(92,79,71,0.6)',
                    fontWeight: !s.open ? 500 : 400,
                  }}>{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map & Contact */}
          <div>
            <p className="label">Nous trouver</p>
            <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
              <div className="diamond" />
              <div className="line" style={{ background: 'linear-gradient(to right, #c9a96e, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#1a1a1a',
              marginBottom: '2.5rem',
              lineHeight: 1.15,
            }}>Adresse &<br /><em style={{ color: '#7a9e73' }}>coordonnées</em></h2>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: '📍', label: 'Adresse', val: 'Roanne, Loire (42)', sub: 'Voir sur Google Maps' },
                { icon: '📞', label: 'Téléphone', val: '04 XX XX XX XX', sub: 'Lun – Sam' },
                { icon: '✉️', label: 'Email', val: 'contact@fleuriste-pourvous.fr', sub: 'Réponse sous 24h' },
              ].map(info => (
                <div key={info.label} style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  padding: '1.25rem 1.5rem',
                  background: '#fff',
                  border: '1px solid rgba(201,169,110,0.15)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#c9a96e'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(201,169,110,0.15)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.15)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 20px rgba(0,0,0,0.04)'
                }}
                >
                  <span style={{ fontSize: '1.2rem', marginTop: 2 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 4 }}>{info.label}</div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.98rem', color: '#1a1a1a', marginBottom: 2 }}>{info.val}</div>
                    <div style={{ fontFamily: 'Didact Gothic', fontSize: '0.72rem', color: '#9a8a7a' }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ position: 'relative', overflow: 'hidden', height: 230, border: '1px solid rgba(201,169,110,0.2)' }}>
              <iframe
                title="Carte Fleuriste POUR VOUS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.12!2d4.0888241!3d46.0222059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f40f0802cc5c69%3A0x372114bfaf22b761!2sFleuriste%20POUR%20VOUS!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%" height="230"
                style={{ border: 0, filter: 'sepia(15%) contrast(1.05) saturate(0.9)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Fleuriste+POUR+VOUS/@46.0221477,4.0885793,20.45z"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline-dark"
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
