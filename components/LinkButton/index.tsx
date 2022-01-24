import classes from "./LinkButton.module.scss";

interface Props {
  id?: string | number;
  onClick: () => void;
}

const LinkButton: React.FC<Props> = ({ id, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={classes["link-button"]}
      data-testid={`link-button-${id}`}
    >
      {children}
    </span>
  );
};

export default LinkButton;
