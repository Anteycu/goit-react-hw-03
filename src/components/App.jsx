import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import initContacts from "../initContacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts ?? initContacts;
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onSearchResult = contacts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox query={query} onSearch={setQuery} />
      <ContactList contacts={onSearchResult} onDelete={deleteContact} />
    </div>
  );
}

export default App;
