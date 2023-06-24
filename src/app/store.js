import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "../redux/slice/article";


export const store = configureStore({
  reducer: {
    article: articleSlice
  },
})