import { useState, useEffect } from "react";

const App = () => {
  // const [good, setGood] = useState(() => {
  //   const goodClicks = window.localStorage.getItem("good-clicks");
  //   if (goodClicks !== null) {
  //     return goodClicks;
  //   }
  //   return 0;
  //   });

  const [good, setGood] = useState(() => {
    const savedGood = localStorage.getItem("good-clicks");
    return savedGood ? +savedGood : 0;
  });

  useEffect(() => {
    window.localStorage.setItem("good-clicks", good);
  }, [good]);

  // const [neutral, setNeutral] = useState(() => {
  //   const savedNeutral = window.localStorage.getItem("neutral-clicks");
  //   if (savedNeutral !== null) {
  //     return savedNeutral;
  //   }
  //   return 0;
  // });

  // const [neutral, setNeutral] = useState(() => {
  //   const savedNeutral = window.localStorage.getItem("neutral-clicks");
  //   return savedNeutral !== null ? Number(savedNeutral) : 0;
  // });

  const [neutral, setNeutral] = useState(() => {
    const savedNeutral = localStorage.getItem("neutral-clicks");
    return savedNeutral ? +savedNeutral : 0;
  });

  useEffect(() => {
    window.localStorage.setItem("neutral-clicks", neutral);
  }, [neutral]);

  // const [bad, setBad] = useState(() => {
  //   const savedBad = window.localStorage.getItem("bad-clicks");
  //   if (savedBad !== null) {
  //     return savedBad;
  //   }
  //   return 0;
  // });

  const [bad, setBad] = useState(() => {
    const savedBad = localStorage.getItem("bad-clicks");
    return savedBad ? +savedBad : 0;
  });

  useEffect(() => {
    window.localStorage.setItem("bad-clicks", bad);
  }, [bad]);

  let totalFeedback = good + neutral + bad;
  let positiveFeedback = 0;
  if (good > 0) {
    positiveFeedback = Math.round((good / totalFeedback) * 100);
  }

  return (
    <div>
      <>
        <h1>Sip Happens Café</h1>
      </>
      <>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </>
      <>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <button
          onClick={() => {
            setGood(0);
            setNeutral(0);
            setBad(0);
          }}
        >
          Reset
        </button>
      </>
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback} %</p>
      </>
    </div>
  );
};

export default App;
