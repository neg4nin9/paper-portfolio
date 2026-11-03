import { useLang } from '../LangContext'
import SectionHead from './SectionHead'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section border-t border-line">
      <div className="shell">
        <SectionHead folio="02" label={a.label} title={a.title} />

        <div className="mt-12 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="display-tight text-[clamp(1.15rem,1.7vw,1.4rem)] text-ink">{a.lead}</p>
            <div className="mt-6 space-y-4 text-[1rem] leading-[1.72] text-muted">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="label mb-3">{a.factsLabel}</p>
            <dl className="border-t border-line-strong">
              {a.facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-3">
                  <dt className="font-mono text-[0.75rem] lowercase tracking-[0.1em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[1rem] leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
