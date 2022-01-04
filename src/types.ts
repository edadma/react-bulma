export type Color =
  | 'white'
  | 'dark'
  | 'black'
  | 'text'
  | 'ghost'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export type TextColor = 'info' | 'success' | 'warning' | 'danger'

export type Size = 'small' | 'medium' | 'large'

export interface Helpers {
  helpers?: string
}
