import styles from "./Notification.module.css";

function Notification({ message = "No feedback yet" }) {
  return <p className={styles.notification}>{message}</p>;
}

export default Notification;
