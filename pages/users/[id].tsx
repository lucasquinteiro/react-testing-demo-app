import { users as sampleUsers } from "../../tests/fixture/users";
import { Detail } from "../../components/Users";
import LoggedLayout from "../../layouts/LoggedLayout";

const UsersPage = () => {
  return (
    <LoggedLayout>
      <Detail user={sampleUsers[0]} extended />
    </LoggedLayout>
  );
};

export default UsersPage;
