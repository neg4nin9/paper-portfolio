import { LangProvider, useLang } from './LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Duotone print filter. Luminance is remapped onto three stops so shadow
 * areas land on cobalt, midtones on magenta and highlights on the paper.
 */
function RisoFilter() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
      <filter id="riso-duotone" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0    0    0    1 0"
        />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.06 0.95 0.93" />
          <feFuncG type="table" tableValues="0.09 0.18 0.92" />
          <feFuncB type="table" tableValues="0.62 0.42 0.88" />
        </feComponentTransfer>
      </filter>
    </svg>
  )
}

function Site() {
  const { t } = useLang()

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <RisoFilter />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}
