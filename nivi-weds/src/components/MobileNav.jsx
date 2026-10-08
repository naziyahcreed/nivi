import { useState } from 'react'
import weddingData from '../data/weddingData'
import { useLanguage } from '../context/LanguageContext'
import { Ico } from './Icons'
import LanguageToggle from './LanguageToggle'

export default function MobileNav({ active, musicOn, onMusic }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="invite-chrome top-0 z-50 flex items-center justify-between px-3 pb-2 pt-[max(10px,env(safe-area-inset-top))]">
        <p className="rounded-full bg-[#2a1b12]/90 px-3 py-1.5 font-cinzel text-xs tracking-[0.22em] text-[#f4e2b3]">N & N</p>
        <div className="flex items-center gap-2">
          <LanguageToggle dark />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full bg-[#2a1b12]/90 p-2 text-[#f4e2b3]"
            aria-label="Menu"
          >
            {open ? <Ico.close className="h-5 w-5" /> : <Ico.menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="invite-chrome inset-y-0 z-40 bg-[#1a100a]/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-3 top-[calc(3.2rem+env(safe-area-inset-top))] w-[min(13.5rem,calc(100%-1.5rem))] rounded-3xl bg-[#2a1b12] p-3 text-[#f4e2b3] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {weddingData.nav.map((item) => {
              const Icon = Ico[item.icon]
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                    active === item.id ? 'bg-[#c4a35a]/20' : ''
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {t(item.ta, item.en)}
                </a>
              )
            })}
            <button type="button" onClick={onMusic} className="mt-1 flex w-full items-center gap-3 px-3 py-2.5 text-sm">
              <Ico.music className="h-5 w-5 shrink-0" />
              {musicOn ? 'Music On' : 'Music Off'}
            </button>
          </div>
        </div>
      ) : null}

      <nav className="invite-chrome bottom-0 z-50 flex items-stretch justify-around border-t border-[#c4a35a]/30 bg-[#2a1b12] px-1 pt-1.5 pb-[max(8px,env(safe-area-inset-bottom))] text-[#d9c7a6]">
        {weddingData.nav.map((item) => {
          const Icon = Ico[item.icon]
          const on = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 ${on ? 'text-[#f4e2b3]' : ''}`}
              aria-label={item.en}
            >
              <span className={`rounded-full p-1.5 ${on ? 'bg-[#c4a35a] text-white' : ''}`}>
                <Icon className="h-5 w-5" />
              </span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
