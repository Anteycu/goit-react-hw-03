import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const initialValues = {
  number: "",
  name: "",
};

const ContactSchema = Yup.object().shape({
  number: Yup.number()
    .min(100, "Too short!")
    .max(9999999999, "Too long!")
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
      <Form>
        <label htmlFor={phoneId}> Phone </label>
        <Field type="tel" name="number" id={phoneId} />
        <ErrorMessage name="number" component="span" />

        <label htmlFor={nameId}> Name </label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
