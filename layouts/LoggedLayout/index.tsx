import {useRouter} from 'next/router'

import Navbar from "../../components/Navbar";
import withAuthorizedRoute from "../../hocs/withAuthorizedRoute";

import classes from "./LoggedLayout.module.scss";

const LoggedLayout: React.FC = ({ children }) => {
  const router = useRouter()
  const handleSignOut = () => {
    localStorage.clear()
    router.push('/')
  }
  return (
    <div className={classes.container}>
      <Navbar onSignOut={handleSignOut}/>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default withAuthorizedRoute(LoggedLayout, false);
