// src/components/Alert.jsx

// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }

const Alert = ({ children }) => {
  // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
  return <p className={css.alert}>{children}</p>;
};

// // src/components/Alert.jsx

// import css from "./Alert.module.css";

// const Alert = ({ variant, children }) => {
//   return <p className={css[variant]}>{children}</p>;
// };
