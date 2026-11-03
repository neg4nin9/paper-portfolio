import { useLang } from '../LangContext'
import SectionHead from './SectionHead'
import { ServiceGlyph } from './Icons'

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="section border-t border-line">
      <div className="shell">
        <SectionHead folio="04" label={s.label} title={s.title} note={s.note} />

        <ul className="mt-12 grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:mt-16 lg:grid-cols-4">
          {s.items.map((service, index) => (
            <li
              key={service.glyph}
              className={`border-t border-line pt-5 ${
                index > 0 ? 'lg:border-l lg:pl-6' : ''
              }`}
            >
              <ServiceGlyph name={service.glyph} className="h-8 w-8 text-cobalt" />
              <h3 className="display-tight mt-5 text-[1.15rem]">{service.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.65] text-muted">{service.body}</p>
              <p className="mt-4 font-mono text-[0.75rem] leading-[1.65] tracking-[0.02em] text-muted">
                <span className="text-cobalt">{s.givesLabel}</span> — {service.gives}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
