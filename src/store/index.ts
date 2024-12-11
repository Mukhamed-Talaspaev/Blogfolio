import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import counterSlice from "./counterSlice";
import postSlice from "./postSlice";
import UserSlice from "./userSlice";
import { thunk } from "redux-thunk";
import { logger } from "./Middlewares/logger";
import { fetchPostsMiddlware } from "./Middlewares/fetchPostsMiddlware";
import postSliceRTK from "./postSliceRTK";
import { incrementMiddleWare } from "./Middlewares/incrementMiddleware";
export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    counter: counterSlice,
    // posts: postSlice,
    posts: postSliceRTK,
    user: UserSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(thunk);
  },
});
