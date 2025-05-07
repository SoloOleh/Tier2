import styles from "./Options.module.css";

function Options({ onFeedback, onReset, hasFeedback }) {
  return (
    <div className={styles.options}>
      <button onClick={() => onFeedback("good")} className={styles.button}>
        Good
      </button>
      <button onClick={() => onFeedback("neutral")} className={styles.button}>
        Neutral
      </button>
      <button onClick={() => onFeedback("bad")} className={styles.button}>
        Bad
      </button>
      {hasFeedback && (
        <button onClick={onReset} className={styles.buttonReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
