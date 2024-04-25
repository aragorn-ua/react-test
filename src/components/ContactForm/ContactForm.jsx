import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import css from "./ContactForm.module.css"
import * as Yup from "yup";

const initialValues = {
    name: "",
    number: "",
};

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("Required").positive().integer(),

  });

const ContactForm = () => {
    const nameId = nanoid();
    const numberId = nanoid();
    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
        >
                <Form className={css.form}>
                  <label className={css.label} htmlFor={nameId}>Username</label>
                  <Field className={css.field} type="text" name="name" />
                  <ErrorMessage className={css.error} name="name" component="span" />
                  <label className={css.label} htmlFor={numberId}>Number</label>
                  <Field className={css.field} type="text" name="number" />
                  <ErrorMessage className={css.error} name="number" component="span" />
                  <button className={css.btn} type="submit">Submit</button>
                </Form>
        </Formik>
      );
}
export default ContactForm;