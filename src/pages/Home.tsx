import { useReveal } from '../hooks/useReveal'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Belief } from '../components/Belief'
import { Services } from '../components/Services'
import { Work } from '../components/Work'
import { TrustBlock } from '../components/TrustBlock'
import { Contact } from '../components/Contact'

export function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Marquee />
      <Belief />
      <Services />
      <Work />
      <TrustBlock />
      <Contact />
    </>
  )
}
