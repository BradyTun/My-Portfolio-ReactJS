import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact, { Footer } from './components/Contact'

export default function App() {
  return (
    <div className="bg-canvas">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
