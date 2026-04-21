const services = [
  {
    icon: '💐',
    title: 'Bouquets du Quotidien',
    desc: 'Offrez un sourire avec nos bouquets de saison, composés chaque matin avec les plus belles fleurs fraîches disponibles. Simples, généreux, sincères.',
    color: '#d4a5a5',
  },
  {
    icon: '💍',
    title: 'Mariage & Événements',
    desc: 'De la boutonnière au décor de table, nous orchestrons votre décoration florale de mariage ou d\'événement avec élégance et attention aux détails.',
    color: '#8fad88',
  },
  {
    icon: '🕊️',
    title: 'Deuil & Recueillement',
    desc: 'Des compositions sobres et dignes pour accompagner les moments de deuil. Couronnes, gerbes, compositions de cercueil réalisées avec respect et délicatesse.',
    color: '#b8cdb4',
  },
  {
    icon: '🏢',
    title: 'Décoration d\'Entreprise',
    desc: 'Embellissez vos espaces professionnels avec des arrangements floraux renouvelés régulièrement. Accueil, salles de réunion, vitrines — nous nous occupons de tout.',
    color: '#c97d5a',
  },
  {
    icon: '🎁',
    title: 'Cadeaux & Compositions',
    desc: 'Paniers garnis, plantes vertes, orchidées, compositions en boîte ou en vase. Des cadeaux floraux originaux pour toutes les occasions.',
    color: '#d4a5a5',
  },
  {
    icon: '🚚',
    title: 'Livraison à Domicile',
    desc: 'Nous livrons vos créations florales à Roanne et dans les communes environnantes. Passez commande par téléphone ou via notre formulaire de contact.',
    color: '#8fad88',
  },
]

export default function Services() {
  return (
    <section id="services" style={{
      background: 'linear-gradient(180deg, #faf6f1 0%, #f0e8df 50%, #faf6f1 100%)',
      padding: '7rem 0',
    }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-tag">Ce que nous proposons</p>
          <div className="floral-divider" style={{ margin: '0.75rem auto 1.5rem' }}>
            <span style={{ fontSize: '1rem', color: '#8fad88' }}>✦</span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Nos services floraux
          </h2>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 300,
            color: '#6b6460',
            maxWidth: 520,
            margin: '1rem auto 0',
            lineHeight: 1.7,
          }}>
            De la fleur coupée à la décoration événementielle, nous mettons notre passion et notre expertise à votre service.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: '#fff',
                padding: '2.5rem 2rem',
                borderTop: `3px solid ${s.color}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{s.icon}</div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.35rem',
                fontWeight: 500,
                color: '#2d2d2d',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.87rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color: '#6b6460',
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
