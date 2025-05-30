// const LoginForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.login.value);
//     console.log(event.target.elements.login.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = evt.target.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Викликаємо пропс onLogin
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

import { useId } from "react";
const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
