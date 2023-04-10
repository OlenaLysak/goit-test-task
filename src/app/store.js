import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "../features/Pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
  },
});
