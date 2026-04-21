import { useEffect, useRef } from 'react'

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
    window.addEventListener('scroll', onScroll, { passive:true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="accueil" style={{ position:'relative', height:'100vh', minHeight:680, overflow:'hidden' }}>

      {/* Parallax bg */}
      <div ref={imgRef} style={{ position:'absolute', inset:'-25% 0', zIndex:0 }}>
        <img src="/images/hero3.jpg" alt="hero" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}/>
      </div>

      {/* Gradient overlays — mix de couleurs */}
      <div style={{
        position:'absolute', inset:0, zIndex:1,
        background:'linear-gradient(135deg, rgba(28,28,28,.78) 0%, rgba(107,143,99,.25) 45%, rgba(158,123,138,.3) 75%, rgba(200,169,106,.2) 100%)',
      }}/>
      <div style={{
        position:'absolute', inset:0, zIndex:1,
        background:'radial-gradient(ellipse at 65% 40%, transparent 25%, rgba(28,28,28,.55) 100%)',
      }}/>

      {/* Orb décoratif haut-droite */}
      <div style={{
        position:'absolute', top:'-8%', right:'-8%', zIndex:2,
        width:420, height:420, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(232,196,184,.18) 0%, rgba(158,123,138,.08) 60%, transparent 100%)',
        pointerEvents:'none',
      }}/>

      {/* Cercle ornemental animé */}
      <div className="anim-spin" style={{
        position:'absolute', top:'12%', right:'8%', zIndex:2,
        width:160, height:160, opacity:.14, pointerEvents:'none',
      }}>
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="74" stroke="#c8a96a" strokeWidth=".6"/>
          <circle cx="80" cy="80" r="55" stroke="#c8a96a" strokeWidth=".6"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>(
            <line key={a} x1="80" y1="6" x2="80" y2="22"
              stroke="#c8a96a" strokeWidth=".8"
              transform={`rotate(${a} 80 80)`}/>
          ))}
        </svg>
      </div>

      {/* Contenu */}
      <div style={{
        position:'relative', zIndex:3, height:'100%',
        display:'flex', flexDirection:'column', justifyContent:'center',
        maxWidth:1380, margin:'0 auto', padding:'0 2.5rem',
      }}>
        <div className="anim-up op0">
          {/* Pré-titre */}
          <div style={{ display:'flex', alignItems:'center', gap:'.9rem', marginBottom:'1.75rem' }}>
            <div style={{ width:36, height:1, background:'linear-gradient(to right,transparent,#c8a96a)' }}/>
            <span style={{ fontFamily:'Jost,sans-serif', fontSize:'.62rem', letterSpacing:'.28em', textTransform:'uppercase', color:'#c8a96a' }}>Fleuriste artisanal · Roanne, Loire</span>
            <div style={{ width:36, height:1, background:'linear-gradient(to left,transparent,#c8a96a)' }}/>
          </div>

          {/* Titre principal */}
          <h1 style={{
            fontFamily:'Playfair Display, serif',
            fontSize:'clamp(3.2rem,8.5vw,7.5rem)',
            fontWeight:400, lineHeight:1.02,
            color:'#fff', marginBottom:'.2rem',
            letterSpacing:'-.02em',
          }}>Des fleurs</h1>
          <h1 style={{
            fontFamily:'Playfair Display, serif',
            fontStyle:'italic',
            fontSize:'clamp(3.2rem,8.5vw,7.5rem)',
            fontWeight:400, lineHeight:1.02,
            letterSpacing:'-.02em',
            marginBottom:'2rem',
            background:'linear-gradient(135deg, #f0deb0, #c8a96a, #e8c4b8, #9e7b8a)',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
          }}>pour vous.</h1>

          {/* Sous-titre */}
          <p style={{
            fontFamily:'Cormorant Garamond, serif',
            fontStyle:'italic', fontWeight:300,
            fontSize:'clamp(1rem,2.2vw,1.4rem)',
            color:'rgba(255,255,255,.78)',
            maxWidth:500, lineHeight:1.7, marginBottom:'2.75rem',
          }}>Compositions florales artisanales, bouquets de saison &amp; créations pour vos moments précieux à Roanne.</p>

          {/* Boutons — vitrine seulement */}
          <div style={{ display:'flex', gap:'1.1rem', flexWrap:'wrap' }}>
            <a href="#galerie" className="btn-primary">Découvrir nos créations</a>
            <a href="#contact" className="btn-ghost-light">Nous contacter</a>
          </div>

          {/* Stats */}
          <div style={{
            display:'flex', gap:'2.5rem', marginTop:'3.5rem',
            borderTop:'1px solid rgba(255,255,255,.1)', paddingTop:'2rem',
            flexWrap:'wrap',
          }}>
            {[
              { n:'15+', l:'Années d\'expérience' },
              { n:'✦', l:'Créations uniques' },
              { n:'100%', l:'Fleurs fraîches' },
            ].map(s=>(
              <div key={s.l}>
                <div style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(1.4rem,3vw,2rem)', color:'#c8a96a', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontFamily:'Jost,sans-serif', fontSize:'.62rem', letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginTop:5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-float" style={{
        position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
        zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:'.4rem',
      }}>
        <span style={{ fontFamily:'Jost,sans-serif', fontSize:'.56rem', letterSpacing:'.24em', textTransform:'uppercase', color:'rgba(255,255,255,.38)' }}>Découvrir</span>
        <div style={{ width:1, height:44, background:'linear-gradient(to bottom, rgba(200,169,106,.7), transparent)' }}/>
      </div>
    </section>
  )
}
