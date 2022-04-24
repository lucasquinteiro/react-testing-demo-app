import { useRef } from 'react'
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { register, RegisterRequestBodyProps } from "../api/auth";

import { Form } from "../components/Register";
import Toast from "../components/Toast";
import UnloggedLayout from "../layouts/UnloggedLayout";

const RegisterPage: NextPage = () => {
  const toastRef = useRef<any>()
  const router = useRouter()
  const handleSubmit = async (values: RegisterRequestBodyProps) => {
    try {
      await register(values);
      toastRef.current.openToast({type: 'success', message: 'User registered!'})
      setTimeout(() => {
        router.push("/");
      }, 2000)
      
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
      <Toast ref={toastRef}/>
    </UnloggedLayout>
  );
};

export default RegisterPage;
