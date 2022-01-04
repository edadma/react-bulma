export const isProps = (p: any, ...ps: string[]) => optionProps(p, 'is', ps)

export const optionProps = (p: any, prefix: string, ps: string[]) =>
  ps.map((f) => ({ [`${prefix}-${f}`]: p[f] }))
