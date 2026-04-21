const schedule = [
  { day:'Lundi',    hours:'09h00 – 12h30  ·  14h30 – 19h00', open:true },
  { day:'Mardi',    hours:'09h00 – 12h30  ·  14h30 – 19h00', open:true },
  { day:'Mercredi', hours:'09h00 – 12h30  ·  14h30 – 19h00', open:true },
  { day:'Jeudi',    hours:'09h00 – 12h30  ·  14h30 – 19h00', open:true },
  { day:'Vendredi', hours:'09h00 – 12h30  ·  14h30 – 19h00', open:true },
  { day:'Samedi',   hours:'09h00 – 13h00  ·  15h00 – 19h00', open:true },
  { day:'Dimanche', hours:'Fermé', open:false },
]

export default function Hours() {
  const today = new Date().getDay()
  const idx = today === 0 ? 6 : today - 1

  return (
    <section id="horaires" style={{
      padding:'8rem 0', position:'relative', overflow:'hidden',
      background:'linear-gradient(135deg, #fdf6ee 0%, #f5f0f5 50%, #eef5ee 100%)',
    }}>
      {/* Watermark */}
      <div style={{
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        fontFamily:'Playfair Display,serif', fontSize:'20vw', fontWeight:600,
        color:'rgba(200,169,106,.04)', whiteSpace:'nowrap',
        pointerEvents:'none', userSelect:'none', lineHeight:1,
      }}>HEURES</div>
      {/* Orbs */}
      <div style={{ position:'absolute', top:'-10%', right:'-8%', width:420, height:420, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(158,123,138,.07) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-10%', left:'-8%', width:380, height:380, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(107,143,99,.07) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px,1fr))', gap:'5.5rem', alignItems:'start' }}>

          {/* Horaires */}
          <div>
            <p className="lbl">Quand nous rendre visite</p>
            <div className="div-line" style={{ margin:'.7rem 0 1.5rem' }}>
              <div className="gem"/><div className="dl"/>
            </div>
            <h2 style={{
              fontFamily:'Playfair Display, serif',
              fontSize:'clamp(2rem,3.8vw,2.8rem)',
              fontWeight:400, color:'#1c1c1c',
              marginBottom:'2.5rem', lineHeight:1.15,
            }}>Horaires<br/><em style={{ color:'#6b8f63' }}>d'ouverture</em></h2>

            <div style={{ borderTop:'1px solid rgba(200,169,106,.2)' }}>
              {schedule.map((s,i) => (
                <div key={s.day} style={{
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                  padding:'1rem 1rem',
                  borderBottom:'1px solid rgba(200,169,106,.12)',
                  background: i===idx
                    ? 'linear-gradient(135deg, rgba(107,143,99,.1), rgba(158,123,138,.06))'
                    : 'transparent',
                  position:'relative', transition:'background .3s',
                }}>
                  {i===idx && (
                    <div style={{
                      position:'absolute', left:0, top:0, bottom:0, width:3,
                      background:'linear-gradient(to bottom, #6b8f63, #9e7b8a)',
                    }}/>
                  )}
                  <div style={{ display:'flex', alignItems:'center', gap:'.7rem' }}>
                    {i===idx && <span className="anim-pulse" style={{ width:7, height:7, borderRadius:'50%', background:'#6b8f63', display:'inline-block' }}/>}
                    <span style={{
                      fontFamily: i===idx ? 'Playfair Display,serif' : 'Jost,sans-serif',
                      fontStyle: i===idx ? 'italic' : 'normal',
                      fontSize: i===idx ? '1.02rem' : '.87rem',
                      color: i===idx ? '#1c1c1c' : '#5a4f48',
                    }}>{s.day}</span>
                    {i===idx && (
                      <span style={{
                        background:'linear-gradient(135deg,#6b8f63,#9e7b8a)',
                        color:'#fff', fontSize:'.5rem', letterSpacing:'.14em',
                        textTransform:'uppercase', padding:'2px 8px',
                        fontFamily:'Jost,sans-serif',
                      }}>Aujourd'hui</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily:'Jost,sans-serif', fontSize:'.8rem',
                    color: !s.open ? '#b5673a' : i===idx ? '#6b8f63' : 'rgba(90,79,72,.55)',
                    fontWeight: !s.open ? 500 : 300,
                  }}>{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Carte & Coordonnées */}
          <div>
            <p className="lbl">Nous trouver</p>
            <div className="div-line" style={{ margin:'.7rem 0 1.5rem' }}>
              <div className="gem"/><div className="dl"/>
            </div>
            <h2 style={{
              fontFamily:'Playfair Display, serif',
              fontSize:'clamp(2rem,3.8vw,2.8rem)',
              fontWeight:400, color:'#1c1c1c',
              marginBottom:'2rem', lineHeight:1.15,
            }}>Adresse &<br/><em style={{ color:'#9e7b8a' }}>coordonnées</em></h2>

            {/* Info cards */}
            <div style={{ display:'flex', flexDirection:'column', gap:'.9rem', marginBottom:'1.8rem' }}>
              {[
                { icon:'📍', lbl:'Adresse', val:'Roanne, Loire (42)', sub:'Voir sur Google Maps', c:'rgba(107,143,99,.12)' },
                { icon:'📞', lbl:'Téléphone', val:'04 XX XX XX XX', sub:'Lun – Sam', c:'rgba(200,169,106,.12)' },
                { icon:'✉️', lbl:'Email', val:'contact@fleuriste-pourvous.fr', sub:'Réponse sous 24h', c:'rgba(158,123,138,.12)' },
              ].map(info => (
                <div key={info.lbl} style={{
                  display:'flex', gap:'1.1rem', alignItems:'flex-start',
                  padding:'1.1rem 1.4rem',
                  background:info.c,
                  border:'1px solid rgba(200,169,106,.15)',
                  transition:'all .3s',
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor='#c8a96a'; (e.currentTarget as HTMLElement).style.boxShadow='0 6px 24px rgba(200,169,106,.15)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor='rgba(200,169,106,.15)'; (e.currentTarget as HTMLElement).style.boxShadow='none'; }}
                >
                  <span style={{ fontSize:'1.1rem', marginTop:2 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.6rem', letterSpacing:'.18em', textTransform:'uppercase', color:'#c8a96a', marginBottom:3 }}>{info.lbl}</div>
                    <div style={{ fontFamily:'Playfair Display,serif', fontSize:'.95rem', color:'#1c1c1c', marginBottom:2 }}>{info.val}</div>
                    <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.72rem', color:'#9a8a7a' }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carte */}
            <div style={{ overflow:'hidden', height:220, border:'1px solid rgba(200,169,106,.2)' }}>
              <iframe
                title="Carte POUR VOUS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.12!2d4.0888241!3d46.0222059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f40f0802cc5c69%3A0x372114bfaf22b761!2sFleuriste%20POUR%20VOUS!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%" height="220"
                style={{ border:0, filter:'sepia(10%) saturate(.95)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://www.google.com/maps/place/Fleuriste+POUR+VOUS/@46.0221477,4.0885793,20.45z"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline"
              style={{ marginTop:'1rem', display:'inline-flex' }}
            >Ouvrir dans Google Maps →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
