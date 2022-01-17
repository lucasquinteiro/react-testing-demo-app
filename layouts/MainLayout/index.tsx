import classes from "./MainLayout.module.scss";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
