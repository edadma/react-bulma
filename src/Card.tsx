import React from 'react'

interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, ...other }) => {
  return (
    <div className="card" {...other}>
      {children}
    </div>
  )
}

interface CardContentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ children, ...other }) => {
  return (
    <div className="card-content" {...other}>
      {children}
    </div>
  )
}
