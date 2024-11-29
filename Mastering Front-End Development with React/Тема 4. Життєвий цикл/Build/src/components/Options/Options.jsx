import styles from "./Options.module.css";

function Options({ onFeedback, onReset, hasFeedback }) {
  const options = [
    { label: "Good", value: "good" },
    { label: "Neutral", value: "neutral" },
    { label: "Bad", value: "bad" },
  ];

  return (
    <div className={styles.options}>
      {options.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onFeedback(value)}
          className={styles.button}
        >
          {label}
        </button>
      ))}
      {hasFeedback && (
        <button onClick={onReset} className={styles.buttonReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
