import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'

export default function About() {
  const [ref, inView] = useInView()
  const { t } = useLang()
  const a = t.about
  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-3">{a.label}</p>
        <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-12">
          {a.heading} <span className="text-gradient">{a.highlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-muted leading-relaxed">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {a.stats.map((stat, i) => (
              <div key={i} className="gradient-border p-6 text-center">
                <p className="text-3xl font-bold text-gradient font-['Space_Grotesk']">{stat.number}</p>
                <p className="text-sm text-gray-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
