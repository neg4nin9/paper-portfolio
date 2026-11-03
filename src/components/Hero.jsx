import { useLang } from '../LangContext'
import { CV, EMAIL } from '../site'
import { DownloadIcon, MailIcon } from './Icons'

/* A press registration mark: the two inks a hair apart, as on a real proof. */
function RegMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 26 26"
      className={`reg-mark ${className}`}
      aria-hidden="true"
      fill="none"
      strokeWidth="1"
    >
      <circle cx="13" cy="13" r="6.5" stroke="#ff3d7f" />
      <circle cx="14.4" cy="11.8" r="6.5" stroke="#1e2bd0" />
      <path d="M13 0v7M13 19v7M0 13h7M19 13h7" stroke="#17150f" />
    </svg>
  )
}

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-12 md:pt-10 lg:pb-16">
      <div className="shell">
        <div className="rise flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="label">{h.eyebrow}</span>
          <span className="hidden h-px w-10 bg-line-strong sm:block" />
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-ink">
            <span className="h-2 w-2 shrink-0 bg-magenta" aria-hidden="true" />
            {h.available}
          </span>
        </div>

        <h1 className="display misreg mt-4 text-[clamp(3.2rem,9vw,8rem)] uppercase [word-spacing:0.16em] md:whitespace-nowrap">
          <span className="rise block">Eddy Conejo</span>
        </h1>

        <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-6">
            <p className="rise d-2 max-w-[42ch] font-mono text-[11.5px] leading-relaxed tracking-[0.04em] text-cobalt text-pretty sm:max-w-none sm:text-[13px]">
              {h.role}
            </p>

            <p className="rise d-3 mt-5 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-muted text-pretty">
              {h.tagline}
            </p>

            <div className="rise d-4 mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-ink">
                {h.viewWork}
              </a>
              <a
                href={CV[lang]}
                download
                className="btn btn-ghost"
                aria-label={`${h.downloadCV} (${lang === 'en' ? 'English' : 'Español'}, PDF)`}
              >
                <DownloadIcon />
                {h.downloadCV}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="ml-1 hidden items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-muted transition-colors hover:text-cobalt sm:inline-flex"
              >
                <MailIcon className="h-3.5 w-3.5" />
                {h.email}
              </a>
            </div>

            {/* The sheet's foot sits on the same baseline as the plate. */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-3 font-mono text-[10px] tracking-[0.12em] text-muted lg:mt-auto lg:pt-4">
              <span>01 / 06</span>
              <span className="hidden sm:inline">{h.place}</span>
              <span>{lang === 'en' ? 'EN' : 'ES'}</span>
            </div>
          </div>

          <figure className="rise-plate d-2 relative lg:col-span-5 lg:col-start-8">
            <RegMark className="-top-3.5 -left-3.5 hidden sm:block" />
            <div className="plate-frame duotone halftone aspect-[4/5] w-full overflow-hidden">
              <img
                src="/eddy.jpg"
                alt="Eddy Conejo, holding a coffee mug"
                width="640"
                height="800"
                loading="eager"
                decoding="async"
                className="h-full w-full scale-[1.04] object-cover object-[52%_26%]"
              />
            </div>
            <figcaption className="mt-3 flex flex-col gap-1 font-mono text-[10px] tracking-[0.1em] text-muted">
              <span className="lowercase">
                <span className="text-ink">fig. 01</span> — {h.caption}
              </span>
              <span className="shrink-0 tabular-nums">{h.coords}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
