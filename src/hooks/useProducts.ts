import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetBrandProductCountsByCategory from "@store/products/act/actGetBrandProductCountsByCategory";
import actGetCategoriesProductsCount from "@store/products/act/actGetCategoriesProductsCount";
import actGetColorProductCountsByCategory from "@store/products/act/actGetColorProductCountsByCategory";
import {
  actGetProductsByCategory,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";
import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { TProduct } from "@types";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams() as { category: string };
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.products) ?? [];
  const wishListItemsId = useAppSelector((state) => state.wishlist.productIds);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") ?? "default";

  useEffect(() => {
    dispatch(actGetProductsByCategory(category));
    dispatch(actGetColorProductCountsByCategory(category));
    dispatch(actGetBrandProductCountsByCategory(category));
    dispatch(actGetCategoriesProductsCount());

    return () => {
      dispatch(cleanUpProductsRecords());
    };
  }, [dispatch, category]);

  const products: TProduct[] = records.map((record) => ({
    ...record,
    optionCombinations: record.optionCombinations.map((combination) => ({
      ...combination,
      price: {
        discounted: Number(combination.price.discounted.toFixed(2)),
        original: Number(combination.price.original.toFixed(2)),
        currency: combination.price.currency,
        discountPercent: Number(combination.price.discountPercent.toFixed(2)),
      },
    })),
    quantity: cartItems.find((item) => item.product_id === record.id)?.quantity,
    isLiked: wishListItemsId.includes(record.id),
    isAuthenticated: !!userAccessToken,
  }));

  const filteredProducts = useMemo(() => {
    const priceRange = (searchParams
      .get("priceRange")
      ?.split("-")
      .map(Number) ?? [0, Infinity]) as [number, number];
    const searchTerm = searchParams.get("searchTerm") ?? "";
    const selectedCategory = searchParams.get("category") ?? "";
    const selectedColorsNames = searchParams.get("colors")?.split(",") ?? [];
    const selectedBrands = searchParams.get("brands")?.split(",") ?? [];
    const selectedMemory = searchParams.get("memory")?.split(",") ?? [];
    const selectedStorage = searchParams.get("storage")?.split(",") ?? [];

    return products.filter((product) => {
      const matchesSearch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.categoryId === selectedCategory;

      const matchesColor =
        selectedColorsNames.length === 0 ||
        product.optionCombinations.some(
          (option) =>
            option.color && selectedColorsNames.includes(option.color.name)
        );

      const matchesPrice =
        product.optionCombinations.some(
          (option) => option.price.discounted >= priceRange[0]
        ) &&
        product.optionCombinations.some(
          (option) => option.price.discounted <= priceRange[1]
        );

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      const matchesMemory =
        selectedMemory.length === 0 ||
        product.optionCombinations.some(
          (option) => option.ram && selectedMemory.includes(option.ram)
        );

      const matchesStorage =
        selectedStorage.length === 0 ||
        product.optionCombinations.some(
          (option) => option.storage && selectedStorage.includes(option.storage)
        );

      return (
        matchesSearch &&
        matchesCategory &&
        matchesColor &&
        matchesPrice &&
        matchesBrand &&
        matchesMemory &&
        matchesStorage
      );
    });
  }, [searchParams, products]);

  console.log(filteredProducts);

  const sortedAndFilteredProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return sorted.sort(
          (a, b) =>
            Math.min(
              ...a.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            ) -
            Math.min(
              ...b.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            )
        );
      case "price-high":
        return sorted.sort(
          (a, b) =>
            Math.min(
              ...b.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            ) -
            Math.min(
              ...a.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            )
        );
      case "name-low":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-high":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  return { loading, error, products, category, sortedAndFilteredProducts };
};

export default useProducts;
