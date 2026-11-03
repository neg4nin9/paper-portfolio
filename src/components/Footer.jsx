import { useLang } from '../LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-muted">© 2026 Eddy Conejo. {t.footer.designed}</p>
        <p className="text-sm text-gray-muted">{t.footer.built}</p>
      </div>
    </footer>
  )
}
