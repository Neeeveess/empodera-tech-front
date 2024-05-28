import React from 'react'

import {
  ButtonPrimary,
  ButtonPrimaryInverted,
  ButtonSecondary,
  ButtonTertiary,
} from './style'

export interface ButtonProps {
  text: string | React.ReactNode
  variation: 'primary' | 'primary-inverted' | 'secondary' | 'tertiary'
}

export function Button({ text, variation }: ButtonProps) {
  if (variation === 'secondary') {
    return <ButtonSecondary>{text}</ButtonSecondary>
  }

  if (variation === 'tertiary') {
    return <ButtonTertiary>{text}</ButtonTertiary>
  }

  if (variation === 'primary-inverted') {
    return <ButtonPrimaryInverted>{text}</ButtonPrimaryInverted>
  }

  return <ButtonPrimary>{text}</ButtonPrimary>
}
