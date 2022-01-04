import React from 'react'
import { Helpers } from './types'
import classNames from 'classnames'
import { optionProps } from './utils'

export type ColumnSize =
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'full'
  | 'four-fifths'
  | 'three-fifths'
  | 'two-fifths'
  | 'one-fifth'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

interface ColumnsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Helpers {
  gapless?: boolean
  multiline?: boolean
  vcentered?: boolean
  centered?: boolean
}

export const Columns: React.FC<ColumnsProps> = ({ children, helpers, ...other }) => {
  return (
    <div
      className={classNames(
        'columns',
        optionProps(other, 'gapless', 'multiline', 'vcentered', 'centered'),
        helpers || ''
      )}
      {...other}
    >
      {children}
    </div>
  )
}

interface ColumnProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: ColumnSize
  offset?: ColumnSize
  narrow?: boolean
}

export const Column: React.FC<ColumnProps> = ({ children, size, offset, narrow, ...other }) => {
  return (
    <div
      className={
        'column' +
        ((size ? ` is-${size}` : '') +
          (offset ? ` is-offset-${offset}` : '') +
          (narrow ? ' is-narrow' : ''))
      }
      {...other}
    >
      {children}
    </div>
  )
}
