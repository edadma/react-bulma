import React, { ReactNode } from 'react'
import { Color, Size } from './types'
import classNames from 'classnames'
import { isProps } from './utils'

interface MessageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  primary?: boolean
  color?: Color
  light?: boolean
  size?: Size
  header?: ReactNode
}

export const Message: React.FC<MessageProps> = ({ children, color, size, header, ...other }) => {
  return (
    <article
      className={classNames(
        'message',
        isProps(other, 'primary', 'light'),
        {
          [`is-${color}`]: color,
        },
        {
          [`is-${size}`]: size,
        }
      )}
      {...other}
    >
      {header ? <div className="message-header">{header}</div> : <></>}
      <div className="message-body">{children}</div>
    </article>
  )
}
