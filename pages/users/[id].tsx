
import { useRouter } from 'next/router'
import { Detail } from "../../components/Users";
import LoggedLayout from "../../layouts/LoggedLayout";
import { useEffect, useState } from "react";
import { getUser } from '../../api/users';

const UsersPage = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)

  const handleFetchUser = async () => {
    const fetchedUser = await getUser(router.query.id as string)
    setUser(fetchedUser)
    
  }

  useEffect(() => {
    if(router) {
      handleFetchUser()
    }
  }, [router])

  return (
    <LoggedLayout>
      {user && <Detail user={user} extended />}
      
    </LoggedLayout>
  );
};

export default UsersPage;
