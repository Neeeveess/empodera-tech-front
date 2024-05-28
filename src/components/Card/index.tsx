import React from 'react'

import { CardContainer } from './style'

export interface CardProps {
  icon: React.ReactNode
  text: string
}

export function Card({ icon, text }: CardProps) {
  return (
    <CardContainer>
      {icon}
      <p>{text}</p>
    </CardContainer>
  )
}
