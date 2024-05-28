import bgImg from '../../../assets/hero-bg.jpg'
import heroImg from '../../../assets/hero-img.png'
import { Button } from '../../../components/Button'
import { HeroContainer, HeroContent, HeroText } from './style'

export function HeroSection() {
  return (
    <HeroContainer bgImg={bgImg}>
      <HeroContent>
        <HeroText>
          <h2>Label goes here</h2>
          <h1>Empodere-se com a tecnologia</h1>
          <p>
            Lorem ipsum dolor sit amet. Qui ipsa accusamus ut dolorem commodi
            aut fugit enim id quidem eligendi ab quisquam assumenda qui sint
            repudiandae. Nam provident maxime qui laudantium omnis qui dolores
            quas eum vitae voluptate est sint excepturi non molestias impedit
            aut labore odit! Ab dolorum repudiandae sed error omnis qui omnis
            repellendus sit similique voluptatem!
          </p>
          <div className="group-buttons">
            <Button variation="primary" text="Saiba-mais" />
            <Button variation="secondary" text="Inscreva-se" />
          </div>
        </HeroText>
        <img src={heroImg} alt="" />
      </HeroContent>
    </HeroContainer>
  )
}
