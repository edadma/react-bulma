import React from 'react'

interface BlockProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Block: React.FC<BlockProps> = ({ children, ...other }) => {
  return (
    <div className="block" {...other}>
      {children}
    </div>
  )
}
