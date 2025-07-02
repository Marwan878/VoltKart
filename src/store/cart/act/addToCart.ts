import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { addToLocalCart } from "../cartSlice";
import incrementCartItemQuantity from "./incrementCartItemQuantity";
import { addToast } from "@store/toasts/toastsSlice";
import addSIfPlural from "@utils/addSIfPlural";

import { TProduct } from "@types";

type AddToCartProps = {
  product: TProduct;
  sku: string;
  quantity: number;
  stock: number;
};

const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { product, sku, quantity, stock }: Readonly<AddToCartProps>,
    thunkAPI
  ) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;

    try {
      if (quantity <= 0) throw new Error("Quantity must be greater than 0.");

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("You must be logged in to add to cart.");

      const { cart } = getState() as RootState;
      const { maxOrderQuantity, id: productId } = product;

      const thisVariantInCart = cart.cartItemsIdentifiers.find(
        (item) => item.product_id === productId && item.sku === sku
      );

      if ((thisVariantInCart?.quantity ?? 0) + quantity > stock)
        throw new Error("Quantity must be less than stock.");
      if (
        (thisVariantInCart?.quantity ?? 0) + quantity >
        (maxOrderQuantity ?? Infinity)
      )
        throw new Error("Quantity must be less than max order quantity.");

      if (thisVariantInCart) {
        dispatch(
          incrementCartItemQuantity({
            productId,
            sku,
            quantity,
            maxOrderQuantity: maxOrderQuantity ?? Infinity,
            stock,
          })
        );
      } else {
        const { error } = await supabase.from("cart_items").insert([
          {
            user_id: user.id,
            product_id: productId,
            sku,
            quantity,
          },
        ]);

        if (error) throw new Error(error.message);
        dispatch(
          addToLocalCart({
            product,
            sku,
            quantity,
          })
        );
      }

      dispatch(
        addToast({
          message: `Added ${addSIfPlural(quantity, "item")} to your cart`,
          type: "success",
          title: "Success",
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        addToast({
          message: (error as Error).message,
          type: "danger",
          title: "Error",
        })
      );
      return rejectWithValue((error as Error).message);
    }
  }
);

export default addToCart;
