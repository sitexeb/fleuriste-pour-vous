const items = [
  { src:'/images/g1.jpg',      label:'Pivoine & Romantisme',  cat:'Bouquet' },
  { src:'/images/g2.jpg',      label:'Élégance Nuptiale',     cat:'Mariage' },
  { src:'/images/g3.jpg',      label:'Pampas & Terracotta',   cat:'Décoration' },
  { src:'/images/g4.jpg',      label:'Table de Cérémonie',    cat:'Événement' },
  { src:'/images/g5.jpg',      label:'Fleurs Sauvages',       cat:'Saison' },
  { src:'/images/gallery6.jpg',label:'L\'Art du Bouquet',     cat:'Atelier' },
]

export default function Gallery() {
  return (
    <section id="galerie" style={{
      padding:'8rem 0', position:'relative', overflow:'hidden',
      background:'linear-gradient(160deg, #1c1c1c 0%, #2a1f2e 50%, #1a2218 100%)',
    }}>
      {/* Orbs colorés sur fond sombre */}
      <div style={{ position:'absolute', top:'-10%', left:'-5%', width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(107,143,99,.1) 0%, transparent 65%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-10%', right:'-5%', width:450, height:450, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(158,123,138,.12) 0%, transparent 65%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:'40%', right:'20%', width:300, height:300, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(200,169,106,.07) 0%, transparent 65%)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem' }}>
        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3.5rem', flexWrap:'wrap', gap:'2rem' }}>
          <div>
            <p className="lbl">Notre univers floral</p>
            <div className="div-line" style={{ margin:'.7rem 0' }}>
              <div className="gem"/>
              <div className="dl"/>
            </div>
            <h2 style={{
              fontFamily:'Playfair Display, serif',
              fontSize:'clamp(2rem,4vw,3.2rem)',
              fontWeight:400, color:'#fff', lineHeight:1.1,
            }}>Galerie de<br/><em style={{ color:'#c8a96a' }}>créations</em></h2>
          </div>
          <p style={{
            fontFamily:'Cormorant Garamond, serif',
            fontStyle:'italic', fontWeight:300,
            fontSize:'1.1rem', color:'rgba(255,255,255,.45)',
            maxWidth:300, lineHeight:1.75,
          }}>Un aperçu de nos compositions, réalisées avec soin au fil des saisons.</p>
        </div>

        {/* Grille masonry */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3,1fr)',
          gap:'1rem',
        }}>
          {items.map((item,i) => (
            <div key={item.src} className="gcard" style={{
              gridColumn: i===0 ? 'span 2' : 'span 1',
              height: i===0 ? 540 : 260,
            }}>
              <img src={item.src} alt={item.label}/>
              <div className="gcard-overlay">
                <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.6rem', letterSpacing:'.24em', textTransform:'uppercase', color:'#c8a96a', marginBottom:5 }}>{item.cat}</div>
                <div style={{ fontFamily:'Playfair Display,serif', fontStyle:'italic', fontSize: i===0 ? '1.5rem' : '1.05rem', color:'#fff' }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
