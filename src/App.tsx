import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#faf6f1' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Hours />
      <Contact />
      <Footer />
    </div>
  )
}
