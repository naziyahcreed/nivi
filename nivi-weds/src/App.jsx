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
      <footer className="bg-[#2a1b12] px-5 py-5 pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-center text-[10px] tracking-[0.22em] text-[#e8d5a3]">
        {weddingData.couple.hashtag}
      </footer>
    </motion.div>
  )
}
