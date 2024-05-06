import css from "./Contact.module.css";

const Contact = ({ username, phoneNum }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <h2>{username}</h2>
        <p>{phoneNum}</p>
      </div>
      <button type="button">Delete</button>
    </>
  );
};

export default Contact;
