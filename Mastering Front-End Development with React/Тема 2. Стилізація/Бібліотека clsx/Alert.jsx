// src/components/Alert.jsx

// import clsx from "/node_modules/clsx";
import clsx from "/Users/solo/Desktop/IT/Repository/Tier2/Mastering Front-End Development with React/Тема 2. Стилізація/Build/node_modules/clsx";
import "./Alert.css";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// src/components/Alert.jsx


const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};


export default Alert;

