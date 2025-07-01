import { TUniquePrimitive } from "@types";

function getUniqueElements<T extends TUniquePrimitive>(array: T[]): T[] {
  return [...new Set(array)];
}

export default getUniqueElements;
