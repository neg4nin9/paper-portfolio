import { useLang } from '../LangContext'
import SectionHead from './SectionHead'
import PlateFigure from './PlateFigures'

export default function Work() {
  const { t } = useLang()
  const w = t.work

  return (
    <section id="work" className="section border-t border-line bg-paper-deep">
      <div className="shell">
        <SectionHead folio="03" label={w.label} title={w.title} note={w.note} />

        <div className="mt-12 md:mt-16">
          {w.plates.map((plate, index) => {
            const figureFirst = index % 2 === 1

            return (
              <article
                key={plate.title}
                className="grid gap-y-6 border-t border-line py-10 md:grid-cols-12 md:gap-x-8 md:py-14"
              >
                <span className="font-mono text-[11px] tabular-nums tracking-[0.1em] text-muted md:col-span-1 md:pt-2">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div
                  className={
                    figureFirst
                      ? 'md:col-span-6 md:col-start-7 md:row-start-1'
                      : 'md:col-span-6 md:col-start-2 md:row-start-1'
                  }
                >
                  <h3 className="display misreg-hover text-[clamp(1.85rem,3.6vw,3rem)]">
                    {plate.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10.5px] lowercase tracking-[0.1em] text-cobalt">
                    {plate.kind}
                  </p>
                  <p className="mt-5 max-w-[52ch] text-[0.975rem] leading-[1.72] text-muted">
                    {plate.description}
                  </p>

                  <div className="mt-6 border-t border-line pt-3">
                    <p className="font-mono text-[9.5px] lowercase tracking-[0.12em] text-muted">
                      {w.stackLabel}
                    </p>
                    <ul className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      {plate.stack.map((tool, toolIndex) => (
                        <li key={tool} className="font-mono text-[10.5px] text-ink">
                          {tool}
                          {toolIndex < plate.stack.length - 1 ? (
                            <span aria-hidden="true" className="ml-2 text-muted">
                              /
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <figure
                  className={
                    figureFirst
                      ? 'md:col-span-5 md:col-start-2 md:row-start-1'
                      : 'md:col-span-5 md:col-start-8 md:row-start-1'
                  }
                >
                  <div className="border border-line bg-paper p-3">
                    <PlateFigure index={index} />
                  </div>
                  <figcaption className="mt-2 flex items-baseline justify-between gap-4 font-mono text-[9.5px] tracking-[0.1em] text-muted">
                    <span>fig. {String(index + 2).padStart(2, '0')}</span>
                    <span className="lowercase">
                      plate {String(index + 1).padStart(2, '0')}
                    </span>
                  </figcaption>
                </figure>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
