import React from 'react'
import './bulma.min.css'

interface ContentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Content: React.FC<ContentProps> = ({ children, ...other }) => {
  return (
    <div className="content" {...other}>
      {children}
    </div>
  )
}
