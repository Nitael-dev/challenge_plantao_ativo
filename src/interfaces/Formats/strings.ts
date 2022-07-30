export interface FormatString {
  text: string,
  format?: ['ellipsis' | 'capitalize'] | 'ellipsis' | 'capitalize',
  limit?: number
}