import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import initContacts from "../initContacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    return initContacts;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={setContacts} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
