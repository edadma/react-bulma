import React from 'react'
import { Size } from './types'
import classNames from 'classnames'

interface BreadcrumbsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  size?: Size
  align?: 'centered' | 'right'
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds'
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  size,
  align,
  separator,
  ...other
}) => (
  <nav
    className={classNames(
      'breadcrumb',
      { [`is-${size}`]: size },
      { [`is-${align}`]: align },
      { [`has-${separator}-separator`]: separator }
    )}
    {...other}
  >
    <ul>{children}</ul>
  </nav>
)

interface BreadcrumbProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  active?: boolean
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, active, ...other }) => (
  <li className={active ? 'is-active' : ''}>
    <a {...other}>{children}</a>
  </li>
)
