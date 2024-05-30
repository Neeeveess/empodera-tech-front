import bgImg from '../../../assets/hero-bg.jpg'
import heroImg from '../../../assets/hero-img.png'
import { Button } from '../../../components/Button'
import { HeroContainer, HeroContent, HeroText } from './style'

export function HeroSection() {
  return (
    <HeroContainer bgImg={bgImg}>
      <HeroContent>
        <HeroText>
          {/* <h2>Label goes here</h2> */}
          <h1>Bem-vindas ao Empodera Tech</h1>
          <p>
            O Programa de Incentivo e Capacitação para Mulheres no Mercado
            Tecnológico é uma iniciativa estratégica voltada para promover a
            participação e o avanço das mulheres no setor de tecnologia.
            Reconhecendo a sub-representação das mulheres nesse campo, o
            programa visa oferecer suporte abrangente para capacitar e
            incentivar mulheres a ingressarem, avançarem e liderarem no mercado
            tecnológico. Este programa aborda diversas áreas-chave para a
            capacitação das mulheres, incluindo educação técnica, habilidades de
            liderança, networking e mentoria. Além disso, ele busca criar uma
            cultura inclusiva e diversificada no ambiente de trabalho
            tecnológico, promovendo a equidade de gênero e combatendo
            preconceitos e estereótipos. O programa oferece acesso a
            oportunidades de educação, treinamento especializado, programas de
            estágio e mentoria personalizada. Essas iniciativas visam não apenas
            aumentar a presença de mulheres no mercado tecnológico, mas também
            garantir que elas tenham as habilidades e o suporte necessário para
            alcançar sucesso e liderança em suas carreiras. Em última análise, o
            Programa de Incentivo e Capacitação para Mulheres no Mercado
            Tecnológico não apenas beneficia as mulheres individualmente, mas
            também enriquece a indústria tecnológica como um todo, trazendo
            perspectivas diversas, inovação e progresso para o setor.
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
