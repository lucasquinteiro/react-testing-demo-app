import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { register, RegisterRequestBodyProps } from "../api/auth";

import { Form } from "../components/Register";
import UnloggedLayout from "../layouts/UnloggedLayout";

const RegisterPage: NextPage = () => {
  const router = useRouter()
  const handleSubmit = async (values: RegisterRequestBodyProps) => {
    try {
      await register(values);
      router.push("/");
    } catch (err) {
      throw err;
    }
  };


  return (
    <UnloggedLayout>
      <Form onSubmit={handleSubmit} />
      <Link href="/">
        <a style={{marginTop: '24px', textDecoration: 'underline'}}>Login</a>
      </Link>
    </UnloggedLayout>
  );
};

export default RegisterPage;
