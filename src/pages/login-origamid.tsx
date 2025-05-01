import LoginForm from "@/components/login";
import Head from "next/head";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Origamid</title>
        <meta
          name="description"
          content="Login inspirado no Origamid. Acesse sua conta com estilo."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <LoginForm />
    </>
  );
}
