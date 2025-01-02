// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ul className={css.list}>
//       {contacts.map((contact) => (
//         <li className={css.item} key={contact.id}>
//           <Contact data={contact} onDelete={onDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useSelector, useDispatch } from "react-redux";
// import { deleteContact, selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
// import css from "./ContactList.module.css";

// export default function ContactList() {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);
//   const dispatch = useDispatch();

//   const visibleContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={css.list}>
//       {visibleContacts.map(({ id, name, number }) => (
//         <li className={css.item} key={id}>
//           <p>
//             {name}: {number}
//           </p>
//           <button
//             className={css.button}
//             onClick={() => dispatch(deleteContact(id))}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// src/components/ContactList/ContactList.jsx
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  // Забираємо з редаксу масив контактів та фільтр
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  // Фільтруємо контакти безпосередньо в компоненті
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
