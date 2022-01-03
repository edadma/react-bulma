import React from 'react'
import { Colors } from './types'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean
  light?: boolean
  outlined?: boolean
  rounded?: boolean
  loading?: boolean
  color?: Colors
  size?: 'small' | 'medium' | 'large'
  fullwidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  color,
  light,
  outlined,
  rounded,
  loading,
  size,
  fullwidth,
  ...other
}) => {
  return (
    <button
      className={
        'button' +
        (primary ? ' is-primary' : '') +
        (color ? ` is-${color}` : '') +
        (light ? ' is-light' : '') +
        (outlined ? ' is-outlined' : '') +
        (rounded ? ' is-rounded' : '') +
        (loading ? ' is-loading' : '') +
        (size ? ` is-${size}` : '') +
        (fullwidth ? ' is-fullwidth' : '')
      }
      {...other}
    >
      {children}
    </button>
  )
}

interface ButtonsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Buttons: React.FC<ButtonsProps> = ({ children, ...other }) => {
  return (
    <div className="buttons" {...other}>
      {children}
    </div>
  )
}
