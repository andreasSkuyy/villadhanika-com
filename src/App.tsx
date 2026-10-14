import { useRef } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import QuickFacts from './components/sections/QuickFacts'
import Rooms from './components/sections/Rooms'
import Facilities from './components/sections/Facilities'
import Wellness from './components/sections/Wellness'
import Dining from './components/sections/Dining'
import Location from './components/sections/Location'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'

export default function App() {
  const heroSentinel = useRef<HTMLDivElement>(null)

  return (
    <>
      <Header sentinel={heroSentinel} />
      <main>
        <Hero sentinel={heroSentinel} />
        <About />
        <Gallery />
        <QuickFacts />
        <Rooms />
        <Facilities />
        <Wellness />
        <Dining />
        <Location />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab sentinel={heroSentinel} />
    </>
  )
}
