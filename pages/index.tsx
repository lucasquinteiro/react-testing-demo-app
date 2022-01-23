import type { NextPage } from "next";
import { useRouter } from "next/router";
import { login, LoginRequestBodyProps } from "../api/auth";

import { Form } from "../components/Login";
import MainLayout from "../layouts/MainLayout";
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
    <MainLayout>
      <Form onSubmit={handleSubmit} />
    </MainLayout>
  );
};

export default Home;
