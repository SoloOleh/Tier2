// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .required("Name is required")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters"),
//   number: yup
//     .string()
//     .required("Number is required")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters"),
// });

// export default function ContactForm({ onAddContact }) {
//   const handleSubmit = (values, { resetForm }) => {
//     onAddContact({ id: nanoid(), ...values });
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className={css.form}>
//           <label className={css.label}>
//             Name
//             <Field className={css.field} type="text" name="name" />
//             <ErrorMessage className={css.error} name="name" component="div" />
//           </label>
//           <label className={css.label}>
//             Number
//             <Field className={css.field} type="text" name="number" />
//             <ErrorMessage className={css.error} name="number" component="div" />
//           </label>
//           <button className={css.button} type="submit">
//             Add contact
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .required("Name is required")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters"),
//   number: yup
//     .string()
//     .required("Number is required")
//     .matches(
//       /^[0-9-+() ]+$/,
//       "Number can only contain digits, dashes, parentheses, and spaces"
//     )
//     .min(7, "Minimum 7 characters")
//     .max(15, "Maximum 15 characters"),
// });

// export default function ContactForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(addContact({ id: nanoid(), ...values }));
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className={css.form}>
//           <label className={css.label}>
//             Name
//             <Field className={css.field} type="text" name="name" />
//             <ErrorMessage className={css.error} name="name" component="div" />
//           </label>
//           <label className={css.label}>
//             Number
//             <Field className={css.field} type="text" name="number" />
//             <ErrorMessage className={css.error} name="number" component="div" />
//           </label>
//           <button className={css.button} type="submit">
//             Add contact
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: yup
    .string()
    .required("Number is required")
    .matches(
      /^[0-9-+() ]+$/,
      "Number can only contain digits, dashes, parentheses, and spaces"
    )
    .min(7, "Minimum 7 characters")
    .max(15, "Maximum 15 characters"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <label className={css.label}>
            Number
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage className={css.error} name="number" component="div" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
