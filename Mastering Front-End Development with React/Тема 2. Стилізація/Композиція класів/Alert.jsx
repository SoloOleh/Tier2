// src/components/Alert.jsx

// import "./Alert.css";

// export const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];

//   return <p className={classNames.join(" ")}>{children}</p>;
// };


import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];

  if (outlined) {
		classNames.push("is-outlined");
	}

  if (elevated) {
		classNames.push("is-elevated");
	}

  return <p className={classNames.join(" ")}>{children}</p>;
};

export default Alert;