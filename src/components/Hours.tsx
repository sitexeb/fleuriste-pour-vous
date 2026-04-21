const schedule = [
  { day: 'Lundi', hours: '09h00 – 12h30 · 14h30 – 19h00' },
  { day: 'Mardi', hours: '09h00 – 12h30 · 14h30 – 19h00' },
  { day: 'Mercredi', hours: '09h00 – 12h30 · 14h30 – 19h00' },
  { day: 'Jeudi', hours: '09h00 – 12h30 · 14h30 – 19h00' },
  { day: 'Vendredi', hours: '09h00 – 12h30 · 14h30 – 19h00' },
  { day: 'Samedi', hours: '09h00 – 13h00 · 15h00 – 19h00' },
  { day: 'Dimanche', hours: 'Fermé' },
]

export default function Hours() {
  const today = new Date().getDay() // 0=Sun, 1=Mon...
  const dayIndex = today === 0 ? 6 : today - 1

  return (
    <section id="horaires" style={{
      background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3530 100%)',
      padding: '7rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circle */}
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        border: '1px solid rgba(143,173,136,0.15)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -150,
        left: -80,
        width: 350,
        height: 350,
        borderRadius: '50%',
        border: '1px solid rgba(212,165,165,0.1)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left: Hours */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c97d5a',
              marginBottom: '0.75rem',
            }}>Horaires d'ouverture</p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '2.5rem',
              lineHeight: 1.15,
            }}>Quand nous<br /><em style={{ color: '#d4a5a5' }}>rendre visite</em></h2>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {schedule.map((s, i) => (
                <div
                  key={s.day}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    background: i === dayIndex ? 'rgba(143,173,136,0.08)' : 'transparent',
                    paddingLeft: i === dayIndex ? '0.75rem' : 0,
                    paddingRight: i === dayIndex ? '0.75rem' : 0,
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {i === dayIndex && (
                      <span style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#8fad88',
                        display: 'inline-block',
                        flexShrink: 0,
                      }} />
                    )}
                    <span style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.88rem',
                      fontWeight: i === dayIndex ? 500 : 300,
                      color: i === dayIndex ? '#8fad88' : 'rgba(255,255,255,0.7)',
                      letterSpacing: '0.04em',
                    }}>{s.day}</span>
                  </div>
                  <span style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: s.hours === 'Fermé' ? '#c97d5a' : 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.04em',
                  }}>{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info + Map */}
          <div>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c97d5a',
              marginBottom: '0.75rem',
            }}>Nous trouver</p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '2rem',
              lineHeight: 1.15,
            }}>Adresse &<br /><em style={{ color: '#d4a5a5' }}>coordonnées</em></h2>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {[
                {
                  icon: '📍',
                  label: 'Adresse',
                  value: 'Roanne (Loire, 42)',
                  sub: 'Retrouvez-nous sur Google Maps',
                },
                {
                  icon: '📞',
                  label: 'Téléphone',
                  value: '04 XX XX XX XX',
                  sub: 'Du lundi au samedi',
                },
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'contact@fleuriste-pourvous.fr',
                  sub: 'Réponse sous 24h',
                },
              ].map(info => (
                <div key={info.label} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <span style={{ fontSize: '1.1rem', marginTop: 2 }}>{info.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#8fad88',
                      marginBottom: 4,
                    }}>{info.label}</div>
                    <div style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      color: '#fff',
                    }}>{info.value}</div>
                    <div style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.45)',
                      marginTop: 2,
                    }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
              <iframe
                title="Carte Fleuriste POUR VOUS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.12!2d4.0888241!3d46.0222059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f40f0802cc5c69%3A0x372114bfaf22b761!2sFleuriste%20POUR%20VOUS!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Fleuriste+POUR+VOUS/@46.0221477,4.0885793,20.45z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ marginTop: '1rem', color: '#8fad88', borderColor: '#8fad88', display: 'inline-flex' }}
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
