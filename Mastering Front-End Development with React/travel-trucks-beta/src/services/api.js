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

// import axios from "axios";

// const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const getCampers = async ({ page = 1, limit = 4, ...filters }) => {
//   try {
//     const params = new URLSearchParams({ page, limit });

//     Object.entries(filters).forEach(([key, value]) => {
//       if (value !== undefined && value !== "" && value !== false) {
//         params.append(key, value);
//       }
//     });

//     const response = await api.get("/campers", { params });

//     const data = response.data;

//     // ✅ Якщо це об'єкт із полями items і total
//     if (
//       typeof data === "object" &&
//       Array.isArray(data.items) &&
//       typeof data.total === "number"
//     ) {
//       return {
//         items: data.items,
//         total: data.total,
//       };
//     }

//     // 🔁 Альтернативна підтримка старого варіанту: data — це масив
//     if (Array.isArray(data)) {
//       const startIndex = (page - 1) * limit;
//       const endIndex = startIndex + limit;

//       return {
//         items: data.slice(startIndex, endIndex),
//         total: data.length,
//       };
//     }

//     console.warn("❗️ Unexpected API data structure:", data);
//     return {
//       items: [],
//       total: 0,
//     };
//   } catch (error) {
//     if (error.response?.status === 429) {
//       console.error("⚠️ Too many requests (429): try again later.");
//     } else {
//       console.error("❌ Error fetching campers:", error);
//     }
//     throw error;
//   }
// };

// export const getCamperById = async (id) => {
//   try {
//     const response = await api.get(`/campers/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("❌ Error fetching camper by ID:", error);
//     throw error;
//   }
// };

// import axios from "axios";

// const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const getCampers = async ({ page = 1, limit = 4, ...filters }) => {
//   try {
//     // Отримуємо всі кемпери
//     const response = await api.get("/campers");
//     let data = response.data;

//     // Перевіряємо структуру даних
//     if (data.items && Array.isArray(data.items)) {
//       data = data.items;
//     }

//     // Фільтруємо дані
//     let filteredData = [...data];

//     // Фільтр по локації
//     if (filters.location) {
//       const searchLocation = filters.location.toLowerCase().trim();
//       filteredData = filteredData.filter((camper) =>
//         camper.location.toLowerCase().includes(searchLocation)
//       );
//     }

//     // Фільтр по типу кузова (form)
//     if (filters.form) {
//       filteredData = filteredData.filter(
//         (camper) => camper.form === filters.form
//       );
//     }

//     // Фільтри по обладнанню
//     const equipmentFilters = Object.entries(filters).filter(
//       ([key, value]) =>
//         key !== "location" &&
//         key !== "form" &&
//         key !== "page" &&
//         key !== "limit" &&
//         value === true
//     );

//     equipmentFilters.forEach(([key, _]) => {
//       filteredData = filteredData.filter((camper) => {
//         // Особливий випадок для transmission
//         if (key === "transmission") {
//           return camper.transmission === "automatic";
//         }
//         // Для інших - просто перевіряємо булеве значення
//         return camper[key] === true;
//       });
//     });

//     // Пагінація
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + limit;
//     const paginatedItems = filteredData.slice(startIndex, endIndex);

//     return {
//       items: paginatedItems,
//       total: filteredData.length,
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
//     console.error("Error fetching camper by ID:", error);
//     throw error;
//   }
// };

// import axios from "axios";

// const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const getCampers = async ({
//   page = 1,
//   limit = 4,
//   filters = {},
//   ...otherParams
// }) => {
//   try {
//     console.log("getCampers called with:", {
//       page,
//       limit,
//       filters,
//       otherParams,
//     });

//     // Отримуємо всі кемпери
//     const response = await api.get("/campers");
//     let data = response.data;

//     console.log("Raw API response:", data);
//     console.log("First camper example:", data[0]);

//     // Перевіряємо структуру даних
//     if (data.items && Array.isArray(data.items)) {
//       data = data.items;
//     }

//     // Фільтруємо дані
//     let filteredData = [...data];
//     console.log("Total campers before filtering:", filteredData.length);

//     // Розпаковуємо фільтри з об'єкта filters
//     const allFilters = { ...filters, ...otherParams };
//     console.log("All filters combined:", allFilters);

//     // Фільтр по локації
//     if (allFilters.location) {
//       const searchLocation = allFilters.location.toLowerCase().trim();
//       filteredData = filteredData.filter((camper) =>
//         camper.location.toLowerCase().includes(searchLocation)
//       );
//       console.log(
//         `After location filter (${allFilters.location}):`,
//         filteredData.length
//       );
//     }

//     // Фільтр по типу кузова (form)
//     if (allFilters.form) {
//       console.log("Filtering by form:", allFilters.form);
//       console.log("Available forms in data:", [
//         ...new Set(data.map((c) => c.form)),
//       ]);

//       filteredData = filteredData.filter((camper) => {
//         console.log(`Camper ${camper.name} has form: ${camper.form}`);
//         return camper.form === allFilters.form;
//       });
//       console.log(
//         `After form filter (${allFilters.form}):`,
//         filteredData.length
//       );
//     }

//     // Фільтри по обладнанню
//     const equipmentFilters = Object.entries(allFilters).filter(
//       ([key, value]) =>
//         key !== "location" &&
//         key !== "form" &&
//         key !== "page" &&
//         key !== "limit" &&
//         key !== "append" &&
//         value === true
//     );

//     console.log("Equipment filters:", equipmentFilters);

