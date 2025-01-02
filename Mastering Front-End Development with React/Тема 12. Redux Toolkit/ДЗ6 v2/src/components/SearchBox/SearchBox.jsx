// import css from "./SearchBox.module.css";

// export default function SearchBox({ value, onChange }) {
//   return (
//     <div className={css.container}>
//       <label className={css.label}>
//         Find contacts by name
//         <input
//           className={css.input}
//           type="text"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       </label>
//     </div>
//   );
// }

// import { useDispatch } from "react-redux";
// import { changeFilter } from "../../redux/filtersSlice";
// import css from "./SearchBox.module.css";

// export default function SearchBox() {
//   const dispatch = useDispatch();

//   const handleChange = (event) => {
//     dispatch(changeFilter(event.target.value));
//   };

//   return (
//     <div className={css.container}>
//       <label className={css.label}>
//         Find contacts by name
//         <input className={css.input} type="text" onChange={handleChange} />
//       </label>
//     </div>
//   );
// }

// src/components/SearchBox/SearchBox.jsx
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filterValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
