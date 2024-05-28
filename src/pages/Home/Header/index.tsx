import { AlignJustify } from 'lucide-react'
import { useEffect, useState } from 'react'

import logoSvg from '../../../assets/logo.svg'
import { Button } from '../../../components/Button'
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderNav } from './styles'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <HeaderContent>
        <HeaderLogo href="#">
          <img src={logoSvg} alt="" />
          <strong>Empodera Tech</strong>
        </HeaderLogo>

        <button className="menu-button" onClick={() => setNavOpen(!navOpen)}>
          <AlignJustify size={40} />
        </button>
        <HeaderNav className={navOpen ? 'open' : ''}>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <Button variation="tertiary" text="Inscreva-se" />
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  )
}
