import { type TProduct } from "@types";

export default function isProductNew(product: TProduct) {
  const now = new Date().getTime();
  const releaseDate = new Date(product.releaseDate).getTime();
  const timeSinceRelease = now - releaseDate;
  const daysSinceRelease = Math.floor(timeSinceRelease / (1000 * 60 * 60 * 24));
  return daysSinceRelease < 30;
}
