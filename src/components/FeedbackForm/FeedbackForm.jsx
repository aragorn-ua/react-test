import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useId } from "react";
import css from "./FeedbackForm.module.css"
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(4, "Too short").max(256, "Too long").required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
  });


const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good",
  };

const FeedbackForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();
    const levelFieldId = useId();

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
              <label className={css.label} htmlFor={nameFieldId}>Username</label>
                <Field className={css.field} type="text" name="username" />
                <ErrorMessage className={css.error} name="username" component="span" />
                <label className={css.label} htmlFor={emailFieldId}>Email</label>
                <Field className={css.field} type="email" name="email" />
                <ErrorMessage className={css.error} name="email" component="span" />
                <label className={css.label} htmlFor={msgFieldId}>Message</label>
                <Field className={css.field} as="textarea" name="message" id={msgFieldId} rows="5" />
                <ErrorMessage className={css.error} name="message" component="span" />
                <label className={css.label} htmlFor={levelFieldId}>Service satisfaction level</label>
                <Field className={css.field} as="select" name="level" id={levelFieldId}>
                <option value="good">Good</option>
                <option value="neutral">Neutral</option>
                <option value="bad">Bad</option>
                </Field>
                <ErrorMessage className={css.error} name="level" component="span" />
                  <button className={css.btn} type="submit">Submit</button>
              </Form>
      </Formik>
    );
  };

export default FeedbackForm;