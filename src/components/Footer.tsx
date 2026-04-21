export default function Footer() {
  return (
    <footer style={{
      background:'#111', color:'rgba(255,255,255,.5)',
      padding:'4.5rem 0 2rem', position:'relative', overflow:'hidden',
    }}>
      {/* Ligne top dégradée multicolore */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:2,
        background:'linear-gradient(to right, #6b8f63, #c8a96a, #9e7b8a, #c9967f, #6b8f63)',
      }}/>
      {/* Orb */}
      <div style={{ position:'absolute', top:-200, right:-200, width:500, height:500, borderRadius:'50%',
        border:'1px solid rgba(200,169,106,.05)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'3rem', marginBottom:'3.5rem' }}>

          {/* Marque */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'1.25rem' }}>
              <img src="/images/logo-final.png" alt="" style={{ width:38, height:38, objectFit:'contain', filter:'brightness(0) invert(1)', opacity:.8 }}/>
              <div>
                <div style={{ fontFamily:'Playfair Display,serif', fontSize:'1.1rem', fontWeight:500, color:'#fff', letterSpacing:'.12em' }}>POUR VOUS</div>
                <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.52rem', letterSpacing:'.25em', textTransform:'uppercase', color:'#c8a96a', marginTop:3 }}>Fleuriste · Roanne</div>
              </div>
            </div>
            <p style={{ fontFamily:'Jost,sans-serif', fontSize:'.82rem', fontWeight:300, lineHeight:1.8, maxWidth:230, marginBottom:'1.4rem' }}>
              Votre fleuriste artisanal de proximité à Roanne. Des fleurs fraîches, des compositions uniques, un service du cœur.
            </p>
            {/* Icônes sociales */}
            <div style={{ display:'flex', gap:'.65rem' }}>
              <div style={{
                width:34, height:34, border:'1px solid rgba(255,255,255,.1)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'.85rem', cursor:'default',
              }}>📸</div>
              <a href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank" rel="noopener noreferrer"
                style={{
                  width:34, height:34,
                  border:'1px solid rgba(24,119,242,.35)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#6b9fff', textDecoration:'none', transition:'all .3s', flexShrink:0,
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background='#1877f2'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background='transparent'; (e.currentTarget as HTMLElement).style.color='#6b9fff'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.6rem', letterSpacing:'.22em', textTransform:'uppercase', color:'#c8a96a', marginBottom:'1.4rem' }}>Navigation</div>
            {[['Accueil','#accueil'],['La Boutique','#boutique'],['Services','#services'],['Galerie','#galerie'],['Horaires','#horaires'],['Contact','#contact']].map(([l,h])=>(
              <a key={l} href={h} style={{
                display:'block', fontFamily:'Jost,sans-serif', fontSize:'.82rem',
                color:'rgba(255,255,255,.42)', textDecoration:'none',
                padding:'.3rem 0', transition:'all .2s',
              }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color='#fff'; (e.currentTarget as HTMLElement).style.paddingLeft='8px'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.42)'; (e.currentTarget as HTMLElement).style.paddingLeft='0'; }}
              >{l}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.6rem', letterSpacing:'.22em', textTransform:'uppercase', color:'#9e7b8a', marginBottom:'1.4rem' }}>Services</div>
            {['Bouquets du quotidien','Mariage & événements','Deuil & recueillement','Décoration entreprise','Livraison à domicile'].map(s=>(
              <div key={s} style={{ fontFamily:'Jost,sans-serif', fontSize:'.82rem', color:'rgba(255,255,255,.42)', padding:'.3rem 0' }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.6rem', letterSpacing:'.22em', textTransform:'uppercase', color:'#6b8f63', marginBottom:'1.4rem' }}>Contact</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'.7rem', marginBottom:'1.4rem' }}>
              <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.82rem' }}>📍 Roanne, Loire (42)</div>
              <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.82rem' }}>📞 04 XX XX XX XX</div>
              <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.82rem' }}>✉️ contact@fleuriste-pourvous.fr</div>
              <a href="https://www.facebook.com/Pourvousfleuriste#"
                target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:'.45rem',
                  fontFamily:'Jost,sans-serif', fontSize:'.82rem',
                  color:'#6b9fff', textDecoration:'none', transition:'color .2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
                onMouseLeave={e=>(e.currentTarget.style.color='#6b9fff')}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Pourvousfleuriste
              </a>
            </div>
            <div style={{ padding:'1rem 1.2rem', background:'rgba(200,169,106,.07)', border:'1px solid rgba(200,169,106,.18)' }}>
              <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.58rem', letterSpacing:'.18em', textTransform:'uppercase', color:'#c8a96a', marginBottom:5 }}>Aujourd'hui</div>
              <div style={{ fontFamily:'Playfair Display,serif', fontStyle:'italic', fontSize:'.88rem', color:'#fff' }}>09h00 – 12h30 · 14h30 – 19h00</div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,.06)',
          paddingTop:'1.75rem',
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem',
        }}>
          <p style={{ fontFamily:'Jost,sans-serif', fontSize:'.7rem', color:'rgba(255,255,255,.22)' }}>
            © {new Date().getFullYear()} Fleuriste POUR VOUS — Roanne. Tous droits réservés.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:'.55rem' }}>
            <div style={{ width:18, height:1, background:'linear-gradient(to right,transparent,#c8a96a)' }}/>
            <span style={{ fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', fontSize:'.85rem', color:'rgba(255,255,255,.22)' }}>Fait avec amour à Roanne</span>
            <div style={{ width:18, height:1, background:'linear-gradient(to left,transparent,#9e7b8a)' }}/>
          </div>
        </div>
      </div>
    </footer>
  )
}
