import { Clock } from 'lucide-react'
import { useTheme } from 'styled-components'

import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import {
  AboutContainer,
  AboutContent,
  AboutGroupCards,
  AboutText,
} from './style'

export function AboutSection() {
  const theme = useTheme()

  return (
    <AboutContainer>
      <AboutContent>
        <AboutGroupCards>
          <Card
            icon={<Clock size={40} color={theme.primary} />}
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <Card
            icon={<Clock size={40} color={theme.primary} />}
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <Card
            icon={<Clock size={40} color={theme.primary} />}
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          />
          <Card
            icon={<Clock size={40} color={theme.primary} />}
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
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
          <Button variation="primary-inverted" text="Inscrever-se" />
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}
