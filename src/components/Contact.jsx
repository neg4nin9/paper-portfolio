import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'
import Icon from './Icon'

const socials = [
  { icon: 'github', href: 'https://github.com/' },
  { icon: 'x', href: 'https://x.com/' },
  { icon: 'discord', href: '#' },
  { icon: 'bluesky', href: 'https://bsky.app/' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const { t } = useLang()
  const c = t.contact
  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-3">{c.label}</p>
        <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
          {c.heading}{' '}
          <span className="text-gradient">{c.highlight}</span>{' '}
          {c.headingEnd}
        </h2>
        <p className="text-gray-muted text-lg mb-10 max-w-xl mx-auto">{c.subtext}</p>

        <a
          href="mailto:eddyisaac000@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {c.cta}
        </a>

        <div className="flex items-center justify-center gap-4 mt-12">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Icon name={social.icon} className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
