import { useState, useEffect } from "react";
import styles from "./Container.module.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  // const [reviews, setReviews] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews");
    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  // скорочено
  // const [reviews, setReviews] = useState(() => {
  //   const savedReviews = window.localStorage.getItem("saved-reviews");
  //   return savedReviews
  //     ? JSON.parse(savedReviews)
  //     : { good: 0, neutral: 0, bad: 0 };
  // });

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const handleGoodClick = () => {
    setReviews((prev) => ({ ...prev, good: prev.good + 1 }));
  };

  const handleNeutralClick = () => {
    setReviews((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
  };

  const handleBadClick = () => {
    setReviews((prev) => ({ ...prev, bad: prev.bad + 1 }));
  };

  const handleResetClick = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.container}>
      <Description />
      <Options
        onGoodClick={handleGoodClick}
        onNeutralClick={handleNeutralClick}
        onBadClick={handleBadClick}
        onResetClick={handleResetClick}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
