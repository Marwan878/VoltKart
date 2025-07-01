import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TUser } from "@types";

type TFormData = {
  email: string;
  password: string;
};

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const { data: signInData, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

      if (signInError) {
        return rejectWithValue(signInError);
      }

      const response: {
        user: TUser;
        accessToken: string;
      } = {
        user: {
          id: signInData.user.id,
          email: signInData.user.email ?? "",
          firstName: signInData.user.user_metadata.firstName,
          lastName: signInData.user.user_metadata.lastName,
          role: (signInData.user.user_metadata.role ?? "user") as TUser["role"],
        },
        accessToken: signInData.session.access_token,
      };

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actAuthLogin;
