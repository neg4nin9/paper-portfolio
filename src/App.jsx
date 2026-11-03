import { LangProvider } from './LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
    <div className="bg-dark min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
    </LangProvider>
  )
}
