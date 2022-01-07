import React from 'react'
import { Color, Size } from './types'
import classNames from 'classnames'
import { isProps } from './utils'

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  bulmaSize?: Size
  color?: Color
  rounded?: boolean
}

export const Input: React.FC<InputProps> = ({ children, bulmaSize, color, ...other }) => {
  return (
    <input
      className={classNames(
        'input',
        isProps(other, 'rounded'),
        { [`is-${bulmaSize}`]: bulmaSize },
        { [`is-${color}`]: color }
      )}
      {...other}
    >
      {children}
    </input>
  )
}
