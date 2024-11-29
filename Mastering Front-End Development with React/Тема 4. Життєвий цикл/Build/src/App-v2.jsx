import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

const App = () => {
  const [good, setGood] = useState(() => {
    const savedGood = localStorage.getItem("good-clicks");
    return savedGood ? Number(savedGood) : 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const savedNeutral = localStorage.getItem("neutral-clicks");
    return savedNeutral ? Number(savedNeutral) : 0;
  });

  const [bad, setBad] = useState(() => {
    const savedBad = localStorage.getItem("bad-clicks");
    return savedBad ? Number(savedBad) : 0;
  });

  useEffect(() => {
    localStorage.setItem("good-clicks", good);
  }, [good]);

  useEffect(() => {
    localStorage.setItem("neutral-clicks", neutral);
  }, [neutral]);

  useEffect(() => {
    localStorage.setItem("bad-clicks", bad);
  }, [bad]);

  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  const handleFeedback = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
  };

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onFeedback={handleFeedback}
        onReset={resetFeedback}
        hasFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
