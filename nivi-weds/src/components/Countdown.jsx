import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import { useCountdown } from '../hooks/useCountdown'
import Reveal from './Reveal'

export default function Countdown() {
  const { t } = useLanguage()
  const w = weddingData.events.wedding
  const parts = useCountdown(w.date, w.time)
  const items = [
    { n: parts.days, ta: 'நாட்கள்', en: 'Days' },
    { n: parts.hours, ta: 'மணி', en: 'Hours' },
    { n: parts.minutes, ta: 'நிமிடம்', en: 'Minutes' },
    { n: parts.seconds, ta: 'வினாடி', en: 'Seconds' },
  ]

  return (
    <section className="relative overflow-hidden px-4 py-12">
      <div className="temple-watermark pointer-events-none absolute inset-0" />
      <Reveal>
        <p className="text-center font-tamil text-lg text-[#5c3d2e]">
          {parts.complete
            ? t(weddingData.countdown.todayTamil, weddingData.countdown.todayEnglish)
            : t(weddingData.countdown.tamilHeading, weddingData.countdown.englishHeading)}
        </p>
      </Reveal>
      <div className="relative z-10 mx-auto mt-7 grid max-w-[min(320px,100%)] grid-cols-2 gap-4">
        {items.map((it, i) => (
          <Reveal key={it.en} delay={i * 0.06} className="text-center">
            <div className="flip-digit mx-auto flex h-[5.4rem] w-[5.4rem] items-center justify-center rounded-full">
              <span className="font-cinzel text-3xl text-[#5c3d2e]">{String(it.n).padStart(2, '0')}</span>
            </div>
            <p className="mt-2 text-[10px] tracking-[0.18em] text-[#8b6914] uppercase">{t(it.ta, it.en)}</p>
          </Reveal>
        ))}
      </div>
      <p className="relative z-10 mt-6 text-center font-serif text-sm italic text-[#7a5c45]">
        {t(weddingData.countdown.tamilSub, weddingData.countdown.englishSub)}
      </p>
    </section>
  )
}
