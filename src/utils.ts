export const isProps = (p: any, ...ps: string[]) => optionProps(p, 'is', ps)

export const hasProps = (p: any, ...ps: string[]) => optionProps(p, 'has', ps)

export const optionProps = (p: any, prefix: string, ps: string[]) =>
  ps.map((f) => ({ [`${prefix}-${f}`]: p[f] }))
