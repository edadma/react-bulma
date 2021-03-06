import React from 'react'

interface BoxProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Box: React.FC<BoxProps> = ({ children, ...other }) => {
  return (
    <div className="box" {...other}>
      {children}
    </div>
  )
}
