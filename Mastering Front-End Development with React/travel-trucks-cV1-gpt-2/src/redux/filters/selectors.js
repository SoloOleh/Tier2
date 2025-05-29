// export const selectLocation = (state) => state.filters.location;
// export const selectForm = (state) => state.filters.form;
// export const selectEquipment = (state) => state.filters.equipment;
// export const selectActiveFilters = (state) => {
//   const { location, form, equipment } = state.filters;
//   const activeEquipment = Object.entries(equipment)
//     .filter(([_, value]) => value)
//     .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

//   return {
//     ...(location && { location }),
//     ...(form && { form }),
//     ...activeEquipment,
//   };
// };

// import { createSelector } from '@reduxjs/toolkit';

// export const selectFilters = (state) => state.filters;

// export const selectActiveFilters = createSelector(
//   [selectFilters],
//   (filters) => ({
//     location: filters.location,
//     vehicleType: filters.vehicleType,
//     equipment: filters.equipment,
//   })
// );

import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectLocation = createSelector(
  [selectFilters],
  (filters) => filters.location
);

export const selectVehicleType = createSelector(
  [selectFilters],
  (filters) => filters.vehicleType
);

export const selectForm = createSelector(
  [selectFilters],
  (filters) => filters.form
);

export const selectEquipment = createSelector(
  [selectFilters],
  (filters) => filters.equipment
);

export const selectActiveFilters = createSelector(
  [selectLocation, selectVehicleType, selectForm, selectEquipment],
  (location, vehicleType, form, equipment) => ({
    location,
    vehicleType,
    form,
    equipment,
  })
);
