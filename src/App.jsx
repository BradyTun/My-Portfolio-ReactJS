import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact, { Footer } from './components/Contact'
import DevLoader from './components/DevLoader'

export default function App() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const bootTimer = window.setTimeout(() => {
      setIsBooting(false)
    }, 5000)

    return () => {
      window.clearTimeout(bootTimer)
    }
  }, [])

  if (isBooting) {
    return <DevLoader duration={5000} />
  }

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
