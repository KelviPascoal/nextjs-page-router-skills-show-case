import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Meu App</title>
        <meta
          name="description"
          content="Faça login para acessar sua conta no Meu App."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div>
        <h1>Você precisa estar logado!</h1>
        <p>Faça login para acessar o perfil.</p>
      </div>
    </>
  );
}
