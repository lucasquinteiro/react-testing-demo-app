import { useEffect, useState } from "react";

import { getUsers } from "../../api/users";
import { List } from "../../components/Users";
import LoggedLayout from "../../layouts/LoggedLayout";

const UsersPage = () => {
  const [users, setUsers] = useState<Array<any>>([]);

  const handleFetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (err: any) {}
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <LoggedLayout>
      <List users={users} />
    </LoggedLayout>
  );
};

export default UsersPage;
