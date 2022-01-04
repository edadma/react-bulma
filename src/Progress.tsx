import React from 'react'
import { Size, Color } from './types'

interface ProgressProps
  extends React.DetailedHTMLProps<
    React.ProgressHTMLAttributes<HTMLProgressElement>,
    HTMLProgressElement
  > {
  value?: number
  size?: Size
  color?: Color
}

export const Progress: React.FC<ProgressProps> = ({ children, value, size, color, ...other }) => (
  <progress
    className={'progress' + (size ? ` is-${size}` : '') + (color ? ` is-${color}` : '')}
    value={value?.toString()}
    {...other}
  >
    {value ? `${value}%` : 'indeterminate'}
  </progress>
)
