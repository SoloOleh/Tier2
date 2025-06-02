// import { useDispatch } from "react-redux";
// import LocationFilter from "../LocationFilter/LocationFilter";
// import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
// import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
// import Button from "../Button/Button";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import styles from "./FilterPanel.module.css";

// const FilterPanel = () => {
//   const dispatch = useDispatch();

//   const handleSearch = () => {
//     dispatch(resetCampers());
//   };

//   return (
//     <div className={styles.filterPanel}>
//       <LocationFilter />

//       <div className={styles.divider} />

//       <h3 className={styles.title}>Filters</h3>

//       <EquipmentFilter />

//       <VehicleTypeFilter />

//       <Button onClick={handleSearch} fullWidth size="large">
//         Search
//       </Button>
//     </div>
//   );
// };

// export default FilterPanel;

// import { useDispatch, useSelector } from "react-redux";
// import LocationFilter from "../LocationFilter/LocationFilter";
// import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
// import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
// import Button from "../Button/Button";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import { fetchCampers } from "../../redux/campers/operations";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./FilterPanel.module.css";

// const FilterPanel = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectActiveFilters);

//   const handleSearch = () => {
//     console.log("Search button clicked with filters:", filters);
//     dispatch(resetCampers());
//     dispatch(fetchCampers({ page: 1, filters }));
//   };

//   return (
//     <div className={styles.filterPanel}>
//       <LocationFilter />

//       <div className={styles.divider} />

//       <h3 className={styles.title}>Filters</h3>

//       <EquipmentFilter />

//       <VehicleTypeFilter />

//       <Button onClick={handleSearch} fullWidth size="large">
//         Search
//       </Button>
//     </div>
//   );
// };

// export default FilterPanel;

// import { useDispatch, useSelector } from "react-redux";
// import LocationFilter from "../LocationFilter/LocationFilter";
// import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
// import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
// import Button from "../Button/Button";
// import { resetCampers } from "../../redux/campers/campersSlice";
// import { fetchCampers } from "../../redux/campers/operations";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./FilterPanel.module.css";

// const FilterPanel = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectActiveFilters);

//   const handleSearch = () => {
//     dispatch(resetCampers());
//     dispatch(fetchCampers({ page: 1, filters }));
//   };

//   return (
//     <div className={styles.filterPanel}>
//       <LocationFilter />

//       <div className={styles.divider} />

//       <h3 className={styles.title}>Filters</h3>

//       <EquipmentFilter />

//       <VehicleTypeFilter />

//       <Button onClick={handleSearch} fullWidth size="large">
//         Search
//       </Button>
//     </div>
//   );
// };

// export default FilterPanel;

import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import Button from "../Button/Button";
import { selectActiveFilters } from "../../redux/filters/selectors";
import styles from "./FilterPanel.module.css";

const FilterPanel = ({ onApplyFilters }) => {
  const filters = useSelector(selectActiveFilters);

  const handleSearch = () => {
    onApplyFilters(filters);
  };

  return (
    <div className={styles.filterPanel}>
      <LocationFilter />

      <div className={styles.divider} />

      <h3 className={styles.title}>Filters</h3>

      <EquipmentFilter />

      <VehicleTypeFilter />

      <Button onClick={handleSearch} fullWidth size="large">
        Search
      </Button>
    </div>
  );
};

FilterPanel.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterPanel;
