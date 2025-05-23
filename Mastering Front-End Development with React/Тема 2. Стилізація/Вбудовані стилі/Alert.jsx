// //src/components/Alert.jsx

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// export const Alert = ({ children }) => {
//   return <p style={alertStyles}>{children}</p>;
// };

// Динамічні стилі
const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
};

const getBgColor = variant => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

const Alert = ({ variant, children }) => {
  return (
    <p
      style={{
        ...alertStyles,
        backgroundColor: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};
