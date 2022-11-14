export const getRandom = <T>(array: T[]) => array[Math.floor(Math.random() * array.length)];

/**
 * @example Transform from ['Apple', 'Banana', 'Orange'] to "Apple, Banana and Orange"
 */
export function toStringList(array: string[]) {
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  return formatter.format(array);
}
