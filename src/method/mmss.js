export function mmss(second) {
  return (
    new Date(second * 1000).toISOString().substring(14, 19)
  )
}
