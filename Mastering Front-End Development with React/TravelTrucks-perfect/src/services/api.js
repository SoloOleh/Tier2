import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Build query parameters for MockAPI
const buildQueryParams = (params) => {
  const queryParams = new URLSearchParams();

  // Pagination
  if (params.page) queryParams.append("page", params.page);
  if (params.limit) queryParams.append("limit", params.limit);

  // Location filter - MockAPI supports filter parameter
  if (params.location) {
    queryParams.append("filter", params.location);
  }

  // Form filter
  if (params.form) {
    queryParams.append("form", params.form);
  }

  // Equipment filters
  const equipmentFilters = ["AC", "transmission", "kitchen", "TV", "bathroom"];
  equipmentFilters.forEach((equipment) => {
    if (params[equipment] === true) {
      queryParams.append(equipment, "true");
    }
  });

  return queryParams.toString();
};

export const getCampers = async (params = {}) => {
  try {
    // Build query string
    const queryString = buildQueryParams(params);
    const url = `/campers${queryString ? `?${queryString}` : ""}`;

    console.log("API Request URL:", url);

    const response = await api.get(url);
    let data = response.data;

    // If MockAPI doesn't support all our filters, we need to filter on frontend
    // This is a fallback for filters that MockAPI doesn't support
    if (
      params.location ||
      params.transmission ||
      params.AC ||
      params.kitchen ||
      params.TV ||
      params.bathroom
    ) {
      // Get all items for filtering (if pagination is not working with filters)
      const allResponse = await api.get("/campers");
      let allCampers = allResponse.data;

      if (allCampers.items && Array.isArray(allCampers.items)) {
        allCampers = allCampers.items;
      }

      // Apply frontend filters
      let filteredCampers = [...allCampers];

      // Location filter
      if (params.location) {
        const searchText = params.location.toLowerCase().trim();
        filteredCampers = filteredCampers.filter((camper) =>
          camper.location.toLowerCase().includes(searchText)
        );
      }

      // Form filter
      if (params.form) {
        filteredCampers = filteredCampers.filter(
          (camper) => camper.form === params.form
        );
      }

      // Equipment filters
      const equipmentFilters = [
        "AC",
        "transmission",
        "kitchen",
        "TV",
        "bathroom",
      ];
      equipmentFilters.forEach((equipment) => {
        if (params[equipment] === true) {
          if (equipment === "transmission") {
            filteredCampers = filteredCampers.filter(
              (camper) => camper.transmission === "automatic"
            );
          } else {
            filteredCampers = filteredCampers.filter(
              (camper) => camper[equipment] === true
            );
          }
        }
      });

      // Apply pagination
      const page = params.page || 1;
      const limit = params.limit || 4;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedCampers = filteredCampers.slice(startIndex, endIndex);

      return {
        items: paginatedCampers,
        total: filteredCampers.length,
      };
    }

    // If no filters, use backend response directly
    if (Array.isArray(data)) {
      return {
        items: data,
        total: data.length,
      };
    }

    return data;
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

export const getCamperById = async (camperId) => {
  try {
    const response = await api.get(`/campers/${camperId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching camper by ID:", error);
    throw error;
  }
};
