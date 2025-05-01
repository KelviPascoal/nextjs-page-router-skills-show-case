import { GetServerSideProps } from "next";

interface SSRProps {
  geradoEm: string;
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  return {
    props: {
      geradoEm: new Date().toISOString(),
    },
  };
};

export default function SSR({ geradoEm }: SSRProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>SSR - Server Side Rendering</h1>
      <p>Página gerada a cada requisição:</p>
      <strong>{geradoEm}</strong>
    </div>
  );
}
