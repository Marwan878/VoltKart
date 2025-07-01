import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import { TLoading, isString, TUser } from "@types";
import { actAuthLogout } from "./act/actAuthLogout";

interface IAuthState {
  user: TUser | null;
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.session?.access_token ?? null;
      state.user = {
        id: action.payload.user?.id ?? "",
        email: action.payload.user?.email ?? "",
        firstName: action.payload.user?.user_metadata.firstName ?? "",
        lastName: action.payload.user?.user_metadata.lastName ?? "",
        role: (action.payload.user?.role ?? "user") as TUser["role"],
      };
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // logout
    builder.addCase(actAuthLogout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogout.fulfilled, (state) => {
      state.loading = "succeeded";
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(actAuthLogout.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actAuthRegister, actAuthLogin, actAuthLogout };
export const { resetUI } = authSlice.actions;
export default authSlice.reducer;
