import React from 'react'
import { TitleSize } from './types'

interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: TitleSize
  spaced?: boolean
}

export const Title: React.FC<TitleProps> = ({ children, size, spaced, ...other }) => (
  <p className={'title' + (size ? ` is-${size}` : '') + (spaced ? ' is-spaced' : '')} {...other}>
    {children}
  </p>
)

interface SubtitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: TitleSize
}

export const Subtitle: React.FC<SubtitleProps> = ({ children, size, ...other }) => (
  <p className={'subtitle' + (size ? ` is-${size}` : '')} {...other}>
    {children}
  </p>
)
