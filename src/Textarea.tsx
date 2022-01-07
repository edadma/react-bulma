import React, { KeyboardEventHandler, useRef } from 'react'
import { Color, Size } from './types'
import classNames from 'classnames'
import { isProps } from './utils'

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  size?: Size
  color?: Color
  tabs?: boolean
}

export const Textarea: React.FC<TextareaProps> = ({ children, size, color, tabs, ...other }) => {
  const ref = useRef(null)

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (tabs && e.key === 'Tab') {
      e.preventDefault()

      const target = e.target as HTMLTextAreaElement
      const cursorPosition = target.selectionStart
      const textBeforeCursorPosition = target.value.substring(0, cursorPosition)

      let col = 0
      let i = cursorPosition - 1

      while (i > 0 && target.value.charAt(i) !== '\n') {
        i--
        col++
      }

      const spaces = 2 - (col % 2)
      const textAfterCursorPosition = target.value.substring(cursorPosition, target.value.length)

      target.value = textBeforeCursorPosition + '\u00a0'.repeat(spaces) + textAfterCursorPosition
    }
  }

  return (
    <textarea
      ref={ref}
      className={classNames('textarea', { [`is-${size}`]: size }, { [`is-${color}`]: color })}
      onKeyDown={handleKeyDown}
      {...other}
    >
      {children}
    </textarea>
  )
}
