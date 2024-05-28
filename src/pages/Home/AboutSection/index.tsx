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
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis. Rhoncus morbi et augue nec, in id
            ullamcorper at sit.
          </p>
          <p>
            Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
            nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
            sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi.
            Mollis leo eleifend ultricies purus iaculis.
          </p>
          <ul>
            <li>Fermentum scelerisque sit consectetur hac mi.</li>
            <li>Fermentum scelerisque sit consectetur hac mi.</li>
            <li>Fermentum scelerisque sit consectetur hac mi.</li>
            <li>Fermentum scelerisque sit consectetur hac mi.</li>
            <li>Fermentum scelerisque sit consectetur hac mi.</li>
          </ul>
          <Button variation="primary-inverted" text="Inscrever-se" />
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}
