import React from 'react'
import { Size, Color } from './types'
import classNames from 'classnames'
import { isProps } from './utils'

interface TagsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: Size
  addons?: boolean
}

export const Tags: React.FC<TagsProps> = ({ children, size, addons, ...other }) => (
  <span
    className={classNames('tags', { [`is-${size}`]: size }, { 'has-addons': addons })}
    {...other}
  >
    {children}
  </span>
)

interface TagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: Size
  color?: Color
  light?: boolean
  rounded?: boolean
}

export const Tag: React.FC<TagProps> = ({ children, size, color, light, rounded, ...other }) => (
  <span
    className={classNames(
      'tag',
      { [`is-${size}`]: size },
      { [`is-${color}`]: color },
      isProps(other, 'light', 'rounded')
    )}
    {...other}
  >
    {children}
  </span>
)
