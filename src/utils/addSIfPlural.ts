export default function addSIfPlural(count: number, word: string) {
  return count === 1 ? word : `${word}s`;
}
