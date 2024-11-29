import { useState } from "react";
// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   return (
//     <form>
//       <input type="text" name="login" value={values.login} />
//       <input type="password" name="password" value={values.password} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleLoginChange = (evt) => {
//     setValues({
//       ...values,
//       login: evt.target.value,
//     });
//   };

//   const handlePwdChange = (evt) => {
//     setValues({
//       ...values,
//       password: evt.target.value,
//     });
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleLoginChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handlePwdChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const handleChange = (evt) => {
//   console.log(evt.target.value);
//   console.log(evt.target.name);
// };

// const handleChange = (evt) => {
//   setValues({
//     ...values,
//     [evt.target.name]: evt.target.value,
//   });
// };

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   const handleChange = (evt) => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//     // console.log(evt.target.value);
//     // console.log(evt.target.name);
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
