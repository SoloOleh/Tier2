// import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import LocationFilter from "../LocationFilter/LocationFilter";
// import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
// import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
// import Button from "../Button/Button";
// import { selectActiveFilters } from "../../redux/filters/selectors";
// import styles from "./FilterPanel.module.css";

// const FilterPanel = ({ onApplyFilters }) => {
//   const filters = useSelector(selectActiveFilters);

//   const handleSearch = () => {
//     onApplyFilters(filters);
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

// FilterPanel.propTypes = {
//   onApplyFilters: PropTypes.func.isRequired,
// };

// export default FilterPanel;

// src/components/FilterPanel/FilterPanel.jsx
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
    <aside className={styles.filterPanel}>
      <LocationFilter />
      <EquipmentFilter />
      <VehicleTypeFilter />

      <Button onClick={handleSearch} fullWidth size="large" variant="primary">
        Search
      </Button>
    </aside>
  );
};

FilterPanel.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterPanel;
