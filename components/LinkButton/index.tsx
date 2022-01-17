import classes from "./LinkButton.module.scss";

interface Props {
  onClick: () => void;
}

const LinkButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <span onClick={onClick} className={classes["link-button"]}>
      {children}
    </span>
  );
};

export default LinkButton;
