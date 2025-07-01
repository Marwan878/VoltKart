import {
  ProductActions,
  ProductFeatures,
  ProductInfo,
  ProductMeta,
} from "@components/Product";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductOptions from "./ProductOptions/ProductOptions";

import { TProduct } from "@types";

import styles from "../styles.module.css";

export default function ProductDetails({
  product,
}: {
  readonly product: TProduct;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedStorage = searchParams.get("storage") ?? "";
  const selectedMemory = searchParams.get("memory") ?? "";
  const selectedColorName = searchParams.get("colors")?.split(",").at(0) ?? "";

  useEffect(() => {
    if (product.optionCombinations.length > 0) {
      const firstCombination = product.optionCombinations[0];

      const newSearchParams = new URLSearchParams(searchParams);

      if (firstCombination.color && !selectedColorName) {
        newSearchParams.set("colors", firstCombination.color.name);
      }

      if (firstCombination.storage && !selectedStorage) {
        newSearchParams.set("storage", firstCombination.storage);
      }

      if (firstCombination.ram && !selectedMemory) {
        newSearchParams.set("memory", firstCombination.ram);
      }

      setSearchParams(newSearchParams);
    }
  }, [
    product.optionCombinations,
    searchParams,
    selectedColorName,
    selectedStorage,
    selectedMemory,
    setSearchParams,
  ]);

  const currentCombination = product.optionCombinations.find(
    (combination) =>
      (!selectedStorage || combination.storage === selectedStorage) &&
      (!selectedMemory || combination.ram === selectedMemory) &&
      (!selectedColorName || combination.color?.name === selectedColorName)
  );

  return (
    <div className={styles.productDetails}>
      <ProductInfo product={product} currentCombination={currentCombination} />

      <ProductFeatures product={product} />

      <ProductOptions product={product} />

      <ProductActions product={product} sku={currentCombination?.sku} />

      <ProductMeta product={product} currentCombination={currentCombination} />
    </div>
  );
}
