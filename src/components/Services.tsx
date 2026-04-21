const services = [
  { num:'01', icon:'🌹', title:'Bouquets du Quotidien',
    desc:'Nos bouquets de saison composés chaque matin avec les plus belles fleurs fraîches. Simples, généreux, sincères.',
    grad:'linear-gradient(135deg, rgba(232,196,184,.25), rgba(201,150,127,.1))', accent:'#c9967f' },
  { num:'02', icon:'💍', title:'Mariage & Événements',
    desc:'De la boutonnière au décor de table, nous orchestrons votre décoration florale avec élégance et une attention absolue aux détails.',
    grad:'linear-gradient(135deg, rgba(200,169,106,.2), rgba(158,123,138,.1))', accent:'#c8a96a' },
  { num:'03', icon:'🕊️', title:'Deuil & Recueillement',
    desc:'Des compositions sobres et dignes pour accompagner les moments de deuil. Couronnes, gerbes, compositions réalisées avec respect.',
    grad:'linear-gradient(135deg, rgba(184,205,180,.25), rgba(107,143,99,.1))', accent:'#6b8f63' },
  { num:'04', icon:'🏢', title:'Décoration d\'Entreprise',
    desc:'Embellissez vos espaces professionnels avec des arrangements floraux renouvelés régulièrement. Accueil, salles, vitrines.',
    grad:'linear-gradient(135deg, rgba(158,123,138,.2), rgba(200,169,106,.1))', accent:'#9e7b8a' },
  { num:'05', icon:'🎁', title:'Cadeaux & Compositions',
    desc:'Paniers garnis, plantes vertes, orchidées, compositions en boîte ou en vase. Des cadeaux floraux originaux pour toutes les occasions.',
    grad:'linear-gradient(135deg, rgba(181,103,58,.15), rgba(200,169,106,.1))', accent:'#b5673a' },
  { num:'06', icon:'🚚', title:'Livraison à Domicile',
    desc:'Nous livrons vos créations florales à Roanne et dans les communes environnantes. Appelez-nous pour organiser votre livraison.',
    grad:'linear-gradient(135deg, rgba(107,143,99,.2), rgba(61,92,56,.1))', accent:'#3d5c38' },
]

export default function Services() {
  return (
    <section id="services" style={{
      padding:'8rem 0', position:'relative', overflow:'hidden',
      background:'linear-gradient(180deg, #f5ede0 0%, #fdf6ee 50%, #f0e8f0 100%)',
    }}>
      {/* Orbs */}
      <div style={{ position:'absolute', top:'20%', left:'-5%', width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(107,143,99,.07) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'10%', right:'-5%', width:350, height:350, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(158,123,138,.07) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem' }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'4.5rem' }}>
          <p className="lbl">Ce que nous proposons</p>
          <div className="div-line" style={{ justifyContent:'center', margin:'.7rem auto 1.5rem' }}>
            <div className="dl rev"/>
            <div className="gem"/>
            <div className="dl"/>
          </div>
          <h2 style={{
            fontFamily:'Playfair Display, serif',
            fontSize:'clamp(2rem,4vw,3.2rem)',
            fontWeight:400, color:'#1c1c1c', marginBottom:'1rem',
          }}>Nos services floraux</h2>
          <p style={{
            fontFamily:'Cormorant Garamond, serif',
            fontStyle:'italic', fontWeight:300,
            fontSize:'1.15rem', color:'#5a4f48',
            maxWidth:480, margin:'0 auto', lineHeight:1.7,
          }}>De la fleur coupée à la décoration événementielle, notre passion est entièrement à votre service.</p>
        </div>

        {/* Grille */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(290px, 1fr))', gap:'1.4rem' }}>
          {services.map(s => (
            <div key={s.title} className="scard" style={{ background: s.grad }}>
              {/* Accent top */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3,
                background:`linear-gradient(to right, ${s.accent}, transparent)` }}/>
              {/* Numéro watermark */}
              <div style={{
                position:'absolute', top:'1rem', right:'1.5rem',
                fontFamily:'Playfair Display,serif', fontSize:'4rem', fontWeight:600,
                color:s.accent, opacity:.08, lineHeight:1, userSelect:'none',
              }}>{s.num}</div>

              <div style={{ fontSize:'2rem', marginBottom:'1.4rem' }}>{s.icon}</div>
              <h3 style={{
                fontFamily:'Playfair Display, serif',
                fontSize:'1.22rem', fontWeight:500,
                color:'#1c1c1c', marginBottom:'.8rem', lineHeight:1.25,
              }}>{s.title}</h3>
              <p style={{
                fontFamily:'Jost, sans-serif',
                fontSize:'.85rem', fontWeight:300,
                lineHeight:1.82, color:'#5a4f48',
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
