import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { login, LoginRequestBodyProps } from "../api/auth";

import { Form } from "../components/Login";
import UnloggedLayout from "../layouts/UnloggedLayout";
import handleSignin from "../lib/handleSignin";

const Home: NextPage = () => {
  const router = useRouter();
  const handleSubmit = async (values: LoginRequestBodyProps) => {
    try {
      const response = await login(values);
      handleSignin(response.data);
      router.push("/users");
    } catch (err) {
      throw err;
    }
  };

  return (
    <UnloggedLayout>
      <Form onSubmit={handleSubmit} />
      <Link href="/register">
        <a style={{marginTop: '24px', textDecoration: 'underline'}}>Register</a>
      </Link>
    </UnloggedLayout>
  );
};

export default Home;
