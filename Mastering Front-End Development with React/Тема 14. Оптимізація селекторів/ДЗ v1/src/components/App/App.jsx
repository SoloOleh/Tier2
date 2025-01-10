import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

// Імпортуємо тільки ту операцію, яку використовуємо
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  // Наприклад, читаємо з контактів тільки loading та error
  const { loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
