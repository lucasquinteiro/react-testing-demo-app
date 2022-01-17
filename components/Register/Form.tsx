import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "../Inputs";
import Button from "../Button";

const EMAIL_VALIDATION_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  email: Yup.string()
    .matches(EMAIL_VALIDATION_REGEX, "Invalid email")
    .required("Required"),
});

interface FormValuesProps {
  email: string;
  password: string;
  name: string;
}

interface Props {
  onSubmit: (values: FormValuesProps) => Promise<void>;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (values: FormValuesProps) => {
    onSubmit(values);
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur
      validateOnMount={false}
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form style={{ width: "50%" }}>
          <h2 style={{ textAlign: "center" }}>Register</h2>
          <TextField
            placeholder="Your Name"
            id="name"
            label="Name"
            formikProps={props}
          />
          <TextField
            placeholder="Your Email"
            id="email"
            type="email"
            label="Email"
            formikProps={props}
          />
          <TextField
            placeholder="Your Password"
            id="password"
            type="password"
            label="Password"
            formikProps={props}
          />
          <Button
            id="submit-register"
            type="submit"
            disabled={!(props.isValid && props.dirty)}
            style={{ marginTop: "32px" }}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
