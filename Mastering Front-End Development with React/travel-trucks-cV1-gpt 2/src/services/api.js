// import axios from "axios";

// const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const getCampers = async ({ page = 1, limit = 4, ...filters }) => {
//   try {
//     const params = new URLSearchParams({
//       page,
//       limit,
//     });

//     // Add filters to params
//     Object.entries(filters).forEach(([key, value]) => {
//       if (value !== undefined && value !== "" && value !== false) {
//         params.append(key, value);
//       }
//     });

//     const response = await api.get("/campers", { params });

//     // MockAPI returns all items, so we need to handle pagination manually
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + limit;
//     const paginatedItems = response.data.slice(startIndex, endIndex);

//     return {
//       items: paginatedItems,
//       total: response.data.length,
//     };
//   } catch (error) {
//     console.error("Error fetching campers:", error);
//     throw error;
//   }
// };

// export const getCamperById = async (id) => {
//   try {
//     const response = await api.get(`/campers/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching camper:", error);
//     throw error;
//   }
// };

import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCampers = async ({ page = 1, limit = 4, ...filters }) => {
  try {
    const params = new URLSearchParams({ page, limit });

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "" && value !== false) {
        params.append(key, value);
      }
    });

    const response = await api.get("/campers", { params });

    const data = response.data;

    // ✅ Якщо це об'єкт із полями items і total
    if (
      typeof data === "object" &&
      Array.isArray(data.items) &&
      typeof data.total === "number"
    ) {
      return {
        items: data.items,
        total: data.total,
      };
    }

    // 🔁 Альтернативна підтримка старого варіанту: data — це масив
    if (Array.isArray(data)) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      return {
        items: data.slice(startIndex, endIndex),
        total: data.length,
      };
    }

    console.warn("❗️ Unexpected API data structure:", data);
    return {
      items: [],
      total: 0,
    };
  } catch (error) {
    if (error.response?.status === 429) {
      console.error("⚠️ Too many requests (429): try again later.");
    } else {
      console.error("❌ Error fetching campers:", error);
    }
    throw error;
  }
};

export const getCamperById = async (id) => {
  try {
    const response = await api.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching camper by ID:", error);
    throw error;
  }
};
