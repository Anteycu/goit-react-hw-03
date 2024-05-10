import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact
            username={name}
            phoneNum={number}
            contactId={id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
