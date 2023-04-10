import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    pageByNum: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { nextPage, prevPage, pageByNum } = paginationSlice.actions;

export const selectPage = (state) => state.pagination.page;

export default paginationSlice.reducer;
