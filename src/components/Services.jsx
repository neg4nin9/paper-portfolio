import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'

export default function Services() {
  const [ref, inView] = useInView()
  const { t } = useLang()
  const s = t.services
  return (
    <section id="services" ref={ref} className="py-32 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-3">{s.label}</p>
        <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-12">
          {s.heading} <span className="text-gradient">{s.highlight}</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.items.map((service, i) => (
            <div key={i} className="gradient-border p-6 hover:translate-y-[-4px] transition-transform duration-300 group flex flex-col items-center text-center">
              <span className="text-3xl block mb-3">{service.icon}</span>
              <h3 className="text-base font-semibold font-['Space_Grotesk'] mb-1.5 text-white group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
