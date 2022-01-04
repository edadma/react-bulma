import React from 'react'
import { Size, Color } from './types'

interface TagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: Size
  color?: Color
  light?: boolean
  rounded?: boolean
}

export const Tag: React.FC<TagProps> = ({ children, size, color, light, rounded, ...other }) => (
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

interface TagsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: Size
  addons?: boolean
}

export const Tags: React.FC<TagsProps> = ({ children, size, addons, ...other }) => (
  <span className={'tags' + (size ? ` is-${size}` : '') + (addons ? ' has-addons' : '')} {...other}>
    {children}
  </span>
)
