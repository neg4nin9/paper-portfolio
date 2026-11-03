import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'

const colors = [
  'from-primary/30 to-primary/5',
  'from-secondary/30 to-secondary/5',
  'from-purple-400/30 to-purple-400/5',
  'from-emerald-400/30 to-emerald-400/5',
  'from-pink-400/30 to-pink-400/5',
]

export default function Work() {
  const [ref, inView] = useInView()
  const { t } = useLang()
  const w = t.work
  return (
    <section id="work" ref={ref} className="py-32 px-6 bg-dark-light/50">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-3">{w.label}</p>
        <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-12">
          {w.heading} <span className="text-gradient">{w.highlight}</span>
        </h2>

        <div className="grid gap-8">
          {w.projects.map((project, i) => (
            <div key={i} className="group gradient-border p-8 md:p-10 hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold font-['Space_Grotesk'] mb-3 text-white group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-muted leading-relaxed max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 text-xs bg-white/5 text-gray-muted rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`w-full md:w-48 h-32 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105`}>
                  <span className="text-3xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
