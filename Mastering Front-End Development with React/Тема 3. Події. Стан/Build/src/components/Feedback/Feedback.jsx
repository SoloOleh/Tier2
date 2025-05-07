import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={styles.feedback}>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Positive: {positive} %</li>
      </ul>
    </div>
  );
}

export default Feedback;
