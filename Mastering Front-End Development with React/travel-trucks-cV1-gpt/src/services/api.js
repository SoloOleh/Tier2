import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCampers = async ({ page = 1, limit = 4, ...filters }) => {
  try {
    const params = new URLSearchParams({
      page,
      limit,
    });

    // Add filters to params
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "" && value !== false) {
        params.append(key, value);
      }
    });

    const response = await api.get("/campers", { params });

    // MockAPI returns all items, so we need to handle pagination manually
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = response.data.slice(startIndex, endIndex);

    return {
      items: paginatedItems,
      total: response.data.length,
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
    console.error("Error fetching camper:", error);
    throw error;
  }
};
