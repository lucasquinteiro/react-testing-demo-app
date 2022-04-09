import Detail, { UserProps } from "../Detail";

import classes from "./List.module.scss";

interface Props {
  //   users: Array<UserProps>;
  users: any;
}

const List: React.FC<Props> = ({ users }) => {
  return (
    <div className={classes.container}>
      {users.map((user: any) => (
        <Detail user={user} key={user.id} />
      ))}
    </div>
  );
};

export default List;
