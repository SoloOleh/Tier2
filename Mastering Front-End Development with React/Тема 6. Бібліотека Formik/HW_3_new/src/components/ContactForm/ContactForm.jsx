import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
});

function ContactForm({ onAdd }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAdd({
  //     id: nanoid(),
  //     name: e.target.elements.name.value,
  //     number: e.target.elements.number.value,
  //   });
  //   e.target.reset();
  // };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="name" />
  //       <input type="text" name="number" />
  //       <button type="submit">Add contact</button>
  //     </form>
  //   );
  // }
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });

    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Tel
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
