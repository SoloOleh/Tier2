// import "./SearchBar.module.css";

// import { useState } from "react";

// export default function SearchBar({ onSubmit }) {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() === "") {
//       alert("Please enter a search query!");
//       return;
//     }
//     onSubmit(inputValue);
//     setInputValue("");
//   };

//   return (
//     <header>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Search images and photos"
//           autoFocus
//           autoComplete="off"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </header>
//   );
// }

// import styles from "./SearchBar.module.css";

// function SearchBar() {
//   return (
//     <header className={styles.header}>
//       <form className={styles.form}>
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="Search images and photos"
//         />
//         <button className={styles.button} type="submit">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className={styles.icon}
//           >
//             <path d="M10 2a8 8 0 1 0 5.29 14.29l5 5a1 1 0 0 0 1.42-1.42l-5-5A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" />
//           </svg>
//         </button>
//       </form>
//     </header>
//   );
// }
// export default SearchBar;

// import styles from "./SearchBar.module.css";
// import { useState } from "react";

// export default function SearchBar({ onSubmit }) {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() === "") {
//       alert("Please enter a search query!");
//       return;
//     }
//     onSubmit(inputValue);
//     setInputValue("");
//   };

//   return (
//     <header className={styles.header}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           className={styles.input}
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Search images and photos"
//           autoFocus
//           autoComplete="off"
//         />
//         <button className={styles.button} type="submit">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className={styles.icon}
//           >
//             <path d="M10 2a8 8 0 1 0 5.29 14.29l5 5a1 1 0 0 0 1.42-1.42l-5-5A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" />
//           </svg>
//         </button>
//       </form>
//     </header>
//   );
// }

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styles from "./SearchBar.module.css";

// export default function SearchBar({ onSubmit }) {
//   const validationSchema = Yup.object({
//     query: Yup.string().trim().required("Please enter a search query!"),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     onSubmit(values.query);
//     resetForm();
//   };

//   return (
//     <header className={styles.header}>
//       <Formik
//         initialValues={{ query: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ submitForm }) => (
//           <Form className={styles.form}>
//             <div className={styles.inputWrapper}>
//               <div
//                 className={styles.iconWrapper}
//                 onClick={submitForm} // Виклик пошуку при кліку на лупу
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   className={styles.icon}
//                 >
//                   <path d="M10 2a8 8 0 1 0 5.29 14.29l5 5a1 1 0 0 0 1.42-1.42l-5-5A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" />
//                 </svg>
//               </div>
//               <Field
//                 name="query"
//                 type="text"
//                 placeholder="Search images and photos"
//                 className={styles.input}
//                 autoFocus
//                 autoComplete="off"
//               />
//               <ErrorMessage
//                 name="query"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </header>
//   );
// }

import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <button type="submit" className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M10 2a8 8 0 1 0 5.29 14.29l5 5a1 1 0 0 0 1.42-1.42l-5-5A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" />
            </svg>
          </button>
          <input
            name="query"
            type="text"
            placeholder="Search images and photos"
            className={styles.input}
            autoFocus
            autoComplete="off"
            value={value}
            onChange={handleChange}
          />
        </div>
      </form>
    </header>
  );
}
