/** Format Keystatic date field values for display in the hero. */
export function formatEventDateLabel(value: unknown): string {
  if (value == null || value === '') return ''
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? '' : value.toLocaleDateString('en-US', { dateStyle: 'long' })
  }
  if (typeof value === 'string') {
    const d = new Date(value)
    return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString('en-US', { dateStyle: 'long' })
  }
  if (typeof value === 'object' && value !== null && 'year' in value) {
    const { year, month, day } = value as { year: number; month: number; day: number }
    return new Date(year, month - 1, day).toLocaleDateString('en-US', { dateStyle: 'long' })
  }
  return String(value)
}
