import React from 'react'

interface ImageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string
  alt?: string
  dim:
    | '16x16'
    | '24x24'
    | '32x32'
    | '48x48'
    | '64x64'
    | '96x96'
    | '128x128'
    | 'square'
    | '1by1'
    | '5by4'
    | '4by3'
    | '3by2'
    | '5by3'
    | '16by9'
    | '2by1'
    | '3by1'
    | '4by5'
    | '3by4'
    | '2by3'
    | '3by5'
    | '9by16'
    | '1by2'
    | '1by3'
  fullwidth?: boolean
}

export const Image: React.FC<ImageProps> = ({ children, src, alt, dim, fullwidth, ...other }) => (
  <figure className={`image is-${dim} ` + (fullwidth ? 'is-fullwidth' : '')} {...other}>
    <img src={src} alt={alt || 'image'} />
  </figure>
)
