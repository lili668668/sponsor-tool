export function formatCash (value: number | undefined): string {
  if (value === undefined) {
    return '0'
  }
  return new Intl.NumberFormat('en').format(value)
}