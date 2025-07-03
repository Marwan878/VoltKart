import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isString, TCartItemForState, TLoading, TProduct } from "@types";
import getCartProducts from "./act/getCartProducts";

interface ICartState {
  products: TCartItemForState[];
  loading: TLoading;
  error: null | string;
  cartItemsIdentifiers: {
    product_id: string;
    sku: string;
    quantity: number;
  }[];
}

const initialState: ICartState = {
  products: [],
  loading: "idle",
  error: null,
  cartItemsIdentifiers: [],
};

interface IAddToLocalCartPayload {
  product: TProduct;
  sku: string;
  quantity: number;
}

interface IDecrementLocalCartItemQuantityPayload {
  cartItem: TCartItemForState;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToLocalCart: (state, action: PayloadAction<IAddToLocalCartPayload>) => {
      const { product, sku, quantity } = action.payload;

      const { maxOrderQuantity, optionCombinations } = product;
      const stock = optionCombinations.find((el) => el.sku === sku)?.stock ?? 0;

      if (quantity <= 0) {
        console.error("Attempted to add 0 or less items to cart.");
        return;
      }

      if (quantity > (maxOrderQuantity ?? Infinity)) {
        console.error("Attempted to add more items than max order quantity.");
        return;
      }

      if (quantity > stock) {
        console.error("Attempted to add more items than stock.");
        return;
      }

      state.cartItemsIdentifiers.push({
        product_id: product.id,
        sku,
        quantity,
      });
    },
    incrementLocalCartItemQuantity: (state, action) => {
      const { productId, sku, quantity, maxOrderQuantity, stock } =
        action.payload;

      const productInCart = state.products.find(
        (product) => product.sku === sku && product.product_id === productId
      );

      if (!productInCart) {
        console.error(
          "Attempted to increment quantity of non-existent cart item."
        );
        return;
      }

      if (productInCart.quantity + quantity > stock) {
        console.error(
          "Attempted to increment quantity of cart item above stock."
        );
        return;
      }

      if (productInCart.quantity + quantity > maxOrderQuantity) {
        console.error(
          "Attempted to increment quantity of cart item above max order quantity."
        );
        return;
      }

      productInCart.quantity += quantity;
    },
    decrementLocalCartItemQuantity: (
      state,
      action: PayloadAction<IDecrementLocalCartItemQuantityPayload>
    ) => {
      const { cartItem, quantity } = action.payload;

      if (cartItem.quantity - quantity < 0) {
        console.error("Attempted to decrement quantity of cart item below 0.");
        return;
      }

      if (cartItem.quantity - quantity === 0) {
        state.products = state.products.filter(
          (product) => product.sku !== cartItem.sku
        );
      } else {
        const product = state.products.find(
          (product) =>
            product.sku === cartItem.sku &&
            product.product_id === cartItem.product.id
        );

        if (!product) {
          console.error(
            "Attempted to decrement quantity of non-existent cart item."
          );
          return;
        }

        product.quantity -= quantity;
      }
    },
    removeLocalCartItem: (state, action) => {
      const { cartItem } = action.payload;

      state.products = state.products.filter(
        (product) => product.sku !== cartItem.sku
      );

      state.cartItemsIdentifiers = state.cartItemsIdentifiers.filter(
        (identifier) =>
          identifier.sku !== cartItem.sku &&
          identifier.product_id !== cartItem.product.id
      );
    },
    setCartItemsIdentifiers: (state, action) => {
      state.cartItemsIdentifiers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.products = action.payload.map((item) => ({
        ...item,
        product_id: item.product.id,
        currency: item.product.optionCombinations[0].price.currency,
        discountedPrice:
          item.product.optionCombinations.find((el) => el.sku === item.sku)
            ?.price.discounted ?? 0,
      }));
    });
    builder.addCase(getCartProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { getCartProducts };

export const {
  addToLocalCart,
  removeLocalCartItem,
  decrementLocalCartItemQuantity,
  incrementLocalCartItemQuantity,
  setCartItemsIdentifiers,
} = cartSlice.actions;

export default cartSlice.reducer;
