import withAuthorizedRoute from "../../hocs/withAuthorizedRoute";

import classes from "./LoggedLayout.module.scss";

const LoggedLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default withAuthorizedRoute(LoggedLayout, false);
