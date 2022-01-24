import withAuthorizedRoute from "../../hocs/withAuthorizedRoute";

import classes from "./UnloggedLayout.module.scss";

const UnloggedLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default withAuthorizedRoute(UnloggedLayout, true);
