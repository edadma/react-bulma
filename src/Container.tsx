import React from 'react'

interface ContainerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = ({ children, ...other }) => {
  return (
    <div className="container" {...other}>
      {children}
    </div>
  )
}
