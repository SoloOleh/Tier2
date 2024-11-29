import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

const App = () => {
  // Стан для зберігання відгуків. Початкові значення зчитуються з localStorage.
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  // useEffect для збереження стану в localStorage кожного разу, коли змінюється feedback
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Загальна кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Відсоток позитивних відгуків
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  // Функція для оновлення фідбеку
  const handleFeedback = (type) => {
    // Оновлюємо лише потрібний тип (good, neutral або bad)
    setFeedback((prevFeedback) => ({
      ...prevFeedback, // Копіюємо попередній стан
      [type]: prevFeedback[type] + 1, // Збільшуємо значення вибраного типу
    }));
  };

  // Функція для скидання всіх відгуків
  const resetFeedback = () => {
    // Усі значення good, neutral і bad скидаються до 0
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.container}>
      {/* Заголовок застосунку */}
      <h1>Sip Happens Café</h1>
      {/* Інструкція для користувача */}
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      {/* Компонент з кнопками для вибору фідбеку */}
      <Options
        onFeedback={handleFeedback}
        onReset={resetFeedback}
        hasFeedback={totalFeedback > 0}
      />
      {/* Якщо є відгуки, показуємо статистику, інакше повідомлення */}
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
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
