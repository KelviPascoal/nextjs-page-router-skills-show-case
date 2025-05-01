import { NextPageContext } from "next";
import Image from "next/image";

type ErrorProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorProps) {
  const message =
    statusCode === 500
      ? "Algo quebrou no servidor... 😢"
      : "Ocorreu um erro inesperado 😮";

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{statusCode || "Erro"} </h1>
      <p>{message}</p>
      <Image src="/hate-this.gif" alt="Error image" width={300} height={300} />
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
