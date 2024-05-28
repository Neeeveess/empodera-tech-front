import { Plus } from 'lucide-react'
import { useTheme } from 'styled-components'

import { CardFAQContainer } from './style'

export interface CardFAQProps {
  question: string
  children: React.ReactNode
}

export function CardFAQ({ question, children }: CardFAQProps) {
  const theme = useTheme()
  return (
    <CardFAQContainer>
      <summary>
        {question} <Plus color={theme.primary} />
      </summary>
      {children}
    </CardFAQContainer>
  )
}
