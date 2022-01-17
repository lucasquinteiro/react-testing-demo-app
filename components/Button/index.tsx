import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  id,
  ...props
}) => {
  return (
    <button
      data-testid={`button-${id}`}
      tabIndex={0}
      className={`${classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
