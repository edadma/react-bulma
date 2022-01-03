import React from 'react'

interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: number
  weight?: string
  family?: string
}

export const Text: React.FC<TextProps> = ({ children, size, weight, family, ...other }) => (
  <span
    className={
      (size ? `is-size-${size} ` : '') +
      (weight ? `has-text-weight-${weight} ` : '') +
      (family ? `is-family-${family} ` : '')
    }
    {...other}
  >
    {children}
  </span>
)
