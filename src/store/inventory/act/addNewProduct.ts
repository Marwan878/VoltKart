import { SUPABASE_IMAGES_URL } from "@constants";
import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToast } from "@store/toasts/toastsSlice";

import { TProduct } from "@types";
import { NewProductSchema } from "@validations/newProductSchema";

export const addNewProduct = createAsyncThunk(
  "inventory/addNewProduct",
  async (data: NewProductSchema, { rejectWithValue, dispatch }) => {
    dispatch(
      addToast({
        title: "Adding product...",
        message: "Please wait while we add the product to the database",
        type: "primary",
      })
    );

    const maxOrderQuantity = data.maxOrderQuantity
      ? Number(data.maxOrderQuantity)
      : undefined;

    const mainImage = data.mainImage[0];
    const hoverImage = data.hoverImage[0];
    const galleryImages: File[] = Array.from(data.galleryImages);

    const mainImageName = `${crypto.randomUUID()}-${mainImage.name}`;
    const hoverImageName = `${crypto.randomUUID()}-${hoverImage.name}`;
    const galleryImageNames = galleryImages.map(
      (image) => `${crypto.randomUUID()}-${image.name}`
    );

    try {
      const promises = await Promise.all([
        supabase.storage.from("images").upload(mainImageName, mainImage),
        supabase.storage.from("images").upload(hoverImageName, hoverImage),
        ...galleryImages.map((image, index) =>
          supabase.storage
            .from("images")
            .upload(galleryImageNames[index], image)
        ),
      ]);

      const possibleError = promises.find((promise) => promise.error?.message);

      if (possibleError) {
        console.error(possibleError.error?.message, "Failed to upload images");
        return rejectWithValue(possibleError.error?.message);
      }

      const newProduct: TProduct = {
        id: crypto.randomUUID(),
        name: data.name,
        categoryId: data.category,
        images: {
          main: `${SUPABASE_IMAGES_URL}${mainImageName}`,
          hover: `${SUPABASE_IMAGES_URL}${hoverImageName}`,
          gallery: galleryImages.map(
            (_, index) => `${SUPABASE_IMAGES_URL}${galleryImageNames[index]}`
          ),
        },
        releaseDate: new Date().getTime(),
        features: data.features,
        maxOrderQuantity,
        optionCombinations: data.optionCombinations.map((option) => ({
          ...option,
          sku: crypto.randomUUID(),
          price: {
            ...option.price,
            discounted:
              option.price.original -
              (option.price.original * option.price.discountPercent) / 100,
          },
        })),
        description: data.description,
        brand: data.brand,
      };
      const { error } = await supabase.from("products").insert(newProduct);

      if (error) {
        console.error(error, "Failed to add product");
        return rejectWithValue(error.message);
      }

      dispatch(
        addToast({
          title: "Product added successfully",
          message: "The product has been added to the database",
          type: "success",
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        addToast({
          title: "Failed to add product",
          message: "Please try again",
          type: "danger",
        })
      );
    }
  }
);
