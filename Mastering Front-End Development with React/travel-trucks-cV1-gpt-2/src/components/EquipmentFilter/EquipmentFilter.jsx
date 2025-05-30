import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { toggleEquipment } from "../../redux/filters/filtersSlice";
import { selectEquipment } from "../../redux/filters/selectors";
import { VEHICLE_EQUIPMENT } from "../../utils/constants";
import styles from "./EquipmentFilter.module.css";

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);

  const handleToggle = (value) => {
    dispatch(toggleEquipment(value));
  };

  return (
    <div className={styles.equipmentFilter}>
      <h4 className={styles.subtitle}>Vehicle equipment</h4>
      <div className={styles.grid}>
        {VEHICLE_EQUIPMENT.map(({ value, label, icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleToggle(value)}
            className={`${styles.option} ${
              equipment[value] ? styles.active : ""
            }`}
          >
            <Icon name={icon} size={32} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EquipmentFilter;
