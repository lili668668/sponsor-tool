export function formatCash (value: number): string {
  return new Intl.NumberFormat('en').format(value)
}