import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import css from "./ContactForm.module.css"
import * as Yup from "yup";

const initialValues = {
    id: "",
    name: "",
    phoneNumber: "",
};

  const ContactSchema = Yup.object().shape({
    id: Yup.string(),
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phoneNumber: Yup.string().min(3, "Too Short!").max(9, "Too Long!").required("Required"),

  });

const ContactForm = ({ addContact }) => {
    const mainId = nanoid();
    const phoneNumberId = nanoid();
    const handleSubmit = (values, actions) => {
      const id = nanoid();
      const newContact = { ...values, id };
		console.log(values);
    addContact(newContact);
   actions.resetForm();

	};
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
        >
                <Form className={css.form}>
                  <label className={css.label} htmlFor={mainId}>Username</label>
                  <Field className={css.field} type="text" name="name" />
                  <ErrorMessage className={css.error} name="name" component="span" />
                  <label className={css.label} htmlFor={phoneNumberId}>Number</label>
                  <Field className={css.field} type="text" name="phoneNumber" />
                  <ErrorMessage className={css.error} name="phoneNumber" component="span" />
                  <button className={css.btn} type="submit">Add Contact</button>
                </Form>
        </Formik>
      );
}
export default ContactForm;