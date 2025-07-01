import Price from "@components/common/Price/Price";
import { useRowProductContext } from "./RowProduct";

export default function ProductPrice() {
  const { product } = useRowProductContext();

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
