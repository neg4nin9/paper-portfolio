import { useLang } from '../LangContext'
import { ArrowUpIcon } from './Icons'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="display text-[0.95rem] uppercase [word-spacing:0.14em]">Eddy Conejo</p>
            <p className="mt-1.5 font-mono text-[10px] tracking-[0.1em] text-paper/60">
              San Ramón, Costa Rica — 10.09° N / 84.47° W
            </p>
          </div>

          <div className="grid gap-2 font-mono text-[10px] leading-[1.7] text-paper/60 sm:grid-cols-3 sm:gap-6 md:max-w-2xl">
            <p>{f.inkNote}</p>
            <p>{f.typeNote}</p>
            <p>{f.buildNote}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-5 font-mono text-[10px] tracking-[0.08em] text-paper/60">
          <span>{f.rights}</span>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-paper">
            <ArrowUpIcon className="h-3.5 w-3.5" />
            {f.top}
          </a>
        </div>
      </div>
    </footer>
  )
}
