import React from 'react'
import { Color, Size } from './types'

interface DeleteButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Size
}

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
  inverted?: boolean
  color?: Color
  size?: Size
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
  inverted,
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
        (inverted ? ' is-inverted' : '') +
        (size ? ` is-${size}` : '') +
        (fullwidth ? ' is-fullwidth' : '')
      }
      {...other}
    >
      {children}
    </button>
  )
}

export const Delete: React.FC<DeleteButtonProps> = ({ size, ...other }) => {
  return <button className={'delete' + (size ? ` is-${size}` : '')} {...other} />
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
