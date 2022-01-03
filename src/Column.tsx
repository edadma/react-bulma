import React from 'react'

interface ColumnsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Columns: React.FC<ColumnsProps> = ({ children, ...other }) => {
  return (
    <div className="columns" {...other}>
      {children}
    </div>
  )
}

interface ColumnProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Column: React.FC<ColumnProps> = ({ children, ...other }) => {
  return (
    <div className="column" {...other}>
      {children}
    </div>
  )
}
