import Price from "@components/eCommerce/common/price/Price";
import { useWishlistContext } from "./WishlistProduct";

export default function ProductPrice() {
  const { product } = useWishlistContext();

  if (!product) return null;

  const lowestPrice = Math.min(
    ...product.optionCombinations.map(
      (combination) => combination.price.discounted
    )
  );

  const cheapestOption = product.optionCombinations.find(
    (combination) => combination.price.discounted === lowestPrice
  );

  if (!cheapestOption) return null;

  return <Price price={cheapestOption.price} />;
}
