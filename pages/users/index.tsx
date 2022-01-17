import { users as sampleUsers } from "../../tests/fixture/users";
import { List } from "../../components/Users";
import MainLayout from "../../layouts/MainLayout";

const UsersPage = () => {
  return (
    <MainLayout>
      <List users={sampleUsers} />
    </MainLayout>
  );
};

export default UsersPage;
