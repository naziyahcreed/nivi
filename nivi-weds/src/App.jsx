import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import weddingData from './data/weddingData'
import { useActiveSection } from './hooks/useActiveSection'
import { useReducedMotion } from './hooks/useReducedMotion'
import OpeningScreen from './components/OpeningScreen'
import DoorReveal from './components/DoorReveal'
import PetalCanvas from './components/PetalCanvas'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import FamilyBlessings from './components/FamilyBlessings'
import EventJourney from './components/EventJourney'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import HowToReach from './components/HowToReach'
import MapsSection from './components/MapsSection'
import GiftsBlessings from './components/GiftsBlessings'
import ShareSection from './components/ShareSection'
import ThankYou from './components/ThankYou'
import MusicControl from './components/MusicControl'

import { useLanguage } from './context/LanguageContext'
import { Ico } from './components/Icons'

const SECTIONS = ['home', 'story', 'events', 'gallery', 'venue']

export default function App() {
  const [opened, setOpened] = useState(false)
  const [doors, setDoors] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const musicRef = useRef(null)
  const reduced = useReducedMotion()

  const handleOpen = () => {
    setOpened(true)
    setDoors(true)
    setMusicOn(true)
    musicRef.current?.start()
    window.setTimeout(() => setDoors(false), reduced ? 200 : 1500)
  }

  return (
    <div className="phone-shell">
      {!opened ? <OpeningScreen onOpen={handleOpen} /> : null}
      <DoorReveal active={doors && opened} />
      <PetalCanvas active={opened} />
      <MusicControl ref={musicRef} on={musicOn} />

      {opened ? (
        <Invitation
          reduced={reduced}
          musicOn={musicOn}
          onMusic={() => setMusicOn((v) => !v)}
        />
      ) : null}
    </div>
  )
}

function Invitation({ reduced, musicOn, onMusic }) {
  const active = useActiveSection(SECTIONS)
  const { t } = useLanguage()

  return (
    <motion.div
      className="parchment min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0.2 : 0.7, delay: reduced ? 0 : 0.35 }}
    >
      <MobileNav active={active} musicOn={musicOn} onMusic={onMusic} />
      <main>
        <Hero />
        <OurStory />
        <FamilyBlessings />
        <EventJourney />
        <Countdown />
        <Gallery />
        <Venue />
        <HowToReach />
        <MapsSection />
        <GiftsBlessings />
        <ShareSection />
        <ThankYou />
      </main>

      <footer className="bg-[#1c0f0a] border-t border-[#c4a35a]/30 px-4 pt-8 pb-[calc(6rem+env(safe-area-inset-bottom))] text-center">
        {/* Hashtag */}
        <p className="font-cinzel text-xs tracking-[0.25em] text-[#ffd56b] uppercase">
          {weddingData.couple.hashtag}
        </p>

        {/* Website Creation / Contact on WhatsApp Only Card */}
        <div className="mt-5 mx-auto max-w-sm rounded-2xl border border-[#c4a35a]/50 bg-gradient-to-b from-[#2a170e] to-[#180e08] p-4 shadow-2xl text-center">
          <p className="font-serif text-base font-bold text-[#f4e2b3]">
            {t('இதேபோல் இணையதளம் வேண்டுமா?', 'Want a website like this?')}
          </p>
          <p className="mt-1 text-[11px] text-[#e8d5a3]">
            {t('வாட்ஸ்அப்பில் மட்டும் தொடர்பு கொள்ளவும்', 'Contact on WhatsApp only')}
          </p>

          <div className="mt-3">
            <a
              href="https://wa.me/91994452690?text=Hi!%20I%20saw%20this%20wedding%20invitation%20website%20and%20want%20a%20similar%20website%20for%20an%20event."
              target="_blank"
              rel="noreferrer"
              className="gold-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <Ico.wa className="h-4 w-4 text-[#25d366]" />
              <span>9944-52690</span>
            </a>
          </div>
        </div>

        <p className="mt-6 text-[10px] tracking-[0.2em] text-[#a8927a]/70 uppercase">
          With Love • {weddingData.couple.brideName} & {weddingData.couple.groomName}
        </p>
      </footer>
    </motion.div>
  )
}
