import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import initContacts from "../initContacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    return initContacts;
  });
  const [query, setQuery] = useState("");

  const onSearchResult = contacts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox query={query} onSearch={setQuery} />
      <ContactList contacts={onSearchResult} />
    </div>
  );
}

export default App;
