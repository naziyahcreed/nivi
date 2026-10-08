import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { GoldCorners } from './Ornaments'
import { Ico } from './Icons'

export default function Gallery() {
  const { t } = useLanguage()
  const { gallery } = weddingData
  const [open, setOpen] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const items = showAll ? gallery.items : gallery.items.slice(0, 3)

  return (
    <section id="gallery" className="px-4 py-10">
      <Reveal>
        <SectionTitle
          title={t(gallery.titleTamil, gallery.titleEnglish)}
          sub={t(gallery.subtitleTamil, gallery.subtitleEnglish)}
        />
      </Reveal>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <Reveal key={item.src} delay={i * 0.05} className={!showAll && i === 0 ? 'col-span-2' : ''}>
            <button
              type="button"
              onClick={() => setOpen(gallery.items.indexOf(item))}
              className={`gold-card group relative block w-full overflow-hidden rounded-2xl ${
                !showAll && i === 0 ? 'h-52' : 'h-28'
              }`}
            >
              <GoldCorners />
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            </button>
          </Reveal>
        ))}
      </div>
      <div className="mt-5 text-center">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="gold-btn rounded-full px-5 py-2 text-[11px] tracking-widest uppercase"
        >
          {showAll ? t('சுருக்கு', 'Show Less') : t('அனைத்தையும் காண்', 'View Gallery')}
        </button>
      </div>

      <AnimatePresence>
        {open !== null ? (
          <motion.div
            className="invite-chrome inset-y-0 z-[90] flex items-center justify-center bg-[#1a100a]/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-white"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation()
                setOpen(null)
              }}
            >
              <Ico.close className="h-6 w-6" />
            </button>
            <motion.img
              src={gallery.items[open].src}
              alt={gallery.items[open].alt}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
