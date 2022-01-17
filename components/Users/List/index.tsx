import Detail, { UserProps } from "../Detail";

import classes from "./List.module.scss";

interface Props {
  //   users: Array<UserProps>;
  users: any;
}

const List: React.FC<Props> = ({ users }) => {
  return (
    <div className={classes.container}>
      <h2>Users</h2>
      {users.map((user: any) => (
        <Detail user={user} />
      ))}
    </div>
  );
};

export default List;
