import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'
import { CV, EMAIL, GITHUB, PHONE, PHONE_HREF } from '../site'
import { CheckIcon, CopyIcon, DownloadIcon, ExternalIcon } from './Icons'

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
            <p className="font-mono text-[0.75rem] lowercase tracking-[0.12em] text-paper/70">
              06 / {c.label}
            </p>
            <h2 className="display mt-5 text-[clamp(1.7rem,5.6vw,4.2rem)] uppercase text-paper">
              {c.title}
            </h2>
            <p className="mt-6 max-w-[40ch] text-[1.0625rem] leading-[1.7] text-paper/75">
              {c.lead}
            </p>

            <div className="mt-10 border-t border-paper/20 pt-5">
              <p className="font-mono text-[0.75rem] lowercase tracking-[0.12em] text-paper/70">
                {c.emailLabel}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="display-tight mt-2 block text-[clamp(1.2rem,3.6vw,2.4rem)] text-paper transition-colors duration-200 hover:text-magenta [overflow-wrap:anywhere]"
              >
                {EMAIL}
              </a>
              <a
                href={PHONE_HREF}
                className="mt-2 inline-flex items-center gap-2 font-mono text-[0.8125rem] tracking-[0.04em] text-paper/70 transition-colors duration-150 hover:text-magenta"
              >
                <span className="lowercase tracking-[0.12em]">{c.phoneLabel}</span>
                <span className="tabular-nums">{PHONE}</span>
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

            <p className="mt-8 font-mono text-[0.75rem] tracking-[0.08em] text-paper/70">
              {c.place}
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <p className="flex items-start gap-2 border-t border-paper/20 pt-5 font-mono text-[0.8125rem] leading-relaxed tracking-[0.03em] text-paper">
              <span className="mt-[3px] h-2 w-2 shrink-0 bg-magenta" aria-hidden="true" />
              {c.availability}
            </p>

            <div className="mt-8 border-t border-paper/20 pt-5">
              <p className="font-mono text-[0.75rem] lowercase tracking-[0.12em] text-paper/70">
                CV
              </p>
              <ul className="mt-3 space-y-2 font-mono text-[0.8125rem] tracking-[0.02em]">
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

            <div className="mt-8 border-t border-paper/20 pt-5">
              <p className="font-mono text-[0.75rem] lowercase tracking-[0.12em] text-paper/70">
                {c.linksLabel}
              </p>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-mono text-[0.8125rem] tracking-[0.02em] text-paper/85 transition-colors hover:text-paper"
              >
                <span className="ulink">github.com/neg4nin9</span>
                <ExternalIcon className="h-3.5 w-3.5" />
                <span className="sr-only">, {c.githubCta}</span>
              </a>
              <p className="mt-2 font-mono text-[0.75rem] leading-[1.6] tracking-[0.02em] text-paper/60">
                {c.githubNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
