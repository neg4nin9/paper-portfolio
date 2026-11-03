import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useLang } from '../LangContext'

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-['Space_Grotesk']">
          <span className="text-gradient">EC</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-muted hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm text-gray-muted hover:text-white transition-colors duration-200 font-medium"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a href="#contact" className="px-5 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
            {t.nav.letsTalk}
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      <div className={`md:hidden bg-dark-light/95 backdrop-blur-xl border-t border-white/5 px-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-72 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-gray-muted hover:text-white transition-colors duration-200">
            {l.label}
          </a>
        ))}
        <button onClick={toggle} className="flex items-center gap-2 text-gray-muted hover:text-white transition-colors duration-200 font-medium">
          <Globe className="w-4 h-4" />
          {lang === 'en' ? 'Español' : 'English'}
        </button>
      </div>
    </nav>
  )
}
