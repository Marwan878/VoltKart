import { getUniqueObjects } from "@utils/index";

import { TColor, TProduct } from "@types";

const useProductCard = (product: TProduct) => {
  const { optionCombinations } = product;

  const colors = optionCombinations
    .flatMap((option) => option.color)
    .filter(Boolean) as TColor[];
  const colorOptions = getUniqueObjects(colors, "name");

  const storageOptions = Array.from(
    new Set(optionCombinations.map((option) => option.storage).filter(Boolean))
  ) as string[];

  const ramOptions = Array.from(
    new Set(optionCombinations.map((option) => option.ram).filter(Boolean))
  ) as string[];

  return {
    colorOptions,
    storageOptions,
    ramOptions,
  };
};

export default useProductCard;
