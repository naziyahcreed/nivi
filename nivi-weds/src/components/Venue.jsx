import { useState } from 'react'
import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { GoldCorners } from './Ornaments'
import { Ico } from './Icons'

export default function Venue() {
  const { t } = useLanguage()
  const [tab, setTab] = useState(0)
  const v = weddingData.venues[tab]

  return (
    <section id="venue" className="px-4 py-10">
      <Reveal>
        <SectionTitle title={t('நம் மங்கல இடம்', 'Our Venue')} />
      </Reveal>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {weddingData.venues.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(i)}
            className={`rounded-full px-3 py-1.5 text-xs ${tab === i ? 'gold-btn' : 'ghost-btn'}`}
          >
            {t(item.nameTamil, item.nameEnglish)}
          </button>
        ))}
      </div>
      <Reveal>
        <div className="gold-card overflow-hidden rounded-[24px]">
          <GoldCorners />
          <img src={v.image} alt="" className="h-44 w-full object-cover" />
          <div className="p-5">
            <p className="font-cinzel text-[10px] tracking-[0.16em] text-[#8b6914] uppercase">
              {t(v.eventsTamil, v.eventsEnglish)}
            </p>
            <h3 className="mt-1 font-serif text-2xl text-[#5c3d2e]">{t(v.nameTamil, v.nameEnglish)}</h3>
            <p className="mt-1 text-sm text-[#7a5c45]">{t(v.placeTamil, v.placeEnglish)}</p>
            <p className="mt-2 text-xs">{t(v.landmarkTamil, v.landmarkEnglish)}</p>
            <a
              href={v.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="gold-btn mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs"
            >
              <Ico.pin className="h-4 w-4" /> {t('வழி காண்', 'Get Directions')}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
