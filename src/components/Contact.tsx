export default function Contact() {
  return (
    <section id="contact" style={{
      padding:'8rem 0', position:'relative', overflow:'hidden',
      background:'linear-gradient(160deg, #1c1c1c 0%, #2a1f2e 55%, #1a2218 100%)',
    }}>
      {/* Orbs */}
      <div style={{ position:'absolute', top:'-15%', right:'-8%', width:600, height:600, borderRadius:'50%',
        border:'1px solid rgba(200,169,106,.07)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-15%', left:'-8%', width:500, height:500, borderRadius:'50%',
        border:'1px solid rgba(107,143,99,.07)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:'30%', left:'8%',
        fontFamily:'Playfair Display,serif', fontSize:'16vw', fontWeight:600,
        color:'rgba(200,169,106,.03)', pointerEvents:'none', userSelect:'none', lineHeight:1,
      }}>CONTACT</div>

      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'5.5rem', alignItems:'start' }}>

          {/* Gauche — infos */}
          <div>
            <p className="lbl">Parlons de votre projet</p>
            <div className="div-line" style={{ margin:'.7rem 0 1.5rem' }}>
              <div className="gem"/><div className="dl"/>
            </div>
            <h2 style={{
              fontFamily:'Playfair Display, serif',
              fontSize:'clamp(2rem,3.8vw,3rem)',
              fontWeight:400, color:'#fff',
              marginBottom:'1.4rem', lineHeight:1.15,
            }}>Une question ?<br/><em style={{ color:'#c8a96a' }}>Contactez-nous.</em></h2>

            <p style={{
              fontFamily:'Jost,sans-serif', fontSize:'.9rem', fontWeight:300,
              lineHeight:1.9, color:'rgba(255,255,255,.58)', marginBottom:'2.5rem',
            }}>
              Que ce soit pour découvrir nos créations, en savoir plus sur nos services
              ou simplement nous rendre visite — nous sommes là pour vous accueillir chaleureusement.
            </p>

            {/* Citation */}
            <div style={{
              padding:'1.75rem 2rem',
              background:'rgba(200,169,106,.06)',
              border:'1px solid rgba(200,169,106,.18)',
              marginBottom:'2.5rem', position:'relative',
            }}>
              <div style={{
                position:'absolute', top:-16, left:18,
                fontFamily:'Playfair Display,serif', fontSize:'3.5rem',
                color:'#c8a96a', lineHeight:1, opacity:.45,
              }}>&ldquo;</div>
              <p style={{
                fontFamily:'Cormorant Garamond,serif',
                fontStyle:'italic', fontWeight:300,
                fontSize:'1.15rem', color:'rgba(255,255,255,.82)',
                lineHeight:1.65, marginTop:'.5rem',
              }}>Les fleurs sont la musique de la terre, montant de la terre vers le ciel.</p>
              <p style={{
                fontFamily:'Jost,sans-serif', fontSize:'.62rem',
                letterSpacing:'.18em', textTransform:'uppercase',
                color:'#c8a96a', marginTop:'.9rem',
              }}>— Edwin Curran</p>
            </div>

            {/* Coordonnées directes */}
            <div style={{ display:'flex', flexDirection:'column', gap:'.85rem', marginBottom:'2rem' }}>
              {[
                { icon:'📍', val:'Roanne, Loire (42)' },
                { icon:'📞', val:'04 XX XX XX XX' },
                { icon:'✉️', val:'contact@fleuriste-pourvous.fr' },
              ].map(c=>(
                <div key={c.val} style={{ display:'flex', gap:'.75rem', alignItems:'center',
                  fontFamily:'Jost,sans-serif', fontSize:'.88rem', fontWeight:300,
                  color:'rgba(255,255,255,.65)' }}>
                  <span>{c.icon}</span><span>{c.val}</span>
                </div>
              ))}
            </div>

            {/* Réseaux */}
            <div style={{ display:'flex', gap:'.9rem', flexWrap:'wrap' }}>
              <div style={{
                display:'flex', alignItems:'center', gap:'.55rem',
                padding:'.7rem 1.4rem',
                border:'1px solid rgba(255,255,255,.1)',
                fontFamily:'Jost,sans-serif', fontSize:'.7rem',
                letterSpacing:'.12em', textTransform:'uppercase',
                color:'rgba(255,255,255,.4)', cursor:'default',
              }}><span>📸</span><span>Instagram</span></div>

              <a href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:'flex', alignItems:'center', gap:'.55rem',
                  padding:'.7rem 1.4rem',
                  border:'1px solid rgba(24,119,242,.45)',
                  fontFamily:'Jost,sans-serif', fontSize:'.7rem',
                  letterSpacing:'.12em', textTransform:'uppercase',
                  color:'#6b9fff', textDecoration:'none', transition:'all .3s',
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background='rgba(24,119,242,.15)'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background='transparent'; (e.currentTarget as HTMLElement).style.color='#6b9fff'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Droite — Infos pratiques (plus de formulaire) */}
          <div style={{
            background:'rgba(255,255,255,.03)',
            border:'1px solid rgba(200,169,106,.18)',
            padding:'3rem', position:'relative', overflow:'hidden',
            backdropFilter:'blur(10px)',
          }}>
            {/* Coins déco */}
            <div style={{ position:'absolute', top:0, right:0, width:70, height:70,
              borderBottom:'1px solid rgba(200,169,106,.2)', borderLeft:'1px solid rgba(200,169,106,.2)' }}/>
            <div style={{ position:'absolute', bottom:0, left:0, width:70, height:70,
              borderTop:'1px solid rgba(200,169,106,.2)', borderRight:'1px solid rgba(200,169,106,.2)' }}/>

            <div style={{ fontFamily:'Playfair Display,serif', fontStyle:'italic', fontSize:'1.5rem', color:'#fff', marginBottom:'2rem' }}>Venez nous rendre visite</div>

            {/* Horaires rapides */}
            <div style={{ marginBottom:'2rem' }}>
              <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#c8a96a', marginBottom:'1rem' }}>Horaires d'ouverture</div>
              {[
                { j:'Lundi – Vendredi', h:'09h00 – 12h30  ·  14h30 – 19h00' },
                { j:'Samedi',           h:'09h00 – 13h00  ·  15h00 – 19h00' },
                { j:'Dimanche',         h:'Fermé' },
              ].map(h=>(
                <div key={h.j} style={{
                  display:'flex', justifyContent:'space-between',
                  padding:'.7rem 0',
                  borderBottom:'1px solid rgba(255,255,255,.06)',
                  fontFamily:'Jost,sans-serif', fontSize:'.83rem',
                }}>
                  <span style={{ color:'rgba(255,255,255,.6)', fontWeight:300 }}>{h.j}</span>
                  <span style={{ color: h.h==='Fermé' ? '#b5673a' : '#c8a96a', fontWeight:400 }}>{h.h}</span>
                </div>
              ))}
            </div>

            {/* Services rapides */}
            <div style={{ marginBottom:'2rem' }}>
              <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#6b8f63', marginBottom:'1rem' }}>Nos spécialités</div>
              {['🌹 Bouquets de saison','💍 Mariage & Événements','🕊️ Deuil & Recueillement','🚚 Livraison à domicile','🎁 Cadeaux floraux'].map(s=>(
                <div key={s} style={{
                  padding:'.6rem 0',
                  borderBottom:'1px solid rgba(255,255,255,.05)',
                  fontFamily:'Jost,sans-serif', fontSize:'.83rem',
                  fontWeight:300, color:'rgba(255,255,255,.55)',
                }}>{s}</div>
              ))}
            </div>

            {/* Bouton Maps */}
            <a href="https://www.google.com/maps/place/Fleuriste+POUR+VOUS/@46.0221477,4.0885793,20.45z"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ width:'100%', justifyContent:'center' }}
            >📍 Nous trouver sur Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  )
}
