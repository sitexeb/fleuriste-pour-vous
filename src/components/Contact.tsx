import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', occasion: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: '#faf6f1', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <p className="section-tag">Écrivez-nous</p>
            <div className="floral-divider" style={{ justifyContent: 'flex-start', margin: '0.75rem 0 1.5rem' }}>
              <span style={{ fontSize: '1rem', color: '#8fad88' }}>✦</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              Un projet floral ?<br />
              <em>Parlons-en.</em>
            </h2>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#6b6460',
              marginBottom: '2.5rem',
            }}>
              Que ce soit pour un bouquet surprise, la décoration de votre mariage, une commande entreprise
              ou simplement une question — nous sommes là pour vous.
              Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
            </p>

            {/* Decorative quote */}
            <div style={{
              borderLeft: '3px solid #d4a5a5',
              paddingLeft: '1.5rem',
              marginBottom: '2.5rem',
            }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#2d2d2d',
                lineHeight: 1.5,
              }}>
                « Les fleurs sont la musique de la terre, montant de la terre vers le ciel. »
              </p>
              <p style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                color: '#8fad88',
                marginTop: '0.75rem',
              }}>— Edwin Curran</p>
            </div>

            {/* Social / quick links */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.2rem',
                border: '1px solid #e0d8d0',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                color: '#6b6460',
                cursor: 'default',
              }}>
                <span>📸</span>
                <span>Instagram</span>
              </div>
              <a
                href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  border: '1px solid #1877f2',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: '#1877f2',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#1877f2'
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = '#1877f2'
                }}
              >
                <span>💙</span>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: '#fff',
            padding: '3rem 2.5rem',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌸</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.8rem',
                  fontWeight: 400,
                  color: '#2d2d2d',
                  marginBottom: '0.75rem',
                }}>Message envoyé !</h3>
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#6b6460',
                  lineHeight: 1.7,
                }}>
                  Merci pour votre message. Nous vous recontacterons très prochainement.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', occasion: '', message: '' }) }}
                  className="btn-primary"
                  style={{ marginTop: '2rem' }}
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#2d2d2d',
                  marginBottom: '0.5rem',
                }}>Votre demande</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#6b6460',
                      marginBottom: '0.4rem',
                    }}>Prénom & Nom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Marie Dupont"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#6b6460',
                      marginBottom: '0.4rem',
                    }}>Téléphone</label>
                    <input
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6b6460',
                    marginBottom: '0.4rem',
                  }}>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="marie@exemple.fr"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6b6460',
                    marginBottom: '0.4rem',
                  }}>Occasion</label>
                  <select
                    value={form.occasion}
                    onChange={e => setForm({ ...form, occasion: e.target.value })}
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      background: '#fff',
                      border: '1px solid #e0d8d0',
                      padding: '0.8rem 1rem',
                      width: '100%',
                      fontSize: '0.9rem',
                      color: form.occasion ? '#2d2d2d' : '#b0a89e',
                      outline: 'none',
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238fad88' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                    }}
                  >
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
                  <label style={{
                    display: 'block',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6b6460',
                    marginBottom: '0.4rem',
                  }}>Votre message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre projet, vos préférences florales, la date souhaitée…"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  Envoyer ma demande →
                </button>

                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  color: '#b0a89e',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}>
                  Vos informations restent confidentielles et ne sont utilisées que pour répondre à votre demande.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
