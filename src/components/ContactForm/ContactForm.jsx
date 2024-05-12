import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import css from "./ContactForm.module.css";

const initialValues = {
  number: "",
  name: "",
};

const ContactSchema = Yup.object().shape({
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const phoneId = useId();
  const nameId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: uuidv4(),
      ...values,
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={phoneId} className={css.label}>
          Phone
        </label>
        <Field type="tel" name="number" id={phoneId} className={css.field} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} className={css.field} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
