import { useEffect, useRef, useState } from 'react'
import { useLang } from '../LangContext'
import { PROJECT_SLUGS } from '../site'
import { projectImage } from '../projectImages'
import SectionHead from './SectionHead'
import PlateFigure from './PlateFigures'

export default function Work() {
  const { t } = useLang()
  const w = t.work
  const [viewer, setViewer] = useState(null)
  const dialogRef = useRef(null)

  /* Native <dialog> handles Escape and focus return; we only sync the state. */
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (viewer && !dialog.open) {
      dialog.showModal()
    } else if (!viewer && dialog.open) {
      dialog.close()
    }
  }, [viewer])

  useEffect(() => {
    if (!viewer) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [viewer])

  return (
    <section id="work" className="section border-t border-line bg-paper-deep">
      <div className="shell">
        <SectionHead folio="03" label={w.label} title={w.title} />

        <div className="mt-12 md:mt-16">
          {w.plates.map((plate, index) => {
            const figureFirst = index % 2 === 1
            /* A real capture in src/assets/projects/ wins over the drawing. */
            const shot = projectImage(PROJECT_SLUGS[index])
            const alt = plate.imageAlt ?? `${plate.title} — ${plate.kind}`
            const figureClass = figureFirst
              ? 'md:col-span-5 md:col-start-2 md:row-start-1'
              : 'md:col-span-5 md:col-start-8 md:row-start-1'

            return (
              <article
                key={plate.title}
                className="grid gap-y-6 border-t border-line py-10 md:grid-cols-12 md:gap-x-8 md:py-14"
              >
                <span className="font-mono text-[0.75rem] tabular-nums tracking-[0.1em] text-muted md:col-span-1 md:pt-2">
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
                  <p className="mt-2 font-mono text-[0.75rem] lowercase tracking-[0.09em] text-cobalt">
                    {plate.kind}
                  </p>
                  <p className="mt-5 max-w-[54ch] text-[1rem] leading-[1.7] text-muted">
                    {plate.description}
                  </p>

                  <div className="mt-6 border-t border-line pt-3">
                    <p className="font-mono text-[0.75rem] lowercase tracking-[0.1em] text-muted">
                      {w.stackLabel}
                    </p>
                    <ul className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      {plate.stack.map((tool, toolIndex) => (
                        <li key={tool} className="font-mono text-[0.8125rem] text-ink">
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

                <figure className={figureClass}>
                  <div className="border border-line bg-paper p-2.5">
                    {shot ? (
                      <button
                        type="button"
                        onClick={() =>
                          setViewer({ src: shot, alt, title: plate.title, kind: plate.kind })
                        }
                        className="group block w-full cursor-zoom-in"
                        aria-label={`${plate.title}: ${w.zoom}`}
                      >
                        <img
                          src={shot}
                          alt={alt}
                          width="1600"
                          height="1000"
                          loading="lazy"
                          decoding="async"
                          className="block aspect-[16/10] w-full object-cover object-top transition-opacity duration-200 group-hover:opacity-90"
                        />
                      </button>
                    ) : (
                      <PlateFigure index={index} />
                    )}
                  </div>
                  <figcaption className="mt-2 flex items-baseline justify-between gap-4 font-mono text-[0.75rem] tracking-[0.08em] text-muted">
                    <span>fig. {String(index + 2).padStart(2, '0')}</span>
                    <span className="lowercase">
                      plate {String(index + 1).padStart(2, '0')}
                      {shot ? <span className="text-cobalt"> · {w.zoom}</span> : null}
                    </span>
                  </figcaption>
                </figure>
              </article>
            )
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="plate-dialog"
        aria-label={viewer ? `${viewer.title}: ${w.zoom}` : undefined}
        onClose={() => setViewer(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setViewer(null)
        }}
      >
        {viewer ? (
          <div className="p-3 sm:p-4">
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <p className="font-mono text-[0.75rem] tracking-[0.06em] text-cobalt">
                {viewer.title} — {viewer.kind}
              </p>
              <button
                type="button"
                onClick={() => setViewer(null)}
                className="shrink-0 border border-line-strong px-2 py-1 font-mono text-[0.75rem] lowercase tracking-[0.06em] text-muted transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {w.close} ✕
              </button>
            </div>
            <img src={viewer.src} alt={viewer.alt} className="mx-auto block h-auto max-w-full" />
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
