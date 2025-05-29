import { useDispatch } from "react-redux";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import Button from "../Button/Button";
import { resetCampers } from "../../redux/campers/campersSlice";
import styles from "./FilterPanel.module.css";

const FilterPanel = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(resetCampers());
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

export default FilterPanel;
