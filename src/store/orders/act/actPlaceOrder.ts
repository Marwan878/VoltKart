import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState() as RootState;

    const orderItems = cart.products.map((el) => ({
      id: el.id,
      name: el.name,
      imageUrls: el.imageUrls,
      price: el.price,
      quantity: cart.items[el.id],
    }));

    try {
      // TODO: Implement order placement
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actPlaceOrder;
