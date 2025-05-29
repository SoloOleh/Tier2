export const selectLocation = (state) => state.filters.location;
export const selectForm = (state) => state.filters.form;
export const selectEquipment = (state) => state.filters.equipment;
export const selectActiveFilters = (state) => {
  const { location, form, equipment } = state.filters;
  const activeEquipment = Object.entries(equipment)
    .filter(([_, value]) => value)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  return {
    ...(location && { location }),
    ...(form && { form }),
    ...activeEquipment,
  };
};
