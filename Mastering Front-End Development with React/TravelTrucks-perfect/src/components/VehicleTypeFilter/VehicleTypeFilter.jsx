import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { setForm } from "../../redux/filters/filtersSlice";
import { selectForm } from "../../redux/filters/selectors";
import { VEHICLE_TYPES } from "../../utils/constants";
import styles from "./VehicleTypeFilter.module.css";

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();
  const selectedForm = useSelector(selectForm);

  const handleVehicleTypeSelect = (vehicleType) => {
    // Якщо клікнули на вже вибраний тип - скидаємо вибір
    dispatch(setForm(vehicleType === selectedForm ? "" : vehicleType));
  };

  return (
    <div className={styles.vehicleTypeFilter}>
      <h3 className={styles.subtitle}>Vehicle type</h3>
      <div className={styles.divider} />
      <fieldset className={styles.fieldset}>
        <legend className={styles.visuallyHidden}>Select vehicle type</legend>
        <div className={styles.grid}>
          {VEHICLE_TYPES.map(({ value, label, icon }) => (
            <label
              key={value}
              className={`${styles.option} ${
                selectedForm === value ? styles.active : ""
              }`}
            >
              <input
                type="radio"
                name="vehicleType"
                value={value}
                className={styles.radio}
                checked={selectedForm === value}
                onChange={() => handleVehicleTypeSelect(value)}
                aria-label={label}
              />
              <div className={styles.content}>
                <Icon name={icon} size={32} />
                <span>{label}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default VehicleTypeFilter;
