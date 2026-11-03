import eddyPhoto from '../../Eddy.jpg'
import { useLang } from '../LangContext'
import { Download } from 'lucide-react'

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="stagger">
          <p className="animate-fade-in-up opacity-0 text-secondary text-sm font-medium tracking-widest uppercase mb-4">
            {h.role}
          </p>
          <h1 className="animate-fade-in-up opacity-0 text-5xl md:text-7xl font-bold font-['Space_Grotesk'] leading-tight mb-6">
            {h.greeting}{' '}
            <span className="text-gradient">Eddy.</span>
          </h1>
          <p className="animate-fade-in-up opacity-0 text-lg text-gray-muted max-w-md leading-relaxed mb-8">
            {h.tagline}
          </p>
          <div className="animate-fade-in-up opacity-0 flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              {h.viewWork}
            </a>
            <a
              href={`/Eddy-Conejo_CV_${lang === 'en' ? 'EN' : 'ES'}.pdf`}
              download
              className="px-8 py-3 border border-white/15 text-white rounded-full font-medium hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {h.downloadCV}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-dark-card border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-2 z-10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-muted">{h.available}</span>
            </div>
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden glow-primary rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={eddyPhoto} alt="Eddy Conejo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-muted">
        <span className="text-xs tracking-widest uppercase">{h.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-muted to-transparent" />
      </div>
    </section>
  )
}
