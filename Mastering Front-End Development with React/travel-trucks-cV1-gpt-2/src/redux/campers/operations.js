// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getCampers, getCamperById } from "../../services/api";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchAll",
//   async ({ page = 1, filters = {}, append = false }, thunkAPI) => {
//     try {
//       const data = await getCampers({ page, ...filters });
//       return { ...data, append };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchCamperById = createAsyncThunk(
//   "campers/fetchById",
//   async (id, thunkAPI) => {
//     try {
//       const data = await getCamperById(id);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getCampers, getCamperById } from "../../services/api";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchAll",
//   async ({ page = 1, filters = {}, append = false }, thunkAPI) => {
//     try {
//       console.log("fetchCampers thunk called with:", { page, filters, append });

//       // Передаємо всі параметри правильно
//       const data = await getCampers({
//         page,
//         limit: 4,
//         ...filters,
//       });

//       return { ...data, append };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchCamperById = createAsyncThunk(
//   "campers/fetchById",
//   async (id, thunkAPI) => {
//     try {
//       const data = await getCamperById(id);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "../../services/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, filters = {}, append = false }, thunkAPI) => {
    try {
      // Передаємо всі параметри правильно
      const data = await getCampers({
        page,
        limit: 4,
        ...filters,
      });

      return { ...data, append };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const data = await getCamperById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
