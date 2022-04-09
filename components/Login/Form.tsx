import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "../Inputs";
import Button from "../Button";

const EMAIL_VALIDATION_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(6, "Too Short!").required("Required"),
  email: Yup.string()
    .matches(EMAIL_VALIDATION_REGEX, "Invalid email")
    .required("Required"),
});

interface FormValuesProps {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: FormValuesProps) => Promise<void>;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = async (
    values: FormValuesProps,
    { resetForm, setFieldError }: any
  ) => {
    try {
      await onSubmit(values);
      resetForm();
    } catch (err: any) {
      setFieldError("password", err.message);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form style={{ width: "50%" }} autoComplete="off">
          <h2 style={{ textAlign: "center", letterSpacing: '2px' }}>LOGIN</h2>
          <TextField
            id="email"
            type="email"
            label="Email"
            formikProps={props}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            formikProps={props}
          />
          <Button
            id="submit-login"
            type="submit"
            disabled={!(props.isValid)}
            style={{ marginTop: "32px" }}
          >
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
