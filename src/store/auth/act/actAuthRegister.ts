import { supabase } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: "user",
          },
        },
      });

      if (error) {
        return rejectWithValue(error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actAuthRegister;
