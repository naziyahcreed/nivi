import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import Countdown from './components/Countdown'
import CurtainReveal from './components/CurtainReveal'
import CustomCursor from './components/CustomCursor'
import EasyViewToggle from './components/EasyViewToggle'
import EventTimeline from './components/EventTimeline'
import FamilyBlessings from './components/FamilyBlessings'
import FinalThankYou from './components/FinalThankYou'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import InvitationMessage from './components/InvitationMessage'
import KolamDivider from './components/KolamDivider'
import LuxuryShell from './components/LuxuryShell'
import MobileNavigation from './components/MobileNavigation'
import MobileTopBar from './components/MobileTopBar'
import MusicControl from './components/MusicControl'
import OpeningScreen from './components/OpeningScreen'
import ParticleCanvas from './components/ParticleCanvas'
import ShareSection from './components/ShareSection'
import VenueMaps from './components/VenueMaps'
import WeddingDayBanner from './components/WeddingDayBanner'
import weddingData from './data/weddingData'
import { useReducedMotion } from './hooks/useReducedMotion'
import { getWeddingDayState } from './utils/weddingDay'

function App() {
  const [opened, setOpened] = useState(false)
  const [curtain, setCurtain] = useState(false)
  const [easyView, setEasyView] = useState(weddingData.features.easyViewDefault)
  const musicRef = useRef(null)
  const reduced = useReducedMotion()

  const weddingDayState = useMemo(
    () => getWeddingDayState(weddingData.events.wedding.date),
    [],
  )

  const handleOpen = () => {
    setOpened(true)
    setCurtain(true)
    try {
      musicRef.current?.start()
    } catch {
      /* audio optional */
    }
    window.setTimeout(() => setCurtain(false), reduced ? 300 : 1200)
  }

  useEffect(() => {
    if (!opened || !weddingData.features.customCursor) return undefined
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (coarse) return undefined
    document.documentElement.classList.add('custom-cursor-active')
    return () => document.documentElement.classList.remove('custom-cursor-active')
  }, [opened])

  return (
    <>
      {!opened ? <OpeningScreen onOpen={handleOpen} /> : null}

      <ParticleCanvas active={opened} />
      <CustomCursor enabled={opened} />
      <EasyViewToggle enabled={easyView} onToggle={() => setEasyView((v) => !v)} />
      <CurtainReveal active={curtain && opened} />

      {opened ? (
        <motion.div
          className={easyView ? 'easy-view' : ''}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0.2 : 0.5 }}
        >
          <LuxuryShell>
            <MobileTopBar />
            <WeddingDayBanner state={weddingDayState} />
            <main className="pb-24">
              <Hero weddingDayState={weddingDayState} />
              <Countdown weddingDayState={weddingDayState} />
              <InvitationMessage />
              {weddingData.features.kolamDividers ? <KolamDivider /> : null}
              <EventTimeline />
              {weddingData.features.kolamDividers ? <KolamDivider /> : null}
              <FamilyBlessings />
              <Gallery />
              <VenueMaps />
              <ShareSection />
              <FinalThankYou weddingDayState={weddingDayState} />
            </main>
          </LuxuryShell>
          <MobileNavigation />
          <MusicControl ref={musicRef} />
        </motion.div>
      ) : null}
    </>
  )
}

export default App
