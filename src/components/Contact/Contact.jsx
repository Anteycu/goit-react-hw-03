import css from "./Contact.module.css";

const Contact = ({ username, phoneNum, onDelete, contactId }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <h2>{username}</h2>
        <p>{phoneNum}</p>
      </div>
      <button type="button" onClick={() => onDelete(contactId)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
