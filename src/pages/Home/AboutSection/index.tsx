import { BadgeDollarSign, FileCheck, Users, Video } from 'lucide-react'
import { useTheme } from 'styled-components'

import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { scrollToSection } from '../../../ultils/scrolToSection'
import {
  AboutContainer,
  AboutContent,
  AboutGroupCards,
  AboutText,
} from './style'

export function AboutSection() {
  const theme = useTheme()

  return (
    <AboutContainer id="aboutSection">
      <AboutContent>
        <AboutGroupCards>
          <Card
            icon={<BadgeDollarSign size={40} color={theme.primary} />}
            text="100% GRATUITO"
          />
          <Card
            icon={<Video size={40} color={theme.primary} />}
            text="TODO CURSO EM FORMATO EAD"
          />
          <Card
            icon={<FileCheck size={40} color={theme.primary} />}
            text="CERTIFICADO APÓS A FINALIZAÇÃO DO CURSO"
          />
          <Card
            icon={<Users size={40} color={theme.primary} />}
            text="NETWORKING GARANTIDO"
          />
        </AboutGroupCards>
        <AboutText>
          <h2>Como funciona o curso?</h2>
          <p>
            Atualmente, oferecemos um curso voltado para desenvolvimento Web
            Fullstack. Nosso objetivo é expandir a oferta de cursos no futuro
            para cobrir diversas áreas da tecnologia.
          </p>
          <p>
            Para participar, você deve se inscrever e passar pelo nosso processo
            seletivo. A seleção consiste em uma análise detalhada da sua
            inscrição, garantindo que os candidatos selecionados tenham o perfil
            adequado para aproveitar ao máximo o curso.
          </p>
          <p>
            Após a inscrição, você receberá um retorno em breve sobre o
            resultado da seleção. Convidamos todas as mulheres interessadas a se
            inscreverem e darem o primeiro passo rumo a uma carreira de sucesso
            no mercado tecnológico.
          </p>
          <Button
            onClick={() => scrollToSection('formSection')}
            variation="primary-inverted"
            text="Inscrever-se"
          />
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}
