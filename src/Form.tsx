import React, { useRef } from 'react'
import classNames from 'classnames'
import { hasProps, isProps } from './utils'
import { Color, Size } from './types'

interface FieldProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  horizontal?: boolean
  grouped?: boolean
}

export const Field: React.FC<FieldProps> = ({ children, ...other }) => {
  return (
    <div className={classNames('field', isProps(other, 'horizontal', 'grouped'))} {...other}>
      {children}
    </div>
  )
}

interface FieldBodyProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FieldBody: React.FC<FieldBodyProps> = ({ children, ...other }) => {
  return (
    <div className={classNames('field-body')} {...other}>
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
      <Label>{children}</Label>
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
  const form = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault()

        const data = new FormData(e.target as HTMLFormElement)

        onSubmit(Object.fromEntries(data.entries()))
        form.current?.reset()
      }}
    >
      {children}
    </form>
  )
}
