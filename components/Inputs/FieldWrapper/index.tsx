import React from "react";

import classes from "./FieldWrapper.module.scss";

interface Extra {
  text: string;
  action: () => void;
}

interface Props {
  id: string;
  label: string;
  error?: string | null;
  containerStyle?: any;
  extra?: Extra;
  helperText?: string;
}

const FieldWrapper: React.FC<Props> = ({ children, id, error, label }) => {
  return (
    <div className={classes["wrapper-container"]}>
      <label className={classes.label}>{label}</label>
      {children}
      {!!error && (
        <label
          className={classes["error-label"]}
          data-testid={`text-field-error-${id}`}
        >
          {error}
        </label>
      )}
    </div>
  );
};

export default FieldWrapper;
