import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import CodingProfiles from './sections/CodingProfiles'
import Leadership from './sections/Leadership'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="App relative">
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      {/* Grid Background */}
      <div className="grid-bg fixed inset-0 z-0"></div>
      <div className="noise fixed inset-0 z-0 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <CodingProfiles />
          <Leadership />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
