import { Formik, Form, Field } from "formik";

// function SearchBox({ value, onSearch }) {
//   return (
//     <div>
//       <p>Search by name</p>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onSearch(e.target.value)}
//       />
//     </div>
//   );
// }

function SearchBox({ value, onSearch }) {
  return (
    <Formik>
      <Form>
        <p>Search by name</p>
        <Field
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Form>
    </Formik>
  );
}

export default SearchBox;
