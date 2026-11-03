import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './i18n'

const LangContext = createContext()

const STORAGE_KEY = 'ec-lang'

function initialLang() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'es') return saved
  return window.navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* private mode: the language just won't persist */
    }
  }, [lang, t])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((current) => (current === 'en' ? 'es' : 'en')),
      t,
    }),
    [lang, t],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// The provider and its hook belong together; fast refresh can live with it.
// oxlint-disable-next-line react/only-export-components
export const useLang = () => useContext(LangContext)
