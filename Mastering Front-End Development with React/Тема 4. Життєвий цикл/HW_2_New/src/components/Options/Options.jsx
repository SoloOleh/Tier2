import styles from "./Options.module.css";

const Options = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onResetClick,
  totalFeedback,
}) => {
  return (
    <div className={styles.options}>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}>Bad</button>
      {/* {totalFeedback > 0 && <button onClick={onResetClick}>Reset</button>} */}
      {totalFeedback > 0 ? <button onClick={onResetClick}>Reset</button> : null}
      {/* {totalFeedback !== 0 && <button onClick={onResetClick}>Reset</button>} */}
    </div>
  );
};

export default Options;
