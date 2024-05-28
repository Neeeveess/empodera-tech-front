import { AboutSection } from './AboutSection'
import { FAQSection } from './FAQSection'
import { Header } from './Header'
import { HeroSection } from './HeroSection'

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <FAQSection />
    </>
  )
}
