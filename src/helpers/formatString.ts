export const formatString = (
  text: string,
  type?: ['ellipsis' | 'capitalize'] | ['capitalize', 'ellipsis'] | 'ellipsis' | 'capitalize',
  limit?: number
) => {
  if(!type) return '';
  const size = text.length;
  const format = type?.toString().replace(',', ' | ');
  if(format?.search('ellipsis') !== -1 && !limit) return 'error';
  switch (format) {
    case 'ellipsis':
      if(limit && size >= limit && type === 'ellipsis') {
        return text.slice(0, limit) + '...'
      }
    case 'capitalize':
      return text.slice(0, 1).toUpperCase() + text.slice(1, size);
    case 'capitalize | ellipsis' || 'ellipsis | capitalize':
      let ellipsis = '';
      if(Number(limit) < size) ellipsis = '...'
      return text.slice(0, 1).toUpperCase() + text.slice(1, limit) + ellipsis;
    default:
      return text;
  }
}