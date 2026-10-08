import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle({ dark = false }) {
  const { lang, toggleLang } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wider ${
        dark
          ? 'border-[#c4a35a]/50 bg-[#2a1b12]/80 text-[#f4e2b3] hover:bg-[#c4a35a]/20'
          : 'border-[#c4a35a] text-[#6b4b28] bg-white/70 hover:bg-[#c4a35a] hover:text-white'
      }`}
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'தமிழ்' : 'EN'}
    </button>
  )
}
