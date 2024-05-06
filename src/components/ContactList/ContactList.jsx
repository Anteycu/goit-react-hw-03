import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact username={name} phoneNum={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
