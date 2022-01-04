export function optionProps(p: any, ...ps: string[]) {
  return ps.map((f) => ({ [`is-${f}`]: p[f] }))
}
