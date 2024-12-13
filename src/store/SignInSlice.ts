import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signInUser = createAsyncThunk(
  "signIn/signInUser",
  async (userLoginData, { rejectWithValue }) => {
    try {
      const responce = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          body: JSON.stringify(userLoginData),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (!responce.ok) {
        const errorData = await responce.json();
        if (responce.status === 401) {
          return rejectWithValue(errorData.detail);
        }
        throw new Error("error is here");
      }
      const data = await responce.json();
      localStorage.setItem("token", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
const SignInSlice = createSlice({
  name: "signIn",
  initialState: {
    auth: false,
    isLoading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (state) => {
      (state.auth = true), (state.isLoading = false);
    });
    builder.addCase(signInUser.pending, (state) => {
      (state.error = null), (state.isLoading = true);
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      (state.error = (action.payload as string) || "error!!!!!!"),
        (state.isLoading = false);
    });
  },
});
export default SignInSlice.reducer;
