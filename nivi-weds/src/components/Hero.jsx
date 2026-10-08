import { motion } from 'framer-motion'
import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import { MangoLeaves } from './Ornaments'

export default function Hero() {
  const { t } = useLanguage()
  const { couple, hero, events } = weddingData
  const w = events.wedding

  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="/images/hero-couple.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f0e1]/82 via-[#f7f0e1]/35 to-transparent" />
      <MangoLeaves className="absolute left-0 right-0 top-0 z-10" />

      <div className="relative z-20 flex min-h-[100dvh] flex-col items-center px-5 pb-28 pt-[calc(4.75rem+env(safe-area-inset-top))] text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-[20rem] font-serif text-sm italic leading-snug text-[#6b4b28]">
          {t(hero.blessingTamil, hero.blessingEnglish)}
        </motion.p>
        <h1 className="mt-3 font-cinzel text-[clamp(1.7rem,8vw,2.4rem)] font-semibold leading-none tracking-[0.06em] text-[#3d2918]">
          {couple.brideName.toUpperCase()}
        </h1>
        <p className="font-script text-[clamp(2rem,10vw,2.5rem)] leading-none text-[#c4a35a]">&</p>
        <h1 className="font-cinzel text-[clamp(1.7rem,8vw,2.4rem)] font-semibold leading-none tracking-[0.06em] text-[#3d2918]">
          {couple.groomName.toUpperCase()}
        </h1>
        <p className="mt-4 font-serif text-base italic text-[#6b4b28]">
          {t(hero.lineTamil, hero.lineEnglish)}
        </p>
        <div className="mt-6 rounded-2xl border border-[#c4a35a]/40 bg-white/70 px-5 py-3 backdrop-blur-sm">
          <p className="font-cinzel text-[10px] tracking-[0.28em] text-[#8b6914]">
            {t(w.displayDateTamil, w.displayDateEnglish).split(',')[0].toUpperCase()}
          </p>
          <p className="font-cinzel text-xl tracking-[0.12em] text-[#3d2918]">25 OCT 2026</p>
          <p className="text-xs text-[#7a5c45]">{t(w.timeDisplayTamil, w.timeDisplayEnglish)}</p>
        </div>
      </div>
    </section>
  )
}
