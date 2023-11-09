export const arrayOfStrings = [
  'first string',
  'second string',
  'third string',
  'fourth string',
  'fifth string',
];

function splitArrayInNEqualChunks<T>(array: T[], n: number): T[] {
  const result: T[] = [];
  const length = array.length;
  const chunkSize = Math.ceil(length / n);
  for (let i = 0; i < length; i += chunkSize) {
    result.push(...array.slice(i, i + chunkSize));
  }
  return result;
}