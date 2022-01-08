import React, { ReactNode, useState } from 'react'
import { Size, Align } from './types'
import classNames from 'classnames'
import { isProps } from './utils'

interface TabsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: Size
  align?: Align
  boxed?: boolean
  toggle?: boolean
  toggleRounded?: boolean
  fullwidth?: boolean
  panes: { tab: string; pane: ReactNode }[]
}

export const Tabs: React.FC<TabsProps> = ({ panes, size, align, toggleRounded, ...other }) => {
  const [active, setActive] = useState(0)

  return (
    <>
      <div
        className={classNames(
          'tabs',
          isProps(other, 'boxed', 'toggle', 'fullwidth'),
          { 'is-toggle-rounded': toggleRounded },
          { [`is-${size}`]: size },
          { [`is-${align}`]: align }
        )}
        {...other}
      >
        <ul>
          {panes.map(({ tab }, index) => (
            <li className={index === active ? 'is-active' : ''}>
              <a onClick={() => setActive(index)}>{tab}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>{panes[active].pane}</div>
    </>
  )
}
