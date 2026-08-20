import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact, { Footer } from './components/Contact'
import MotionLayer from './components/MotionLayer'
import Loader from './components/Loader'

export default function App() {
  return (
    <div className="site">
      <Loader />
      <MotionLayer />
      <div id="site-content">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <Work />
          <Marquee />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
