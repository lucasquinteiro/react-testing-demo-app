import { users as sampleUsers } from "../../tests/fixture/users";
import { Detail } from "../../components/Users";
import MainLayout from "../../layouts/MainLayout";

const UsersPage = () => {
  return (
    <MainLayout>
      <Detail user={sampleUsers[0]} extended />
    </MainLayout>
  );
};

export default UsersPage;
