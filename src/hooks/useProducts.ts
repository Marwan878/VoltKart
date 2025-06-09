import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCategory,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";
import { TProduct } from "@types";
import actGetColorProductCountsByCategory from "@store/products/act/actGetColorProductCountsByCategory";
import actGetBrandProductCountsByCategory from "@store/products/act/actGetBrandProductCountsByCategory";
import actGetCategoriesProductsCount from "@store/products/act/actGetCategoriesProductsCount";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams() as { category: string };
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.products) ?? [];
  const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);
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
    quantity: cartItems.find((item) => item.id === record.id)?.quantity,
    isLiked: wishListItemsId.includes(record.id),
    isAuthenticated: !!userAccessToken,
  }));

  const filteredProducts = useMemo(() => {
    const priceRange = (searchParams
      .get("priceRange")
      ?.split("-")
      .map(Number) ?? [0, 500]) as [number, number];
    const searchTerm = searchParams.get("searchTerm") ?? "";
    const selectedCategory = searchParams.get("category") ?? "";
    const selectedColorName = searchParams.get("color") ?? "";

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.categories.includes(selectedCategory);

      const matchesColor =
        !selectedColorName ||
        product.optionCombinations.some(
          (option) => option.color?.name === selectedColorName
        );

      const matchesPrice =
        product.optionCombinations.some(
          (option) => option.price.discounted >= priceRange[0]
        ) &&
        product.optionCombinations.some(
          (option) => option.price.discounted <= priceRange[1]
        );

      return matchesSearch && matchesCategory && matchesColor && matchesPrice;
    });
  }, [searchParams, products]);

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
