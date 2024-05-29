import React, { ButtonHTMLAttributes } from 'react'

import {
  ButtonPrimary,
  ButtonPrimaryInverted,
  ButtonSecondary,
  ButtonTertiary,
} from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode
  variation: 'primary' | 'primary-inverted' | 'secondary' | 'tertiary'
}

export function Button({ text, variation, ...props }: ButtonProps) {
  if (variation === 'secondary') {
    return <ButtonSecondary {...props}>{text}</ButtonSecondary>
  }

  if (variation === 'tertiary') {
    return <ButtonTertiary {...props}>{text}</ButtonTertiary>
  }

  if (variation === 'primary-inverted') {
    return <ButtonPrimaryInverted {...props}>{text}</ButtonPrimaryInverted>
  }

  return <ButtonPrimary {...props}>{text}</ButtonPrimary>
}
