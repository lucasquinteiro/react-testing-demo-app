import type { NextPage } from "next";

import { Form } from "../components/Register";
import MainLayout from "../layouts/MainLayout";

const RegisterPage: NextPage = () => {
  const handleSubmit = async () => {};

  return (
    <MainLayout>
      <Form onSubmit={handleSubmit} />
    </MainLayout>
  );
};

export default RegisterPage;
