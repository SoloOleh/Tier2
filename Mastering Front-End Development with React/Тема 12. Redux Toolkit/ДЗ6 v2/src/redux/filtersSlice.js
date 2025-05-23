// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = filtersSlice.actions;
// export const selectNameFilter = (state) => state.filters.name;
// export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання рядка фільтра
export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
