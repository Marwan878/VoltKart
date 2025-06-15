import { useWishlistContext } from "./WishlistProduct";

export default function StockStatus() {
  const { product } = useWishlistContext();

  if (!product) return null;

  const productInStock = product.optionCombinations.some(
    (combination) => combination.stock > 0
  );

  return productInStock ? "In stock" : "Out of stock";
}
