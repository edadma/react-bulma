import React from 'react'
import { Size, TextColor } from './types'

interface IconProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  name: string
  size?: Size
  color?: TextColor
}

export const IconFa: React.FC<IconProps> = ({ children, name, size, color, ...other }) => {
  const icon = (
    <span
      className={'icon' + (size ? ` is-size-${size} ` : '') + (color ? `has-text-${color} ` : '')}
      {...other}
    >
      <i className={`fas fa-${name}`} />
    </span>
  )

  return children ? (
    <span className="icon-text">
      {icon}
      <span>{children}</span>
    </span>
  ) : (
    icon
  )
}

// children ? (
//   <span className="icon-text">
//     {icon}
//     <span>{children}</span>
//   </span>
// ) : (
//   icon
// )
