import { useLang } from '../LangContext'
import SectionHead from './SectionHead'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section border-t border-line bg-paper-deep">
      <div className="shell">
        <SectionHead folio="05" label={s.label} title={s.title} note={s.note} />

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {s.groups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-line-strong pb-2 font-mono text-[0.75rem] lowercase tracking-[0.1em] text-cobalt">
                {group.title}
              </h3>
              <ul className="mt-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2 text-[0.9375rem] leading-snug text-ink transition-colors duration-150 hover:text-cobalt"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
