import { createContext, useContext, useState } from 'react'
import { translations } from './i18n'

const LangContext = createContext()

export function LangProvider({ children }) {
  const browserLang = navigator.language?.startsWith('es') ? 'es' : 'en'
  const [lang, setLang] = useState(browserLang)

  const t = translations[lang]
  const toggle = () => setLang(l => l === 'en' ? 'es' : 'en')

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
