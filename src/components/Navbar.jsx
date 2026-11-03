import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'
import { EMAIL, SECTION_IDS } from '../site'
import { GlobeIcon, MenuIcon } from './Icons'

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const next = lang === 'es' ? 'en' : 'es'

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'services', label: t.nav.services },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy: the section owning the middle of the viewport is the current one.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Mobile panel: escape to close, and no background scrolling behind it.
  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-paper/92 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="group flex items-baseline gap-2.5 whitespace-nowrap">
          <span className="display text-[0.95rem] uppercase tracking-[-0.02em] [word-spacing:0.14em] misreg-hover">
            Eddy Conejo
          </span>
          <span className="hidden font-mono text-[0.75rem] tracking-[0.1em] text-muted xl:inline">
            ui/ux · full-stack
          </span>
        </a>

        <nav aria-label={t.nav.navigation} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const current = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={current ? 'true' : undefined}
                    className={`font-mono text-[0.8125rem] tracking-[0.06em] transition-colors duration-200 ${
                      current ? 'text-cobalt' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(next)}
            aria-label={t.nav.switchTo}
            title={t.nav.switchTo}
            className="lang-btn"
          >
            <GlobeIcon className="h-4 w-4" />
            <span className="hidden sm:inline" lang={next}>
              {t.nav.switchName}
            </span>
            <span className="sm:hidden" lang={next}>
              {t.nav.switchCode}
            </span>
          </button>

          <a href={`mailto:${EMAIL}`} className="btn btn-ink btn-sm hidden lg:inline-flex">
            {t.nav.talk}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="-mr-2 flex items-center gap-2 whitespace-nowrap p-2 font-mono text-[0.8125rem] tracking-[0.06em] lg:hidden"
          >
            <span className="hidden min-[480px]:inline">{open ? t.nav.close : t.nav.menu}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-line bg-paper transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[32rem] border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label={t.nav.menu} className="shell py-6">
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li key={link.id} className="border-b border-line">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-3"
                >
                  <span className="display text-[1.6rem] uppercase">{link.label}</span>
                  <span className="font-mono text-[0.75rem] text-muted">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setOpen(false)}
            className="btn btn-ink mt-6 w-full"
          >
            {t.nav.talk}
          </a>
        </nav>
      </div>
    </header>
  )
}
