import { useState, useEffect } from "react";
import { TProduct, TProductOptionCombination } from "@types";

export const useProductCombination = (product: TProduct) => {
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [currentCombination, setCurrentCombination] =
    useState<TProductOptionCombination>(product.optionCombinations[0]);

  // Initialize with first combination when product loads
  useEffect(() => {
    if (product && product.optionCombinations.length > 0) {
      const firstCombination = product.optionCombinations[0];
      setSelectedStorage(firstCombination.storage || "");
      setCurrentCombination(firstCombination);
    }
  }, [product]);

  // Update current combination when storage changes
  useEffect(() => {
    if (product && selectedStorage) {
      const matchingCombination = product.optionCombinations.find(
        (combination) => combination.storage === selectedStorage
      );
      if (matchingCombination) {
        setCurrentCombination(matchingCombination);
      }
    }
  }, [product, selectedStorage]);

  const handleStorageChange = (storage: string) => {
    setSelectedStorage(storage);
  };

  return {
    selectedStorage,
    currentCombination,
    handleStorageChange,
  };
};