//     equipmentFilters.forEach(([key, _]) => {
//       filteredData = filteredData.filter((camper) => {
//         // Особливий випадок для transmission
//         if (key === "transmission") {
//           return camper.transmission === "automatic";
//         }
//         // Для інших - просто перевіряємо булеве значення
//         return camper[key] === true;
//       });
//       console.log(`After ${key} filter:`, filteredData.length);
//     });

//     // Пагінація
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + limit;
//     const paginatedItems = filteredData.slice(startIndex, endIndex);

//     console.log("Final result:", {
//       items: paginatedItems.length,
//       total: filteredData.length,
//     });

//     return {
//       items: paginatedItems,
//       total: filteredData.length,
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
//     console.error("Error fetching camper by ID:", error);
//     throw error;
//   }
// };

// import axios from "axios";

// const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const getCampers = async ({
//   page = 1,
//   limit = 4,
//   filters = {},
//   ...otherParams
// }) => {
//   try {
//     console.log("getCampers called with:", {
//       page,
//       limit,
//       filters,
//       otherParams,
//     });

//     // Отримуємо всі кемпери
//     const response = await api.get("/campers");
//     let data = response.data;

//     console.log("Raw API response:", data);
//     console.log("First camper example:", data.items ? data.items[0] : data[0]);

//     // Перевіряємо структуру даних
//     if (data.items && Array.isArray(data.items)) {
//       data = data.items;
//     } else if (!Array.isArray(data)) {
//       console.error("Unexpected data structure:", data);
//       throw new Error("Invalid API response structure");
//     }

//     // Фільтруємо дані
//     let filteredData = [...data];
//     console.log("Total campers before filtering:", filteredData.length);

//     // Розпаковуємо фільтри з об'єкта filters
//     const allFilters = { ...filters, ...otherParams };
//     console.log("All filters combined:", allFilters);

//     // Фільтр по локації
//     if (allFilters.location) {
//       const searchLocation = allFilters.location.toLowerCase().trim();
//       filteredData = filteredData.filter((camper) =>
//         camper.location.toLowerCase().includes(searchLocation)
//       );
//       console.log(
//         `After location filter (${allFilters.location}):`,
//         filteredData.length
//       );
//     }

//     // Фільтр по типу кузова (form)
//     if (allFilters.form) {
//       console.log("Filtering by form:", allFilters.form);
//       console.log("Available forms in data:", [
//         ...new Set(data.map((c) => c.form)),
//       ]);

//       filteredData = filteredData.filter((camper) => {
//         console.log(`Camper ${camper.name} has form: ${camper.form}`);
//         return camper.form === allFilters.form;
//       });
//       console.log(
//         `After form filter (${allFilters.form}):`,
//         filteredData.length
//       );
//     }

//     // Фільтри по обладнанню
//     const equipmentFilters = Object.entries(allFilters).filter(
//       ([key, value]) =>
//         key !== "location" &&
//         key !== "form" &&
//         key !== "page" &&
//         key !== "limit" &&
//         key !== "append" &&
//         value === true
//     );

//     console.log("Equipment filters:", equipmentFilters);

//     equipmentFilters.forEach(([key, _]) => {
//       filteredData = filteredData.filter((camper) => {
//         // Особливий випадок для transmission
//         if (key === "transmission") {
//           return camper.transmission === "automatic";
//         }
//         // Для інших - просто перевіряємо булеве значення
//         return camper[key] === true;
//       });
//       console.log(`After ${key} filter:`, filteredData.length);
//     });

//     // Пагінація
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + limit;
//     const paginatedItems = filteredData.slice(startIndex, endIndex);

//     console.log("Final result:", {
//       items: paginatedItems.length,
//       total: filteredData.length,
//     });

//     return {
//       items: paginatedItems,
//       total: filteredData.length,
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
//     console.error("Error fetching camper by ID:", error);
//     throw error;
//   }
// };

import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCampers = async ({
  page = 1,
  limit = 4,
  filters = {},
  ...otherParams
}) => {
  try {
    // Отримуємо всі кемпери
    const response = await api.get("/campers");
    let data = response.data;

    // Перевіряємо структуру даних
    if (data.items && Array.isArray(data.items)) {
      data = data.items;
    } else if (!Array.isArray(data)) {
      throw new Error("Invalid API response structure");
    }

    // Фільтруємо дані
    let filteredData = [...data];

    // Розпаковуємо фільтри з об'єкта filters
    const allFilters = { ...filters, ...otherParams };

    // Фільтр по локації
    if (allFilters.location) {
      const searchLocation = allFilters.location.toLowerCase().trim();
      filteredData = filteredData.filter((camper) =>
        camper.location.toLowerCase().includes(searchLocation)
      );
    }

    // Фільтр по типу кузова (form)
    if (allFilters.form) {
      filteredData = filteredData.filter((camper) => {
        return camper.form === allFilters.form;
      });
    }

    // Фільтри по обладнанню
    const equipmentFilters = Object.entries(allFilters).filter(
      ([key, value]) =>
        key !== "location" &&
        key !== "form" &&
        key !== "page" &&
        key !== "limit" &&
        key !== "append" &&
        value === true
    );

    equipmentFilters.forEach(([key, _]) => {
      filteredData = filteredData.filter((camper) => {
        // Особливий випадок для transmission
        if (key === "transmission") {
          return camper.transmission === "automatic";
        }
        // Для інших - просто перевіряємо булеве значення
        return camper[key] === true;
      });
    });

    // Пагінація
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = filteredData.slice(startIndex, endIndex);

    return {
      items: paginatedItems,
      total: filteredData.length,
    };
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

export const getCamperById = async (id) => {
  try {
    const response = await api.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching camper by ID:", error);
    throw error;
  }
};
