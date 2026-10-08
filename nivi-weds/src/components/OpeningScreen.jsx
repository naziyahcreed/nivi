import { motion } from 'framer-motion'
import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function OpeningScreen({ onOpen }) {
  const { t } = useLanguage()
  const { opening, couple } = weddingData

  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img src="/images/opening-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a100a]/25 via-transparent to-[#1a100a]/45" />
      <div className="absolute right-3 top-[max(12px,env(safe-area-inset-top))] z-30">
        <LanguageToggle />
      </div>

      <div className="relative z-20 flex min-h-dvh flex-col items-center justify-center px-5 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="font-cinzel text-[10px] uppercase tracking-[0.42em] text-white/90 drop-shadow">
            {opening.kicker}
          </p>
          <h1 className="mt-6 font-tamil text-[clamp(1.25rem,6.2vw,1.7rem)] font-semibold leading-snug text-white drop-shadow-md">
            {opening.quoteTamil}
          </h1>
          <p className="mt-8 font-cinzel text-[clamp(1.55rem,7.5vw,2.05rem)] font-semibold tracking-[0.08em] text-white drop-shadow-lg">
            {couple.brideName.toUpperCase()}
          </p>
          <p className="font-script text-[clamp(2rem,10vw,2.5rem)] leading-none text-[#f4e2b3]">&</p>
          <p className="font-cinzel text-[clamp(1.55rem,7.5vw,2.05rem)] font-semibold tracking-[0.08em] text-white drop-shadow-lg">
            {couple.groomName.toUpperCase()}
          </p>
          <p className="mt-5 font-serif text-base italic text-white/90">
            {t(opening.blessingTamil, opening.blessingEnglish)}
          </p>
          <button
            type="button"
            onClick={onOpen}
            className="gold-btn pulse-glow mt-8 rounded-full px-8 py-3 font-cinzel text-xs tracking-[0.22em] uppercase"
          >
            {t(opening.buttonTamil, opening.buttonEnglish)}
          </button>
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/70">
            {t(opening.tapTamil, opening.tapEnglish)}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
