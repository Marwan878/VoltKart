import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { TColor, TProduct } from "@types";
import { getUniqueObjects } from "@utils/index";
import { useEffect, useState } from "react";

const useProductCard = (product: TProduct) => {
  const {
    id,
    name,
    optionCombinations,
    max = Infinity,
    quantity,
    isLiked,
    isAuthenticated,
  } = product;

  const [showModal, setShowModal] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCombination, setCurrentCombination] = useState<
    TProduct["optionCombinations"][number] | undefined
  >(optionCombinations.at(0));
  const dispatch = useAppDispatch();

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0;

  const colors = optionCombinations
    .flatMap((option) => option.color)
    .filter(Boolean) as TColor[];
  const uniqueColors = getUniqueObjects(colors, "name");

  const uniqueMemoryOptionsForCurrentColor = Array.from(
    new Set(
      optionCombinations
        .filter(
          (combination) =>
            combination.color?.name === currentCombination?.color?.name
        )
        .map((combination) => combination.memory)
    )
  ).filter(Boolean) as string[];

  const uniqueStorageOptionsForCurrentColor = Array.from(
    new Set(
      optionCombinations
        .filter(
          (combination) =>
            combination.color?.name === currentCombination?.color?.name
        )
        .map((combination) => combination.storage)
    )
  ).filter(Boolean) as string[];

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart({ product, currentCombination }));

    dispatch(
      addToast({
        title: "Add to Cart",
        type: "success",
        message: `${name} added to cart`,
      })
    );

    // reached to maximum show warning after success toast
    currentRemainingQuantity - 1 === 0 &&
      dispatch(
        addToast({
          type: "warning",
          message: `you reached to max from ${name}`,
          delayAnimation: true,
        })
      );

    setIsBtnDisabled(true);
  };

  const likeToggleHandler = () => {
    if (isAuthenticated) {
      if (!isLoading) {
        setIsLoading(true);
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => {
            setIsLoading(false);
            !isLiked &&
              dispatch(
                addToast({
                  type: "success",
                  message: `${name} added to wishlist`,
                })
              );
          })
          .catch(() => {
            setIsLoading(false);
            dispatch(
              addToast({
                title: "Failed Operation",
                type: "danger",
                message: `Failed to add wishlist, error from server`,
              })
            );
          });
      }
    } else {
      setShowModal(true);
    }
  };

  const handleColorSelect = (colorName: string) => {
    if (colorName === currentCombination?.color?.name) {
      return;
    }

    const newCombination = optionCombinations.find(
      (combination) => combination.color?.name === colorName
    );

    if (newCombination) {
      setCurrentCombination(newCombination);
    }
  };

  const handleMemorySelect = (memory: string) => {
    if (memory === currentCombination?.memory) {
      return;
    }

    const newCombination = optionCombinations.find(
      (combination) =>
        combination.color?.name === currentCombination?.color?.name &&
        combination.memory === memory
    );

    if (newCombination) {
      setCurrentCombination(newCombination);
    }
  };

  const handleStorageSelect = (storage: string) => {
    if (storage === currentCombination?.storage) {
      return;
    }

    const newCombination = optionCombinations.find(
      (combination) => combination.storage === storage
    );

    if (newCombination) {
      setCurrentCombination(newCombination);
    }
  };

  return {
    showModal,
    setShowModal,
    uniqueColors,
    currentCombination,
    colorSelectHandler: handleColorSelect,
    memorySelectHandler: handleMemorySelect,
    storageSelectHandler: handleStorageSelect,
    addToCartHandler,
    likeToggleHandler,
    isBtnDisabled,
    quantityReachedToMax,
    isLoading,
    uniqueStorageOptionsForCurrentColor,
    uniqueMemoryOptionsForCurrentColor,
  };
};

export default useProductCard;
