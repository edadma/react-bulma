import React from 'react'
import classNames from 'classnames'
import { hasProps, isProps } from './utils'
import { Color, Size } from './types'

interface FieldProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  horizontal?: boolean
}

export const Field: React.FC<FieldProps> = ({ children, ...other }) => {
  return (
    <div className={classNames('field', isProps(other, 'horizontal'))} {...other}>
      {children}
    </div>
  )
}

interface FieldLabelProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: Size
}

export const FieldLabel: React.FC<FieldLabelProps> = ({ children, size, ...other }) => {
  return (
    <div className={classNames('field-label', { [`is-${size}`]: size })} {...other}>
      {children}
    </div>
  )
}

interface ControlProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  iconsLeft?: boolean
  iconsRight?: boolean
}

export const Control: React.FC<ControlProps> = ({ children, ...other }) => {
  return (
    <div
      className={classNames(
        'control',
        hasProps(other, 'iconsLeft', 'iconsRight'),
        isProps(other, 'expanded')
      )}
      {...other}
    >
      {children}
    </div>
  )
}

interface LabelProps
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, ...other }) => {
  return (
    <label className="label" {...other}>
      {children}
    </label>
  )
}

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputSize?: Size
  color?: Color
  rounded?: boolean
}

export const Input: React.FC<InputProps> = ({ children, inputSize, color, ...other }) => {
  return (
    <input
      className={classNames(
        'input',
        isProps(other, 'rounded'),
        { [`is-${inputSize}`]: inputSize },
        { [`is-${color}`]: color }
      )}
      {...other}
    >
      {children}
    </input>
  )
}
