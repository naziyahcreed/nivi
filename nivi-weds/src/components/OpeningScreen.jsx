import { motion } from 'framer-motion'
import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import { useCountdown } from '../hooks/useCountdown'
import LanguageToggle from './LanguageToggle'

export default function OpeningScreen({ onOpen }) {
  const { t } = useLanguage()
  const { opening, couple } = weddingData
  const w = weddingData.events.wedding
  const parts = useCountdown(w.date, w.time)

  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img src="/images/opening-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a100a]/35 via-[#1a100a]/20 to-[#1a100a]/55" />
      <div className="absolute right-3 top-[max(12px,env(safe-area-inset-top))] z-30">
        <LanguageToggle />
      </div>

      <div className="relative z-20 flex min-h-dvh flex-col items-center justify-center px-4 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} className="w-full max-w-sm">
          <p className="font-cinzel text-[10px] uppercase tracking-[0.38em] text-[#f4e2b3] drop-shadow">
            {opening.kicker}
          </p>
          <h1 className="mt-3 font-tamil text-[clamp(1.15rem,5.5vw,1.5rem)] font-semibold leading-snug text-white drop-shadow-md">
            {opening.quoteTamil}
          </h1>

          <div className="mt-4">
            <p className="font-cinzel text-[clamp(1.5rem,7vw,1.9rem)] font-semibold tracking-[0.08em] text-white drop-shadow-lg">
              {couple.brideName.toUpperCase()}
            </p>
            <p className="font-script text-[clamp(1.8rem,8.5vw,2.3rem)] leading-none text-[#f4e2b3] my-0.5">&</p>
            <p className="font-cinzel text-[clamp(1.5rem,7vw,1.9rem)] font-semibold tracking-[0.08em] text-white drop-shadow-lg">
              {couple.groomName.toUpperCase()}
            </p>
          </div>

          <p className="mt-3 font-serif text-sm italic text-white/90">
            {t(opening.blessingTamil, opening.blessingEnglish)}
          </p>

          {/* Live Countdown Jewel Box */}
          <div className="mx-auto mt-5 max-w-[310px] rounded-2xl border border-[#ffd56b]/50 bg-black/65 p-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.65)] backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-[#ffd56b]">
              <span className="text-[10px]">✨</span>
              <p className="font-cinzel text-[9px] font-bold uppercase tracking-[0.22em] text-[#f4e2b3]">
                {t('நம் திருமணத்திற்கு இன்னும்', 'Time Until Muhurtham')}
              </p>
              <span className="text-[10px]">✨</span>
            </div>

            <div className="mt-2 grid grid-cols-4 gap-1.5 text-center">
              {[
                { n: parts.days, l: t('நாட்கள்', 'Days'), isSec: false },
                { n: parts.hours, l: t('மணி', 'Hours'), isSec: false },
                { n: parts.minutes, l: t('நிமிடம்', 'Mins'), isSec: false },
                { n: parts.seconds, l: t('வினாடி', 'Secs'), isSec: true },
              ].map((it) => (
                <div
                  key={it.l}
                  className={`flex flex-col items-center justify-center rounded-xl border ${
                    it.isSec
                      ? 'border-[#ffd56b]/80 bg-[#351e12]/90 shadow-[0_0_12px_rgba(255,213,107,0.35)]'
                      : 'border-[#c4a35a]/35 bg-black/55'
                  } py-1 px-0.5`}
                >
                  <span
                    className={`font-cinzel text-lg sm:text-xl font-black leading-tight ${
                      it.isSec ? 'text-[#ffd56b]' : 'text-white'
                    }`}
                  >
                    {String(it.n).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] tracking-wider text-[#e8d5a3] uppercase font-semibold">
                    {it.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="gold-btn pulse-glow mt-6 rounded-full px-8 py-3 font-cinzel text-xs tracking-[0.22em] uppercase font-bold cursor-pointer"
          >
            {t(opening.buttonTamil, opening.buttonEnglish)}
          </button>
          <p className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-white/75">
            {t(opening.tapTamil, opening.tapEnglish)}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
