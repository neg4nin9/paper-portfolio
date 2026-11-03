import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'
import { CV, EMAIL } from '../site'
import { CheckIcon, CopyIcon, DownloadIcon } from './Icons'

export default function Contact() {
  const { t, lang } = useLang()
  const c = t.contact
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2400)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const field = document.createElement('textarea')
      field.value = EMAIL
      field.setAttribute('readonly', '')
      field.style.position = 'fixed'
      field.style.opacity = '0'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      field.remove()
    }
    setCopied(true)
  }

  return (
    <section id="contact" className="section border-t border-ink bg-ink text-paper">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] lowercase tracking-[0.14em] text-paper/60">
              06 / {c.label}
            </p>
            <h2 className="display mt-5 text-[clamp(2.2rem,5.6vw,4.2rem)] uppercase text-paper">
              {c.title}
            </h2>
            <p className="mt-6 max-w-[40ch] text-[1.0625rem] leading-[1.7] text-paper/75">
              {c.lead}
            </p>

            <div className="mt-10 border-t border-paper/20 pt-5">
              <p className="font-mono text-[10px] lowercase tracking-[0.14em] text-paper/60">
                {c.emailLabel}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="display-tight mt-2 block break-words text-[clamp(1.2rem,3.6vw,2.4rem)] text-paper transition-colors duration-200 hover:text-magenta"
              >
                {EMAIL}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={copyEmail} className="btn btn-paper">
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span aria-live="polite">{copied ? c.copied : c.copy}</span>
              </button>
              <a href={CV[lang]} download className="btn btn-line">
                <DownloadIcon />
                {c.downloadCV}
              </a>
            </div>

            <p className="mt-8 font-mono text-[10px] tracking-[0.1em] text-paper/60">
              {c.place}
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <p className="flex items-start gap-2 border-t border-paper/20 pt-5 font-mono text-[10.5px] leading-relaxed tracking-[0.06em] text-paper">
              <span className="mt-[3px] h-2 w-2 shrink-0 bg-magenta" aria-hidden="true" />
              {c.availability}
            </p>

            <div className="mt-8 border-t border-paper/20 pt-5">
              <p className="font-mono text-[10px] lowercase tracking-[0.14em] text-paper/60">
                CV
              </p>
              <ul className="mt-3 space-y-2 font-mono text-[11px] tracking-[0.04em]">
                <li>
                  <a href={CV.en} download className="ulink text-paper/85 hover:text-paper">
                    English — PDF, 1 page
                  </a>
                </li>
                <li>
                  <a href={CV.es} download className="ulink text-paper/85 hover:text-paper">
                    Español — PDF, 1 página
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
