// import "./ErrorMessage.module.css";

// export default function ErrorMessage({ message }) {
//   return <p style={{ color: "red", textAlign: "center" }}>{message}</p>;
// }

import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <p className={styles.error}>{message}</p>;
}
