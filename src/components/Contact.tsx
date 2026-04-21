import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', occasion: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{
      background: 'linear-gradient(160deg, #1a1a1a 0%, #2d2520 60%, #1a1a1a 100%)',
      padding: '9rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 700, height: 700, borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -150, left: -150,
        width: 500, height: 500, borderRadius: '50%',
        border: '1px solid rgba(122,158,115,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '10%',
        fontFamily: 'Playfair Display, serif',
        fontSize: '18vw', fontWeight: 600,
        color: 'rgba(201,169,110,0.03)',
        pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
      }}>CONTACT</div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '6rem',
          alignItems: 'start',
        }}>

          {/* Left */}
          <div>
            <p className="label" style={{ color: '#c9a96e' }}>Parlons de votre projet</p>
            <div className="luxury-divider" style={{ justifyContent: 'flex-start' }}>
              <div className="diamond" />
              <div className="line" style={{ background: 'linear-gradient(to right, #c9a96e, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '1.5rem',
              lineHeight: 1.15,
            }}>Un projet floral ?<br /><em style={{ color: '#c9a96e' }}>Parlons-en.</em></h2>

            <p style={{
              fontFamily: 'Didact Gothic, sans-serif',
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '3rem',
            }}>
              Que ce soit pour un bouquet surprise, la décoration de votre mariage, une commande entreprise
              ou simplement une question — nous sommes là pour vous.
            </p>

            {/* Quote */}
            <div style={{
              padding: '2rem',
              background: 'rgba(201,169,110,0.06)',
              border: '1px solid rgba(201,169,110,0.2)',
              marginBottom: '2.5rem',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -14, left: 20,
                fontFamily: 'Playfair Display, serif',
                fontSize: '3.5rem',
                color: '#c9a96e',
                lineHeight: 1,
                opacity: 0.5,
              }}>"</div>
              <p style={{
                fontFamily: 'Cormorant, serif',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
                marginTop: '0.5rem',
              }}>Les fleurs sont la musique de la terre, montant de la terre vers le ciel.</p>
              <p style={{
                fontFamily: 'Didact Gothic',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: '#c9a96e',
                marginTop: '1rem',
                textTransform: 'uppercase',
              }}>— Edwin Curran</p>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.12)',
                fontFamily: 'Didact Gothic', fontSize: '0.72rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'default',
              }}>
                <span>📸</span><span>Instagram</span>
              </div>
              <a
                href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.75rem 1.5rem',
                  border: '1px solid rgba(24,119,242,0.5)',
                  fontFamily: 'Didact Gothic', fontSize: '0.72rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#6b9fff',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(24,119,242,0.15)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#1877f2'
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(24,119,242,0.5)'
                  ;(e.currentTarget as HTMLElement).style.color = '#6b9fff'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,169,110,0.2)',
            padding: '3.5rem',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Corner decoration */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: 80, height: 80,
              borderBottom: '1px solid rgba(201,169,110,0.2)',
              borderLeft: '1px solid rgba(201,169,110,0.2)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: 80, height: 80,
              borderTop: '1px solid rgba(201,169,110,0.2)',
              borderRight: '1px solid rgba(201,169,110,0.2)',
              pointerEvents: 'none',
            }} />

            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🌸</div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#fff',
                  marginBottom: '1rem',
                }}>Message envoyé !</h3>
                <p style={{
                  fontFamily: 'Didact Gothic',
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}>Merci pour votre message. Nous vous recontacterons très prochainement.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', occasion: '', message: '' }) }}
                  className="btn-gold"
                >Nouveau message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: '#fff',
                  marginBottom: '0.5rem',
                }}>Votre demande</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Didact Gothic', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.5rem' }}>Prénom & Nom *</label>
                    <input className="field" type="text" required placeholder="Marie Dupont" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Didact Gothic', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.5rem' }}>Téléphone</label>
                    <input className="field" type="tel" placeholder="06 XX XX XX XX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Didact Gothic', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.5rem' }}>Email *</label>
                  <input className="field" type="email" required placeholder="marie@exemple.fr" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Didact Gothic', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.5rem' }}>Occasion</label>
                  <select className="field" value={form.occasion} onChange={e => setForm({ ...form, occasion: e.target.value })} style={{
                    cursor: 'pointer', appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a96e' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center',
                  }}>
                    <option value="">Choisir une occasion…</option>
                    <option>Bouquet cadeau</option>
                    <option>Mariage</option>
                    <option>Événement</option>
                    <option>Deuil</option>
                    <option>Décoration entreprise</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Didact Gothic', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.5rem' }}>Votre message *</label>
                  <textarea className="field" required rows={4} placeholder="Décrivez votre projet, vos préférences florales, la date souhaitée…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn-gold" style={{ justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}>
                  Envoyer ma demande →
                </button>

                <p style={{ fontFamily: 'Didact Gothic', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
                  Vos informations restent confidentielles.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
