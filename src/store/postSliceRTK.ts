import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&limit=9"
      );
      if (!responce.ok) {
        throw new Error("error");
      }
      const data = await responce.json();
      return data.results;
    } catch (error: any) {
      return rejectWithValue(error.message || "error");
    }
  }
);
const postSliceRTK = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null as string | null,
    selectedPost: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchPosts.fulfilled, (state, action) => {
        console.log("action in fetchPosts fullfiled", action);
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(FetchPosts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload as string);
      });
  },
});

export default postSliceRTK.reducer;
