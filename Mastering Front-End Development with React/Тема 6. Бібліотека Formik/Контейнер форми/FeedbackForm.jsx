// import { Formik } from "formik";

// const FeedbackForm = () => {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       ...
//     </Formik>
//   );
// };

// import { Formik, Form } from "formik";

// const FeedbackForm = () => {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form>...</Form>
//     </Formik>
//   );
// };

import { Formik, Form } from "formik";

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
