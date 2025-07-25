import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { toggleEquipment } from "../../redux/filters/filtersSlice";
import { selectEquipment } from "../../redux/filters/selectors";
import { VEHICLE_EQUIPMENT } from "../../utils/constants";
import styles from "./EquipmentFilter.module.css";

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);

  const handleEquipmentToggle = (equipmentType) => {
    dispatch(toggleEquipment(equipmentType));
  };

  return (
    <div className={styles.equipmentFilter}>
      <h3 className={styles.title}>Vehicle equipment</h3>
      <div className={styles.divider} />
      <div className={styles.grid}>
        {VEHICLE_EQUIPMENT.map(({ value, label, icon }) => (
          <label
            key={value}
            className={`${styles.option} ${
              equipment[value] ? styles.active : ""
            }`}
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={equipment[value]}
              onChange={() => handleEquipmentToggle(value)}
              aria-label={label}
            />
            <div className={styles.content}>
              <Icon name={icon} size={32} />
              <span>{label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default EquipmentFilter;
