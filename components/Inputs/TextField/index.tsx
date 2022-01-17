import { InputHTMLAttributes } from "react";
import { Field } from "formik";

import FieldWrapper from "../FieldWrapper";
import useFormikError from "../useFormikError";

import classes from "./TextField.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  formikProps: any;
  label: string;
}

const TextField = ({ id, formikProps, label, ...props }: Props) => {
  const { error } = useFormikError(formikProps, id);

  return (
    <FieldWrapper id={id} label={label} error={error}>
      <Field
        data-testid={`text-field-${id}`}
        id={id}
        name={id}
        className={classes.input}
        {...props}
      />
    </FieldWrapper>
  );
};

export default TextField;
