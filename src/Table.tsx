import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { isProps } from './utils'

export interface TableColumn {
  title: ReactNode
  index: string
  key?: string
}

export interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  columns: TableColumn[]
  data: any[]
  bordered?: boolean
  striped?: boolean
  narrow?: boolean
  hoverable?: boolean
  fullwidth?: boolean
}

export const Table: React.FC<TableProps> = ({ columns, data, ...other }) => {
  return (
    <table
      className={classNames(
        'table',
        isProps(other, 'bordered', 'striped', 'narrow', 'hoverable', 'fullwidth')
      )}
      {...other}
    >
      <thead>
        <tr>
          {columns.map(({ title, index, key }, ind) => (
            <th>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, ind) => (
          <tr>
            {columns.map(({ index }) => (
              <td>{row[index]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
