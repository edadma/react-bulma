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

interface FormProps {
  onSubmit: (data: any) => void
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  let ref: HTMLFormElement | null = null

  return (
    <form
      ref={(f) => (ref = f)}
      onSubmit={(e) => {
        e.preventDefault()

        const data = new FormData(e.target as HTMLFormElement)

        onSubmit(Object.fromEntries(data.entries()))
        ref?.reset()
      }}
    >
      {children}
    </form>
  )
}

interface SubmitProps {
  text?: string
  size?: Size
  color?: Color
  rounded?: boolean
}

export const Submit: React.FC<SubmitProps> = ({ children, text, size, color, ...other }) => {
  return (
    <input
      className={classNames(
        'button',
        isProps(other, 'rounded'),
        { [`is-${size}`]: size },
        { [`is-${color}`]: color }
      )}
      type="submit"
      value={text || 'Submit'}
    />
  )
}
