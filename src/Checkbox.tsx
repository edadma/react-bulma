import React from 'react'

interface CheckboxProps
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  disabled?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, ...other }) => {
  return (
    <label className="checkbox" {...other}>
      <input type="checkbox" disabled={other.disabled} /> {children}
    </label>
  )
}
