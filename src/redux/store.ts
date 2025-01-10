import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './slice/NewsSlice'

export const store = configureStore({
  reducer: newsReducer,
})