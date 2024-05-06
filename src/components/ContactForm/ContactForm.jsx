import { Field, Form, Formik } from "formik";
import { useId } from "react";

const initialValues = {
  phone: "",
  username: "",
};

const ContactForm = () => {
  const phoneId = useId();
  const nameId = useId();

  return (
    <Formik initialValues={{ initialValues }} onSubmit={() => {}}>
      <Form>
        <label htmlFor={phoneId}> Phone </label>
        <Field type="tel" name="phone" id={phoneId} />

        <label htmlFor={nameId}> Name </label>
        <Field type="text" name="username" id={nameId} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
