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

export type Size = 'small' | 'normal' | 'medium' | 'large'

export type TitleSize = '1' | '2' | '3' | '4' | '5' | '6'

export interface Helpers {
  helpers?: string
}
