import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import counterSlice from "./counterSlice";
export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    counter: counterSlice,
  },
});
