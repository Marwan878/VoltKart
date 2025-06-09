export default function getUniqueObjects<T>(
  objects: T[],
  uniqueIdentifier: keyof T
) {
  const uniqueObjectIdentifiers = new Set();

  const uniqueObjects: T[] = [];

  objects.forEach((object) => {
    if (
      object[uniqueIdentifier] &&
      !uniqueObjectIdentifiers.has(object[uniqueIdentifier])
    ) {
      uniqueObjectIdentifiers.add(object[uniqueIdentifier]);
      uniqueObjects.push(object);
    }
  });

  return uniqueObjects;
}
