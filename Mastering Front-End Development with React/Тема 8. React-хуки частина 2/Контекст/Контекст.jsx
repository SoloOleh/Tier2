// import { createContext } from "react";

// const myContext = createContext();

// import { createContext } from "react";
// import ReactDOM from "react-dom/client";

// const myContext = createContext();

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <myContext.Provider value={{ username: "Mango" }}>
//     <App />
//   </myContext.Provider>
// );

// import { createContext, useContext } from "react";

// const myContext = createContext();

// const contextValue = useContext(myContext);

// import { createContext, useContext } from "react";

// const myContext = createContext();

// // Імпортуємо та використовуємо цей хук у компонентах
// export const useMyContext = () => useContext(myContext);

// // src/userContext.js
// import { createContext, useContext } from "react";
// export const userContext = createContext();
// export const useUser = () => useContext(userContext);

// // src/main.jsx
// import ReactDOM from "react-dom/client";
// import { userContext } from "./userContext";

// const contextValue = {
//   username: "Mango",
//   isLoggedIn: true,
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <userContext.Provider value={contextValue}>
//     <App />
//   </userContext.Provider>
// );

// // src/components/App.jsx
// import { UserMenu } from "./UserMenu";

// const App = () => {
//   return (
//     <div>
//       <UserMenu />
//     </div>
//   );
// };

// // src/components/UserMenu.jsx
// import { useUser } from "../userContext";

// export const UserMenu = () => {
//   const { username } = useUser();

//   return (
//     <div>
//       <p>Welcome, {username}!</p>
//       <button>Log out</button>
//     </div>
//   );
// };

// Кастомний компонент провайдера
// src/userContext.jsx
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <userContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};

// src/main.jsx
import { UserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);

// src/components/App.jsx
import { UserMenu } from "./UserMenu";

const App = () => {
  return (
    <div>
      <UserMenu />
    </div>
  );
};

// src/components/UserMenu.jsx
import { useUser } from "../userContext";

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
