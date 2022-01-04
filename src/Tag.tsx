import React from 'react'
import { Size, Color } from './types'

interface TagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  name: string
  size?: Size
  color?: Color
  light?: boolean
  rounded?: boolean
}

export const Tag: React.FC<TagProps> = ({
  children,
  name,
  size,
  color,
  light,
  rounded,
  ...other
}) => (
  <span
    className={
      'tag' +
      (size ? ` is-${size}` : '') +
      (color ? ` is-${color}` : '') +
      (light ? ' is-light' : '') +
      (rounded ? ' is-rounded' : '')
    }
    {...other}
  >
    {children}
  </span>
)
