import React, { ReactNode } from 'react'

export interface TableColumn {
  title: ReactNode
  index: string
  key?: string
}

export interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  columns: TableColumn[]
  data: any[]
}

export const Table: React.FC<TableProps> = ({ columns, data, ...other }) => {
  return (
    <table className="table" {...other}>
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
