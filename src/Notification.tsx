import React from 'react'
import { Color } from './types'
import classNames from 'classnames'
import { isProps } from './utils'

interface NotificationProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  primary?: boolean
  color?: Color
  light?: boolean
}

export const Notification: React.FC<NotificationProps> = ({ children, color, ...other }) => {
  return (
    <div
      className={classNames('notification', isProps(other, 'primary', 'light'), {
        [`is-${color}`]: color,
      })}
      {...other}
    >
      {children}
    </div>
  )
}
