const services = [
  {
    num: '01',
    icon: '🌹',
    title: 'Bouquets du Quotidien',
    desc: 'Offrez un sourire avec nos bouquets de saison, composés chaque matin avec les plus belles fleurs fraîches. Simples, généreux, sincères.',
    color: '#c9a0a0',
    bg: 'rgba(201,160,160,0.06)',
  },
  {
    num: '02',
    icon: '💍',
    title: 'Mariage & Événements',
    desc: 'De la boutonnière au décor de table, nous orchestrons votre décoration florale avec élégance et une attention absolue aux détails.',
    color: '#c9a96e',
    bg: 'rgba(201,169,110,0.06)',
  },
  {
    num: '03',
    icon: '🕊️',
    title: 'Deuil & Recueillement',
    desc: 'Des compositions sobres et dignes pour accompagner les moments de deuil. Couronnes, gerbes, compositions réalisées avec respect.',
    color: '#b8cdb4',
    bg: 'rgba(184,205,180,0.06)',
  },
  {
    num: '04',
    icon: '🏢',
    title: 'Décoration d\'Entreprise',
    desc: 'Embellissez vos espaces professionnels avec des arrangements floraux renouvelés régulièrement. Accueil, salles, vitrines.',
    color: '#7a9e73',
    bg: 'rgba(122,158,115,0.06)',
  },
  {
    num: '05',
    icon: '🎁',
    title: 'Cadeaux & Compositions',
    desc: 'Paniers garnis, plantes vertes, orchidées, compositions en boîte ou en vase. Des cadeaux floraux originaux pour toutes les occasions.',
    color: '#b8694a',
    bg: 'rgba(184,105,74,0.06)',
  },
  {
    num: '06',
    icon: '🚚',
    title: 'Livraison à Domicile',
    desc: 'Nous livrons vos créations florales à Roanne et dans les communes environnantes. Commandez par téléphone ou via notre formulaire.',
    color: '#c9a96e',
    bg: 'rgba(201,169,110,0.06)',
  },
]

export default function Services() {
  return (
    <section id="services" style={{
      background: 'linear-gradient(180deg, #f5ede2 0%, #fdf8f3 100%)',
      padding: '9rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800,
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p className="label">Ce que nous proposons</p>
          <div className="luxury-divider" style={{ justifyContent: 'center' }}>
            <div className="line" />
            <div className="diamond" />
            <div className="line" style={{ background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            color: '#1a1a1a',
            marginBottom: '1.25rem',
          }}>Nos services floraux</h2>
          <p style={{
            fontFamily: 'Cormorant, serif',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            fontWeight: 300,
            color: '#5c4f47',
            maxWidth: 500,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>De la fleur coupée à la décoration événementielle, notre passion est à votre service.</p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s) => (
            <div key={s.title} className="parallax-card" style={{
              background: '#fff',
              padding: '2.75rem 2.25rem',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(201,169,110,0.1)',
              cursor: 'default',
            }}>
              {/* Number watermark */}
              <div style={{
                position: 'absolute', top: '1rem', right: '1.5rem',
                fontFamily: 'Playfair Display, serif',
                fontSize: '4rem',
                fontWeight: 600,
                color: s.color,
                opacity: 0.07,
                lineHeight: 1,
                userSelect: 'none',
              }}>{s.num}</div>

              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3,
                background: `linear-gradient(to right, ${s.color}, transparent)`,
              }} />

              <div style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>{s.icon}</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                fontWeight: 500,
                color: '#1a1a1a',
                marginBottom: '0.85rem',
                lineHeight: 1.25,
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'Didact Gothic, sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.8,
                color: '#5c4f47',
              }}>{s.desc}</p>

              {/* Bottom link */}
              <div style={{
                marginTop: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'Didact Gothic',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: s.color,
              }}>
                <span>En savoir plus</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
