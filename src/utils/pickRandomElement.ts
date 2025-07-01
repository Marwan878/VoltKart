export default function pickRandomElement<T>(data: T[]): T {
  if (data.length === 0)
    throw new Error("Attempted to pick a random element from an empty array.");

  const index = Math.floor(Math.random() * data.length);
  return data[index];
}
