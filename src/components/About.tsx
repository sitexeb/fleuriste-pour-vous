export default function About() {
  return (
    <section id="boutique" style={{ background:'#fdf6ee', padding:'8rem 0', position:'relative', overflow:'hidden' }}>

      {/* Orbs décoratifs colorés */}
      <div style={{ position:'absolute', top:-180, right:-180, width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(200,169,106,.08) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:-120, left:-120, width:380, height:380, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(158,123,138,.07) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:'40%', left:'20%', width:200, height:200, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(107,143,99,.05) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:1380, margin:'0 auto', padding:'0 2.5rem' }}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
          gap:'5rem', alignItems:'center',
        }}>

          {/* Photos */}
          <div style={{ position:'relative', minHeight:540 }}>
            {/* Cadre décoratif */}
            <div style={{
              position:'absolute', top:-18, left:-18,
              width:'75%', height:'75%',
              border:'1px solid rgba(200,169,106,.25)',
              pointerEvents:'none', zIndex:0,
            }}/>
            {/* Image principale */}
            <div style={{
              position:'absolute', top:0, left:0,
              width:'78%', height:460,
              overflow:'hidden',
              boxShadow:'0 28px 70px rgba(0,0,0,.14)',
              zIndex:1,
            }}>
              <img src="/images/about3.jpg" alt="Atelier floral" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .8s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.04)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
              />
            </div>
            {/* Image secondaire */}
            <div style={{
              position:'absolute', bottom:0, right:0,
              width:'50%', height:300,
              overflow:'hidden',
              boxShadow:'0 18px 50px rgba(0,0,0,.12)',
              border:'5px solid #fdf6ee',
              zIndex:2,
            }}>
              <img src="/images/shop3.jpg" alt="Boutique" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .8s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.04)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
              />
            </div>
            {/* Badge années */}
            <div style={{
              position:'absolute', top:'36%', right:'-4%', zIndex:10,
              width:96, height:96, borderRadius:'50%',
              background:'linear-gradient(135deg, #6b8f63, #9e7b8a)',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              boxShadow:'0 8px 28px rgba(107,143,99,.4)',
            }}>
              <span style={{ fontFamily:'Playfair Display,serif', fontSize:'1.7rem', fontWeight:500, color:'#fff', lineHeight:1 }}>15</span>
              <span style={{ fontFamily:'Jost,sans-serif', fontSize:'.48rem', letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.8)' }}>ans</span>
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="lbl">Notre histoire</p>
            <div className="div-line" style={{ marginTop:'.6rem', marginBottom:'1.6rem' }}>
              <div className="gem"/>
              <div className="dl"/>
            </div>

            <h2 style={{
              fontFamily:'Playfair Display, serif',
              fontSize:'clamp(2rem,3.8vw,3rem)',
              fontWeight:400, lineHeight:1.15,
              color:'#1c1c1c', marginBottom:'1.5rem',
            }}>Un commerce de cœur,<br/><em style={{ color:'#6b8f63' }}>au cœur de Roanne</em></h2>

            {/* Citation */}
            <div style={{
              borderLeft:'3px solid', borderImage:'linear-gradient(to bottom, #c8a96a, #9e7b8a) 1',
              paddingLeft:'1.25rem', marginBottom:'1.5rem',
            }}>
              <p style={{
                fontFamily:'Cormorant Garamond, serif',
                fontStyle:'italic', fontWeight:300,
                fontSize:'1.18rem', lineHeight:1.7, color:'#4a3f38',
              }}>« Chaque bouquet est une lettre d'amour adressée à celui qui le reçoit. »</p>
            </div>

            <p style={{ fontFamily:'Jost,sans-serif', fontSize:'.9rem', fontWeight:300, lineHeight:1.9, color:'#5a4f48', marginBottom:'1.1rem' }}>
              Bienvenue chez <strong style={{ fontWeight:500, color:'#1c1c1c' }}>POUR VOUS</strong>, votre fleuriste de proximité à Roanne.
              Depuis plus de 15 ans, nous créons avec passion des compositions florales qui racontent vos émotions
              et subliment vos instants de vie.
            </p>
            <p style={{ fontFamily:'Jost,sans-serif', fontSize:'.9rem', fontWeight:300, lineHeight:1.9, color:'#5a4f48', marginBottom:'2.5rem' }}>
              Chaque fleur est soigneusement sélectionnée auprès de producteurs locaux et de marchés aux fleurs
              de qualité. Ici, l'artisanat floral est un art de vivre.
            </p>

            {/* Valeurs */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.9rem', marginBottom:'2.5rem' }}>
              {[
                { icon:'🌿', t:'Fleurs de saison', c:'rgba(107,143,99,.1)', b:'rgba(107,143,99,.4)' },
                { icon:'✂️', t:'Créations sur mesure', c:'rgba(200,169,106,.1)', b:'rgba(200,169,106,.4)' },
                { icon:'🎁', t:'Emballage raffiné', c:'rgba(158,123,138,.1)', b:'rgba(158,123,138,.4)' },
                { icon:'💚', t:'Commerce local', c:'rgba(181,103,58,.1)', b:'rgba(181,103,58,.4)' },
              ].map(v=>(
                <div key={v.t} style={{
                  padding:'1.1rem', background:v.c,
                  border:`1px solid ${v.b}`,
                  transition:'all .3s',
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.transform='translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow='0 8px 24px rgba(0,0,0,.07)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.transform=''; (e.currentTarget as HTMLElement).style.boxShadow=''; }}
                >
                  <span style={{ fontSize:'1.2rem', display:'block', marginBottom:5 }}>{v.icon}</span>
                  <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.82rem', fontWeight:500, color:'#1c1c1c' }}>{v.t}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Nous rendre visite</a>
          </div>
        </div>
      </div>
    </section>
  )
}
